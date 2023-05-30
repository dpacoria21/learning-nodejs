require('colors');

const inquirer = require('inquirer');
const {inquirerMenu, pausa, leerInput} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
const { mostrarMenu } = require('./helpers/mensajes.js')

const main = async () => {
    console.log('Hola Mundo');

    let opt = '';
    const tareas = new Tareas();

    do{
        opt = await mostrarMenu();
        console.log({opt});

        switch(opt) {
            case '1':
                //Crear Opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                break;

            case '2':
                console.log(tareas._listado);
                break;
            
        }
        // if(opt !== '0') await pausa();
        // opt = await inquirerMenu();

        await pausa();

    }while(opt !== '0');

    // pausa();
}

main();