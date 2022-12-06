// Fecha: 01 de diciembre del 2022

/**
 * Se implementa clase Range del ejemplo 12-1. Pág 329. JavaScript Definitive Guide.
 */

class Range {
    constructor (from, to) {
        this.from = from;
        this.to = to;
    }

    has(x) {
        return typeof x === 'number' && this.from <= x && x <= this.to;
    }

    toString() {
        return `{ x | ${this.from} <= x <= ${this.to} }`;
    }

    [Symbol.iterator]() {
        let next = Math.ceil(this.from);
        let last = this.to;

        return {
            next() {
                return (next <= last) 
                    ? {value: next++}
                    : {done: true};
            },

            [Symbol.iterator]() {
                return this;
            }
        };
    }
}

// Ejemplo de uso
for(let x of new Range(0,10)) {
    console.log(x);
}

let rango = new Range(10,20);
console.log(rango.has(19));
console.log(rango.toString());