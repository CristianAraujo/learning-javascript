// Fecha: 07 de diciembre del 2022

class SequenceGenerator {
    constructor (start = 0, end = Infinity, step = 1) {
        this.start = start;
        this.end = end;
        this.step = step;
    }

    *[Symbol.iterator]() {
        for (let index = this.start; index <= this.end; index += this.step) {
            yield index;  
        }
    }
}

let numbers = new SequenceGenerator(2, 10, 2);
console.log(numbers);
for (let num of numbers) console.log(num);

