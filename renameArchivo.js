import fs from 'fs'
export function cambiarArchivo(a, ar) {
    fs.copyFile(a, ar, (err) => {
        if (err) throw err;
        console.log('File Renamed!');
    })
}