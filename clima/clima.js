const axios = require('axios');


const getClimate = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=37a4e8f97e408c95a67db506701f34e1&units=metric`);
    return resp.data.main.temp;
}
module.exports = {
    getClimate
}