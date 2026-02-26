
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;




app.get('/index', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
    if (err) next(err); 
  });
});


app.get('/about', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'), (err) => {
    if (err) next(err);
  });
});

// Ruta /contact → sirve contact.html
app.get('/contact', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'), (err) => {
    if (err) next(err);
  });
});




app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Página no encontrada</h1>
    <p>La ruta <strong>${req.url}</strong> no existe.</p>
    <a href="/index">Volver al inicio</a>
  `);
});


app.use((err, req, res, next) => {
  console.error('Error interno:', err.message);
  res.status(500).send(`
    <h1>500 - Error interno del servidor</h1>
    <p>Algo salió mal. Intenta de nuevo más tarde.</p>
    <a href="/index">Volver al inicio</a>
  `);
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});