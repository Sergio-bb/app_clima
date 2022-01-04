const axios = require('axios')

class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'Bogota', 'Cusco', 'Quito']
    constructor(){
    //TODO leer DB si existe
    }

    async ciudad (lugar = ''){
        console.log('Ciudad', lugar);
        return[];//retornar los lugares que coincidadn con la busqueda
    }
}


module.exports= Busquedas;