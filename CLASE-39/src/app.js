//LIBRERIAS 
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');


//Crear el servidor 
const app = express();

//Configuracion de handlebars
app.engine('hbs', hbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  

//Rutas
app.get('/', (req, res) => {
    res.render('home');
});

//Exxportamos el servidor
module.exports = app;


//rutas 
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});
