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

let r = range;
console.log(`Imprimiendo r:`);
console.log(r);

console.log('\n');

let iterador = r[Symbol.iterator]();
console.log(`Imprimiendo iterador de r:`);
console.log(iterador);


// for (let num of range) {console.warn(num)};

// Implementación versión 2

let rango = {
    from: 0,
    to: 10,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

let r2 = rango;
console.log('\n');
console.log(`Imprimiendo R2:`);
console.log(r2);

class Ran {
    constructor (from, to) {
        this.from = from;
        this.to = to;
    }

    [Symbol.iterator](){
        let next = Math.ceil(this.from);
        let last = this.to;

        return {
            next() {
                return (next <= last) ? { done: false, value: next++ } : { done: true, value: undefined };
            },

            // [Symbol.iterator]() { return this; }
        };
    }
}

class Ran2 {
    constructor (desde, hasta) {
        this.desde = desde;
        this.hasta = hasta;
    }

    [Symbol.iterator]() {
        let inicio = this.desde;
        let fin = this.hasta;

        return {
            // ¿Por qué en esta parte this primero hace referencia al objeto actual
            // pero en la asignación de variables hace referencia al objeto de la
            // instancia de la clase?
            h1: inicio,
            h2: fin,
            print(){ console.log(this); },

            next(){
                if (inicio <= fin){
                    return {
                        value: inicio++,
                        done: false,
                    };
                }

                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }
}


console.log('\n');

let r3 = new Ran(1, 10);
console.log('Imprimiendo R3:');
console.log(r3);

console.log('\n');

let iterR3 = r3[Symbol.iterator]();
console.log('Imprimiendo iterador R3');
console.log(iterR3);

console.log('\n');

console.log('Llamando a método next iterR3 (clase Ran):')
let iterR3Result = iterR3.next();
console.log(iterR3Result);

console.log('\n');

console.log('Usando R3 (clase Ran):');
console.log(iterR3.next());
console.log(iterR3.next());
console.log(iterR3.next());

console.log('\n');

console.log('Usando R3 (clase Ran) con for..of:');
for(num of new Ran(10, 14)) console.log(num);

console.log('\n');

console.log('Usando Ran2 (clase Ran2):');
let ran2 = new Ran2(1,5);
console.log('Imprimiendo Ran2:');
console.log(ran2);

console.log('\n');
console.log('Imprimiendo Ran2iter')
let ran2Iter = ran2[Symbol.iterator]();
console.log(ran2Iter);

console.log('\n');
console.log('Imprimiendo Ran2iter.next()');
console.log(ran2Iter.next());

console.log('\n');
console.log('Imprimiendo Ran2iter.print()');
ran2Iter.print();

console.log('\n');
console.log('Imprimiendo Ran2iter.h1');
console.log(ran2Iter.h1);

console.log('\n');
console.log('Imprimiendo Ran2iter.h2');
console.log(ran2Iter.h2);

console.log('\n');
console.log('Usando Ran2iter.next()');
console.log(ran2Iter.next());
console.log(ran2Iter.next());
console.log(ran2Iter.next());

console.log('\n');
console.log('Consumiendo Ran2 con un for..of');
for(let num of new Ran2(20, 24)) console.log(num);