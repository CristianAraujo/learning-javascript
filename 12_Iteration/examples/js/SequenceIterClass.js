// Fecha: 06 de diciembre del 2022

/**
 * Ejemplo JavaScript Tutorial
 * https://www.javascripttutorial.net/es6/javascript-iterator/
 */

class Sequence {
    constructor (start = 0, end = Infinity, interval = 1) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }

    [Symbol.iterator] () {
        let counter = 0;
        let nextIndex = this.start;

        return {

            // Aqui si pongo el métdo asi:
            // next() { } no funciona ¿Por qué?
            next: () => {
                if (nextIndex <= this.end) {
                    let result = {
                        value: nextIndex,
                        done: false
                    };

                    nextIndex += this.interval;
                    counter++;
                    return result;
                }

                return {
                    value: counter,
                    done: true
                };
            }
        };
    }
};

let numbers = new Sequence(1, 10, 2);
console.log(numbers);

console.log(numbers[Symbol.iterator]());
let numbersIterator = numbers[Symbol.iterator]();
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());

for (let num of numbers){
    console.log(num);
}

// class Sequence {
//     constructor( start = 0, end = Infinity, interval = 1 ) {
//         this.start = start;
//         this.end = end;
//         this.interval = interval;
//     }
//     [Symbol.iterator]() {
//         let counter = 0;
//         let nextIndex = this.start;
//         return  {
//             next: () => {
//                 if ( nextIndex <= this.end ) {
//                     let result = { value: nextIndex,  done: false }
//                     nextIndex += this.interval;
//                     counter++;
//                     return result;
//                 }
//                 return { value: counter, done: true };
//             }
//         }
//     }
// };

// let evenNumbers = new Sequence(2, 10, 2);

// for (const num of evenNumbers) {
//     console.log(num);
// }