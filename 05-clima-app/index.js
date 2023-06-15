require('dotenv').config();

const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {
    
    let opt;
    const busquedas = new Busquedas();

    do{

        opt = await inquirerMenu();

        switch(opt) {
            case 1:
                // mostrar mensajes
                const termino = await leerInput('Ingrese nombre del lugar:');
                
                //buscar los lugares
                const lugares = await busquedas.buscarCiudad(termino);
                
                // seleccionar el lugar
                const id = await listarLugares(lugares);
                console.log({id});
                const lugarSeleccionado = lugares.find((lugar) => lugar.id === id );
                console.log(lugarSeleccionado);
                // clima

                // mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSeleccionado.nombre);
                console.log('Lat: ', lugarSeleccionado.lat);
                console.log('Lng: ', lugarSeleccionado.lng);
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