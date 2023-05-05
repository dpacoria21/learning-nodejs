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

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((empleado) => empleado.id === id)?.nombre;
        if(empleado) {
            resolve(empleado);
        }else {
            reject(`El empleado con id ${id} no existe manito :c`);
        }
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find((salario) => salario.id === id)?.salario;
        salario ? resolve(salario) : reject(`El salario con id ${id} no existe`);
    });
}

// getEmpleado(2)
//     .then((empleado) => {
//         console.log(empleado);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// getSalario(2)
//     .then((salario) => {
//         console.log(salario);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

const id = 5;
let nombre;


getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id);
    })
    .then(salario => {
        console.log(`El empleado ${nombre} tiene un salario de: ${salario}`);
    })
    .catch((err) => console.log(err))