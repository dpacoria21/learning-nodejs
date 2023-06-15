const axios = require('axios');


class Busquedas {

    historial = ['Peru', 'Argentina', 'Chile'];
    
    constructor() {
        //: leer DB si existe
    }

    async buscarCiudad(lugar = '') {
        // Peticion para obtener la informacion
        try{
            
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);

        }catch(err) {
            return [];

        }


        return []; // regresar las ciudades
    }


}

module.exports = Busquedas;