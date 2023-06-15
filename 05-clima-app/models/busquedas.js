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

    get paramsOpenWeather() {
        return {
            'units': 'metric',
            'lang': 'es',
            'appid': process.env.OPENWEATHER_KEY,
        }
        // ?lat=40.739979&lon=-84.105006&appid=eb70e2ac101aed89d34685a1f2087c4b&units=metric&lang=es
    }

    async buscarCiudad(lugar = '') {
        // Peticion para obtener la informacion
        try{

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox,
            });

            const {data} = await instance.get();

            return data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            }));

        }catch(err) {
            return [];
        }


        return []; // regresar las ciudades
    }

    async climaLugar(lat, lon) {
        try{

            const instance = axios.create({
                baseURL: 'https://api.openweathermap.org/data/2.5/weather',
                params: {
                    lat,
                    lon,
                    ...this.paramsOpenWeather,
                }
            });

            const {data} = await instance.get();

            // const {temp, temp_min, temp_max} = data.main;
            const { main: {temp, temp_max, temp_min} } = data;

            // const [weather] = data.weather;
            // const {description: desc} = weather;
            const {weather: [ {description: desc} ]} = data;

            return {
                temp,
                temp_min,
                temp_max,
                desc,
            };

        }catch(err) {
            console.log(err);
        }
    }

}

module.exports = Busquedas;