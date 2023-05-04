const empleados = [
    {
        id:1,
        nombre: 'Diego'
    },
    {
        id: 2,
        nombre: 'Fernando'
    },
    {
        id: 3,
        nombre: 'Mariano'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1500
    },
    {
        id: 2,
        salario: 2000
    }
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id);
    if(empleado) {
        callback(null,empleado);
    }else {
        callback(`Empleado con id ${id} no existe`);
    }
}

getEmpleado(5, (err, empleado) => {

    if(err) {
        return console.log(err);
    }

    console.log(empleado);
})