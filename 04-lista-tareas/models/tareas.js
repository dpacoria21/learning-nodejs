const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    constructor() {
        this._listado;
    }

    borrarTarea(id='') {
        if(this._listado[id]) {
            delete this._listado[id];
        }
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

    listarPendientesCompletadas(completadas = true) {
        console.log();
        this.getListado.forEach((tarea, i) => {
            if( Boolean(tarea.completadoEn) === completadas ) {
                console.log(`${((i+1)+"").green}. ${tarea.desc} :: ${tarea.completadoEn ? `${tarea.completadoEn}`.green : 'Pendiente'.red}`);
            }
        });
    }

    toggleCompletadas(ids = []) {
        ids.forEach((id) => {
            const tarea = this._listado[id];
            if( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString();
            }
        })

        this.getListado.forEach(tarea => {
            if( !ids.includes(tarea.id) ) {
                const tareaAux = this._listado[tarea.id];
                tareaAux.completadoEn = null;
            }
        })
    }
    

}

module.exports = Tareas;