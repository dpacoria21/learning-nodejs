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

const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
    
        return `El empleado ${empleado} tiene un salario de: ${salario}`;
    }catch(err) {
        throw (err);
    }
}


const id = 4;

getInfoUsuario(id)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })