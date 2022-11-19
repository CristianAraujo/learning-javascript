// Fecha: 18 de noviembre del 2022

// Se implementa un objeto que iterador

// Se crea un objeto que tiene como propiedades los limites
// del rango que iteraremos
range = {
    from: 1,
    to: 5
};

// Para que un objeto sea iterable debe cumplir con implementar
// el método Symbol.iterator. 
range[Symbol.iterator] = function () {

    // Este método retorna un objeto con dos propiedades
    // y el método next(), que nos permite al llamarlo obtener
    // el siguiente valor.
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++};
            } else {
                return {done: true};
            }
        }
    };
};

for (let num of range) {console.log(num)};