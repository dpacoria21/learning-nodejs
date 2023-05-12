const {crearArchivoTabla} = require('./helpers/multiplicar');
const {argv} = require('./config/yargs')

const colors = require('colors');


console.clear();
console.log(argv);

console.log(argv.b, argv.l);
crearArchivoTabla(argv.b, argv.l, argv.h)
    .then((base) => {
        console.log(`Creado Exitosamente la tabla del ${base}`.rainbow);
    })
    .catch((err) => {
        console.log(`${err}`);
    })



