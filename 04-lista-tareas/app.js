require('colors');

const inquirer = require('inquirer');
const {inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist} = require('./helpers/inquirer');
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

    // await pausa();

    do{
        opt = await inquirerMenu();
        // console.log({opt});

        switch(opt) {
            case '1':
                //Crear Opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                break;

            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletadas();
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            case '5':
                const ids = await mostrarListadoChecklist(tareas.getListado);
                tareas.toggleCompletadas(ids);
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.getListado);
                if(id !== 0) {
                    const ok = await confirmar('¿Está seguro?');
                    if(ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada');
                    }
                }
                break;
            
        }


        guardarDB(tareas.getListado);

        await pausa();

    }while(opt !== '0');

    // pausa();
}

main();