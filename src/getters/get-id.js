import reader from "../file-reader.js";

const getId = (fPath) => {
    const id = reader(fPath).split(`\n`).length;
    return id;
}

export default getId;