// Fecha: 01 de diciembre del 2022

/**
 * Ejemplo JavaScript Definitive Guide
 * Página 330
 */


function iterFilter (iterable, filtro) {
    let iterador = iterable[Symbol.iterator]();

    return {
        [Symbol.iterator]() { return this; },
        
        next(){
            for (;;) {
                let v = iterador.next();
                if (v.done || filtro(v.value)) {
                    return v;
                }
            }
        }
    };
}

// Implementación
let resultado = [...iterFilter([1,2,3,4,5,6,7,8,9,10], x => x % 2 == 0)]
console.log(resultado);