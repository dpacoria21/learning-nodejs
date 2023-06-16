const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8080;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico 
app.use( express.static('public') );


// app.get('/', function(req, res) {
//     res.send('Home Page')
// });

const params = {
    nombre: 'Diego Ivan',
    titulo: 'Practicando con hbs', 
}

app.get('/', (req, res) => {
    res.render('home', params);
});
app.get('/generic', (req, res) => {
    res.render('generic', params);
});

app.get('/elements', (req, res) => {
    res.render('elements',params)
})

app.get('*', function(req, res) {
    res.sendFile(__dirname+'/public/404.html');
})

app.listen(port, () => {
    console.log(`Corriendo el servidor en el puerto: ${port}`);
});