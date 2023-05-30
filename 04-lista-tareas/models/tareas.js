const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach((tarea) => {
            this._listado[tarea.id] = tarea;
        });
    }

    get getListado() {
        const listado = [];

        Object.keys(this._listado).forEach((key) => {
            listado.push(this._listado[key]);
        })

        return listado;
    }

    crearTarea(desc) {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

    listadoCompleto() {
        console.log();
        this.getListado.forEach((tarea, i) => {
            console.log(`${((i+1)+"").green}. ${tarea.desc} :: ${tarea.completadoEn ? 'Completado'.green : 'Pendiente'.red}`);
        })
    }

}

module.exports = Tareas;