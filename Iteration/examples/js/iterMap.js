// Fecha: 01 de diciembre del 2022

function iterMap(iterable, funcion){
    let iterador = iterable[Symbol.iterator]();

    return {
        [Symbol.iterator]() { return this; },

        next() {
            let v = iterador.next();
            if (v.done) {
                return v;
            } else {
                return { value: funcion(v.value) };
            }
        }
    };
}

// Implementación
let resultado = [...iterMap([1,2,3,4], x => x * x)]
console.log(resultado);