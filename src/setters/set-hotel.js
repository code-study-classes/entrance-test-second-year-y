import updater from '../file-updater.js';
import getId from  '../getters/get-id.js';
import readlineSync from  'readline-sync';
import reader from '../file-reader.js';

const newHotel = readlineSync.question('New Hotel: ').toLowerCase().trim();
const id = getId('data/hotels.csv')
const newRegion = readlineSync.question(`Hotel's region: `).toLowerCase().trim();

const regions = reader('data.regions/csv').split('\n')
const regionId = regions.filter((string) => {
    console.log(string);
    const [id, name] = string.split(';')
    return name == newRegion ? true : false;
}).at(0).split(';').at(0);
console.log(regionId)

// (string) => string.split(';').at(1) === newRegion
updater('data/hotels.csv', `\n${id};${newHotel};${regionId}`)
