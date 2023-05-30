require('colors');

const inquirer = require('inquirer');
const {inquirerMenu, pausa, leerInput} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
// const { mostrarMenu } = require('./helpers/mensajes.js')

const main = async () => {

    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if(tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    await pausa();

    do{
        opt = await inquirerMenu();
        console.log({opt});

        switch(opt) {
            case '1':
                //Crear Opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                break;

            case '2':
                console.log(tareas.getListado);
                break;
            
        }


        guardarDB(tareas.getListado);

        await pausa();

    }while(opt !== '0');

    // pausa();
}

main();