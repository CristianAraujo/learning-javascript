// Fecha: 07 de diciembre del 2022

/**
 * Se crea un generador que se usa como iterable
 */

/**
 * 
 * @param {int} from 
 * @param {int} to 
 */
function iterGenerator(from, to) {
    return {
        *[Symbol.iterator]() {
            for (let num = from; num <= to; num++) {
                yield num;
            }
        }
    };
}

let numbers = iterGenerator(1, 2);
console.log(numbers);
// console.log(numbers.next());

let numbersSequence = numbers[Symbol.iterator]();
console.log(numbersSequence);
console.log(numbersSequence.next());
console.log(numbersSequence.next());
console.log(numbersSequence.next());