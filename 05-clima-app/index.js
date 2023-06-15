require('dotenv').config();

const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

// console.log(process.env.MAPBOX_KEY);

const main = async() => {
    
    let opt;
    const busquedas = new Busquedas();

    do{

        opt = await inquirerMenu();

        switch(opt) {
            case 1:
                const lugar = await leerInput('Ingrese nombre del lugar:');
                await busquedas.buscarCiudad(lugar);

                // mostrar mensajes

                //buscar los lugares

                // seleccionar el lugar

                // clima

                // mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad');
                console.log('Lat:');
                console.log('Lng:');
                console.log('Temperatura:');
                console.log('Minima:');
                console.log('Maxima:');
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;

        }

        if(opt !== 0) await pausa();

    }while(opt !== 0);

}

main();