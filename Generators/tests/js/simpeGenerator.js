// Fecha: 01 de diciembre del 2022

/**
 * Se crea una función generadora
 */

function* generador() {
    yield 2;
    yield 3;
    yield 5;
    yield 7;
    return `terminado`;
}

let primos = generador();
console.log(primos);

console.log(primos.next())
console.log(primos.next())
console.log(primos.next())
console.log(primos.next())
console.log(primos.next())


/**
 * Implementación de un generador expresado
 */

let secuencia = function* (from, to) {
    for (let i = from; i <= to; i++) { yield i; }
}

let seq = secuencia(5,9);
console.log(seq);
console.log([...seq]);