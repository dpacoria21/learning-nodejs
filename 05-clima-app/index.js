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
                if(id === '0') continue;

                
                const lugarSeleccionado = lugares.find((lugar) => lugar.id === id );
                busquedas.agregarHistorial(lugarSeleccionado.nombre);

                // clima
                const {lat, lng} = lugarSeleccionado;
                const clima = await busquedas.climaLugar(lat, lng);

                // mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSeleccionado.nombre);
                console.log('Lat: ', lugarSeleccionado.lat);
                console.log('Lng: ', lugarSeleccionado.lng);
                console.log('Temperatura: ', clima.temp);
                console.log('Minima: ', clima.temp_min);
                console.log('Maxima: ', clima.temp_max);
                console.log('Descripcion: ', clima.desc);
                break;
            case 2:
                busquedas.historialCapitalizado.forEach( (lugar, i) => {
                    const idx = `${i+1}.`.green;
                    console.log(`${idx} ${lugar}`);
                });
                break;
        }

        if(opt !== 0) await pausa();

    }while(opt !== 0);

}

main();