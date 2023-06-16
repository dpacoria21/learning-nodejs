const express = require('express');

const app = express();
const port = 8080;

app.get('/', function(req, res) {
    res.send('Home Page')
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo desde su ruta');
});

app.get('*', function(req, res) {
    res.send('Page not found');
})

app.listen(port, () => {
    console.log(`Corriendo el servidor en el puerto: ${port}`);
});