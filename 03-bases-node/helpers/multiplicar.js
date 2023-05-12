const fs = require('fs');

const colors = require('colors');

const crearArchivoTabla = async (base = 5, l = false, h = 10) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 0; i <= h; i++) { 
            consola += (`${base} ${'x'.green} ${i} ${'='.green} ${i * base}`) + '\n';
            salida += (`${base} x ${i} = ${i * base}`) + '\n';
        }

        if(l) {
            console.log('===================='.green);
            console.log('Tabla del '.green, colors.blue(base));
            console.log('===================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return base;

    } catch (err) {
        throw `err desde la tabla de multiplicar beiby ${err}`;
    }
}

module.exports = {
    crearArchivoTabla
};