//librerias 
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

//importar el servidor
const app = require('./app');

//levantar el servidor
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
}); 