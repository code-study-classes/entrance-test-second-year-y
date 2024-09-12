import fs from 'fs'; 
import getPath from './get-path.js'; 
//import readlineSync from 'readline-sync'; 
//import reader from './file-reader.js'; 
 
const updater = (fpath, pattern) => {
    const filePath = getPath(fpath);
    fs.appendFileSync(filePath, pattern, 'utf-8');
    return true;
}

export default updater;
