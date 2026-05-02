const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { engine } = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();

const connectDB = require('./config/db');
const productosRouter = require('./routes/productos.routes');
const carritoRouter = require('./routes/carrito.routes');
const Usuario = require('./models/Usuario');
const { enviarMailBienvenida, enviarMailPedido } = require('./services/mail.service');

const app = express();

// Handlebars
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'src/views/layouts'),
  partialsDir: path.join(__dirname, 'src/views/partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.static(path.join(__dirname, 'src/public')));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// Sesiones
app.use(session({
  secret: process.env.SESSION_SECRET || 'techstore_secret_2026',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

// Pasar usuario a todas las vistas
app.use((req, res, next) => {
  res.locals.usuario = req.session.usuario || null;
  next();
});

// API
app.use('/api/productos', productosRouter);
app.use('/api/carrito', carritoRouter);

// Vistas GET
app.get('/', (req, res) => res.render('home', { title: 'Inicio' }));
app.get('/productos', (req, res) => res.render('productos', { title: 'Productos' }));
app.get('/carrito', (req, res) => res.render('carrito', { title: 'Carrito' }));
app.get('/success', (req, res) => res.render('success', { title: 'Pedido confirmado' }));
app.get('/cancel', (req, res) => res.render('cancel', { title: 'Pago cancelado' }));

app.get('/login', (req, res) => {
  if (req.session.usuario) return res.redirect('/');
  const error = req.session.error;
  req.session.error = null;
  res.render('login', { title: 'Iniciar sesión', error });
});

app.get('/registro', (req, res) => {
  if (req.session.usuario) return res.redirect('/');
  const error = req.session.error;
  req.session.error = null;
  res.render('registro', { title: 'Registrarse', error });
});

app.get('/nosotros', (req, res) => res.render('nosotros', { title: 'Nosotros' }));

app.get('/recuperar', (req, res) => {
  const error = req.session.error;
  const success = req.session.success;
  req.session.error = null;
  req.session.success = null;
  res.render('recuperar', { title: 'Recuperar contraseña', error, success });
});

app.post('/recuperar', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      req.session.error = 'Ingresá tu email';
      return res.redirect('/recuperar');
    }
    const usuario = await Usuario.findOne({ email });
    // Siempre mostramos éxito por seguridad (no revelar si el email existe)
    if (usuario) {
      const { enviarMailRecuperacion } = require('./services/mail.service');
      enviarMailRecuperacion(usuario.nombre, email);
    }
    req.session.success = 'Si el email existe en nuestra base, recibirás un mensaje en los próximos minutos.';
    res.redirect('/recuperar');
  } catch (error) {
    console.error('Error en recuperar:', error);
    req.session.error = 'Error al procesar la solicitud. Intentá de nuevo.';
    res.redirect('/recuperar');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

// POST LOGIN
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      req.session.error = 'Completá todos los campos';
      return res.redirect('/login');
    }
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      req.session.error = 'Email o contraseña incorrectos';
      return res.redirect('/login');
    }
    const esValida = await usuario.compararPassword(password);
    if (!esValida) {
      req.session.error = 'Email o contraseña incorrectos';
      return res.redirect('/login');
    }
    req.session.usuario = { id: usuario._id, nombre: usuario.nombre, email: usuario.email };
    res.redirect('/');
  } catch (error) {
    console.error('Error en login:', error);
    req.session.error = 'Error interno. Intentá de nuevo.';
    res.redirect('/login');
  }
});

// POST REGISTRO
app.post('/registro', async (req, res) => {
  try {
    const { nombre, apellido, email, password, confirmPassword } = req.body;
    if (!nombre || !apellido || !email || !password) {
      req.session.error = 'Completá todos los campos';
      return res.redirect('/registro');
    }
    if (password !== confirmPassword) {
      req.session.error = 'Las contraseñas no coinciden';
      return res.redirect('/registro');
    }
    if (password.length < 6) {
      req.session.error = 'La contraseña debe tener al menos 6 caracteres';
      return res.redirect('/registro');
    }
    const existente = await Usuario.findOne({ email });
    if (existente) {
      req.session.error = 'Ya existe una cuenta con ese email';
      return res.redirect('/registro');
    }
    const usuario = new Usuario({ nombre, apellido, email, password });
    await usuario.save();
    enviarMailBienvenida(nombre, email);
    req.session.usuario = { id: usuario._id, nombre: usuario.nombre, email: usuario.email };
    res.redirect('/');
  } catch (error) {
    console.error('Error en registro:', error);
    req.session.error = 'Error al crear la cuenta. Intentá de nuevo.';
    res.redirect('/registro');
  }
});

// POST mail confirmación de pedido
app.post('/api/pedido-con-mail', async (req, res) => {
  try {
    const { items, total, cliente } = req.body;
    const emailDestino = cliente?.email || req.session.usuario?.email;
    const nombreDestino = cliente?.nombre || req.session.usuario?.nombre || 'cliente';
    if (emailDestino) enviarMailPedido(emailDestino, nombreDestino, items, total);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor', detalle: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
