require('colors');

const inquirer = require('inquirer');
const {inquirerMenu, pausa} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
// const { mostrarMenu, pausa } = require('./helpers/mensajes.js')

const main = async () => {
    console.log('Hola Mundo');
    let opt = '';
    do{
        // opt = await mostrarMenu();
        // console.log({opt});
        // if(opt !== '0') await pausa();
        // opt = await inquirerMenu();
        const tareas = new Tareas();
        const tarea = new Tarea('Comprar comida');
        tareas._listado[tarea.id] = tarea;
        console.log(tareas);

        await pausa();

    }while(opt !== '0');

    // pausa();
}

main();