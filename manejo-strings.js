export function concatInvert(t1,t2) {
    const concatstr = t1 + t2;
    return concatstr.split('').reverse().join('');
}

export function concatOnly(t1, t2)
{
    const concatstr = t1 + t2;
}

export function mostrar(t1,t2,ts){
    console.clear();

    console.log(`Textos de Entrada: "${t1}" y "${t2}"`);

    console.log(`Texto de Salida: "${ts}"`);  
}