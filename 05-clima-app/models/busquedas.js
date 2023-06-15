const axios = require('axios');
const fs = require('fs');

class Busquedas {

    historial = [];
    dbPath = './db/database.json';
    
    constructor() {
        //: leer DB si existe
        this.leerDB();
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es',
        }
    }

    get historialCapitalizado() {
        return this.historial.map((lugar) => {
            return lugar.split(' ').map((word) => word[0].toUpperCase()+word.slice(1)).join(' ');
        });
    }

    get paramsOpenWeather() {
        return {
            'units': 'metric',
            'lang': 'es',
            'appid': process.env.OPENWEATHER_KEY,
        }
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

    agregarHistorial(lugar='') {
        // prevenir duplicados
        if(this.historial.includes(lugar.toLocaleLowerCase())) return;
        this.historial.unshift(lugar.toLocaleLowerCase());
        this.guardarDB();

    }

    guardarDB() {
        const payload = {
            historial: this.historial,
        };
        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }

    leerDB() {
        if( !fs.existsSync(this.dbPath) ) return;
        const info = fs.readFileSync(this.dbPath);
        const {historial} = JSON.parse(info);
        this.historial = historial;
    }


}

module.exports = Busquedas;