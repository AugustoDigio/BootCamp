
/* 1. Importamos la librería de express */
const express = require('express');

/* 2. Importamos path para que Node encuentre las rutas */
const path = require('node:path');

/* 3. Inicializamos la aplicación de express */
const app = express();

/* 4. Definimos el puerto */
const PORT = 3000; // React por defecto usa el puerto 3000

/* 5. Definimos la carpeta pública */
app.use(express.static(path.join(__dirname, 'public')));

/* 6. Ejecutamos la aplicación */
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});





