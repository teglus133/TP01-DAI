import {concatInvert, concatOnly} from './manejo-strings.js'
let textoEntrada01 = "Escuela";

let textoEntrada02 = "ORT";


const textoSalida = concatInvert(textoEntrada01, textoEntrada02);

console.clear();

console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);

console.log(`Texto de Salida: "${textoSalida}"`);


 