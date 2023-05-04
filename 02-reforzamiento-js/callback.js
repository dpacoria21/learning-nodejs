// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 1000);

const getUsuarioByID = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Diego'
    }

    setTimeout(() => {
        callback(usuario);
        // console.log(usuario);
    }, 1500);

}

getUsuarioByID(10, (user) => {
    console.log(user);
    console.log(user.nombre.toUpperCase());
});