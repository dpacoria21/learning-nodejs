const axios = require('axios');


class Busquedas {

    historial = ['Peru', 'Argentina', 'Chile'];
    
    constructor() {
        //: leer DB si existe
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es',
        }
    }

    async buscarCiudad(lugar = '') {
        // Peticion para obtener la informacion
        try{

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox,
            });

            const resp = await instance.get();
            console.log(resp.data);

        }catch(err) {
            return [];

        }


        return []; // regresar las ciudades
    }


}

module.exports = Busquedas;