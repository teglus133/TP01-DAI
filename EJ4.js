import {cambiarArchivo} from './renameArchivo.js';

export function EJ4() {
    const archivo = "./fulco.txt";
    const archivoRenamed = "./teglus.txt";

    cambiarArchivo(archivo,archivoRenamed);
}