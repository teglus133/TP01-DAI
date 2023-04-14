import {concatInvert, mostrar} from './manejo-strings.js'
export function EJ1() {
    
    let textoEntrada01 = "Escuela";
    
    let textoEntrada02 = "ORT";
    
    
    const textoSalida = concatInvert(textoEntrada01, textoEntrada02);
    mostrar(textoEntrada01,textoEntrada02,textoSalida);
}






 