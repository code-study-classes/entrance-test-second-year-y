// import { fileURLToPath } from 'url'; //фенкция получает путь к файлу  
// import path from 'path'; 
import fs from 'fs'; 
import getPath from './get-path.js'; 
import readlineSync from 'readline-sync'; 
import reader from './file-reader.js'; 
 
const filePath = getPath('data/regions.csv'); 
const newData = readlineSync.question('New region: '); 
const actualData = reader('data/regions.csv'); 
const newId = actualData.split('\n').length; 
fs.appendFileSync(filePath, `\n${newId}; ${newData}`, 'utf-8'); 
console.log(reader(filePath));