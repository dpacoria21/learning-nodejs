const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'hbs');

// servir contenido estatico 
app.use( express.static('public') );


// app.get('/', function(req, res) {
//     res.send('Home Page')
// });

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/generic', (req, res) => {
    res.sendFile(__dirname+'/public/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname+'/public/elements.html');
})

app.get('*', function(req, res) {
    res.sendFile(__dirname+'/public/404.html');
})

app.listen(port, () => {
    console.log(`Corriendo el servidor en el puerto: ${port}`);
});