const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener su clima',
        demand: true
    }
}).argv;

// lugar.getlugarlatlng(argv.direccion)
//     .then(console.log)


// clima.getClimate(51.51, -0.13)
//     .then(console.log)
//     .catch(console.log);
const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getlugarlatlng(direccion);
        const temp = await clima.getClimate(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de  ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)