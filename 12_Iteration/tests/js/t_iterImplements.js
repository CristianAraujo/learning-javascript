// Fecha: 18 de noviembre del 2022

/**
 * Archivo contiene diversas pruebas sobre la implementación de iteradores
 * sincronos.
 * 
 * - Objeto Range
 * - Objeto Rango
 * - Objeto
 * 
 */


// Objeto Range

// Se crea un objeto que tiene como propiedades los limites
// del rango que iteraremos. Se agrega el método [Symbol.iterator]
// fuera del cuerpo del objeto.
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


// Implementación versión 2

let rangeMixto = {
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

let r2 = rangeMixto;
console.log('\n');
console.log(`Imprimiendo R2:`);
console.log(r2);

let rango2 = {
    from: 8,
    to: 14,

    // [Symbol.iterator]() {
    //     this.current = this.from;
    //     return this;
    // },
    
    [Symbol.iterator]() {
        return this;
    },

    next() {
        if (this.from <= this.to) {
            return { done: false, value: this.from++ };
        } else {
            return { done: true };
        }
    }

    // next() {
    //     if (this.current <= this.to) {
    //         return { done: false, value: this.current++ };
    //     } else {
    //         return { done: true };
    //     }
    // }
};

let rangoR2 = rango2;
console.log('\n');
console.log(`Imprimiendo R2:`);
console.log(rangoR2);

console.log('\n');
let iteratorRango2 = rango2[Symbol.iterator]();
console.log(`Imprimiendo iterator rango2:`);
console.log(iteratorRango2);

console.log('\n');
console.log(`Imprimiendo R2 next():`);
console.log(iteratorRango2.next());
console.log(iteratorRango2.next());
console.log(iteratorRango2.next());


class Ran {
    constructor (from, to) {
        this.from = from;
        this.to = to;
    }

    [Symbol.iterator](){

        // No comprendo porque deben agregarse estas variables, en libro se indica que cada
        // instancia del objeto iterator debe iterat el rango independientemente de los otros
        // pero, segun yo, al crear una nueva instancia, esta ya tiene sus propiedades indepenientes
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

class iterableIterador {
    constructor (desde, hasta) {
        this.desde = desde;
        this.hasta = hasta;
    }

    [Symbol.iterator] () {
        // this.inicio = this.desde;
        return this;
    }
    
    next() {
        return (this.desde <= this.hasta) ? { value: this.desde++, done: false} :{ value: undefined, done: true }; 
        // return (this.inicio <= this.hasta) ? { value: this.inicio++, done: false} :{ value: undefined, done: true }; 
    }
}

let iterableiter = new iterableIterador(0, 5);
let iterableiter2 = new iterableIterador(10, 15);
console.log(`\n`)
console.log(`Imprimiendo iterableiter (clase iterableIterador)`);
console.log(iterableiter);

console.log(`\n`)
console.log(`Imprimiendo iterableiter iterator (clase iterableIterador)`);
let iteratorIterableiter = iterableiter[Symbol.iterator]();
let iteratorIterableiter2 = iterableiter2[Symbol.iterator]();
console.log(iteratorIterableiter);

console.log(`\n`)
console.log(`Imprimiendo iterableiter iterator next() (clase iterableIterador)`);
console.log(iteratorIterableiter.next());
console.log(iteratorIterableiter.next());
console.log(iteratorIterableiter.next());

console.log(`\n`)
console.log(`Imprimiendo iterableiter iterator2 next() (clase iterableIterador)`);
console.log(iteratorIterableiter2.next());
console.log(iteratorIterableiter2.next());
console.log(iteratorIterableiter2.next());

console.log(`\n`)

console.log(`\n`)