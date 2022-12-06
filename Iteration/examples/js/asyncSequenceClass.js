// Fecha: 06 de diciembre del 2022

/**
 * Archivo contiene ejemplo de clase AsyncSequense. Clase asíncrona
 * que entrega una secuencia.
 * 
 * https://www.javascripttutorial.net/es-next/javascript-asynchronous-iterators/#
 */

class AsyncSequence {
    constructor (start = 0, end = Infinity, step = 1) {
        this.start = start;
        this.end = end;
        this.step = step;      
    }

    [Symbol.asyncIterator] () {
        let current = this.start;
        let counter = 0;

        return {
            next: async () => {

                // ¿Porque aquí funciona .this accediendo a las
                // propiedades del objeto instancia de clase.
                if (current <= this.end) {
                    let result = {
                        value: current,
                        done: false
                    }

                    current += this.step;
                    counter++;

                    return new Promise((resolve, rejected) => {
                        setTimeout(() => {
                            resolve(result);
                        }, 1000);
                    });
                }

                return new Promise((resolve, rejected) => {
                    setTimeout(() => {
                        resolve({
                            value: counter,
                            done: true
                        });
                    }, 1000);
                });
            }
        };
    }
};

// async function useAsyncSequence() {
//     let numbers = new AsyncSequence(1, 10, 2);
//     for await (const num of numbers) {
//         console.log(num);
//     }
// }

async function useAsyncSequenceByDeclaring() {
    for await (const num of new AsyncSequence(1, 10, 2)) {
        console.log(num);
    }
}

// useAsyncSequence();
useAsyncSequenceByDeclaring();

