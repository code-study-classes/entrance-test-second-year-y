import { fileURLToPath } from 'url'; //фенкция получает путь к файлу  
import path from 'path'; 
// import fs from 'fs'; 
 
const getPath = (fPath) => { 
    const __filename = fileURLToPath(import.meta.url); 
    // console.log(__filename); 
    const __dirname = path.dirname(__filename); 
    // console.log(__dirname); 
    const filePath = path.join(__dirname, '..', fPath); 
//     console.log(filePath); 
    return filePath; 
 } 
 
 export default getPath;