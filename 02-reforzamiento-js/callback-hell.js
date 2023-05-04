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

const id = 1;

const getSalario = (id, callback) => {
    const salario = salarios.find((sal) => sal.id === id)?.salario;

    if(salario) {
        callback(null, salario);
    }else {
        callback(`El salario con id ${id} no existe manito :c`);
    }

};

getEmpleado(id, (err, empleado) => {

    if(err) {
        return console.log(err);
    }

    getSalario(2, (err, salario) => {
        if(err) {
            return console.log(err);
        }
    
        console.log(`El empleado ${empleado.nombre} tiene un salario de: ${salario}`);
    
    })

});
