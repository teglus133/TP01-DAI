import {sumar,restar,dividir,multiplicar,mostrarResultados} from './funciones-matematicas.js'


export function EJ2() {
    const num1 = 100;
    const num2 = 25;

    const pi = 3.14159265359;

    const numeroSumado = sumar(num1,num2);
    const numeroRestado = restar(num1,num2);
    const numeroDividido = dividir(num1,num2);
    const numeroMultiplicado = multiplicar(num1,num2);

    mostrarResultados(num1,num2,numeroSumado, numeroRestado, numeroDividido, numeroMultiplicado, pi)
    
}