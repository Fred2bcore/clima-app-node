const axios = require('axios');

const getlugarlatlng = async(direction) => {

    const encondeUrl = encodeURI(direction);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encondeUrl}`,
        headers: { 'X-RapidAPI-Key': '7dfa9d3282msh240ba2e242d8562p15530fjsn8895246dd3f3' }
    });
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direction}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;



    return {
        direccion,
        lat,
        lng
    }
}
module.exports = {
    getlugarlatlng
}