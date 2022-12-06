// Fecha: 6 de diciembre del 2022

let asyncObjet = {
    from: 0,
    to: 4,

    [Symbol.asyncIterator] () {
        let current = this.from;
        let end = this.to

        return {
            next() {
                if (current <= end) {
                    result = {value: current, done: false};
                    current++;

                    return new Promise((resolve, rejected) => {
                        setTimeout(() => {
                            resolve (result);
                        }, 1000);
                    });
                }

                return new Promise((resolve, rejected) => {
                    setTimeout(() => {
                        resolve ({value: undefined, done: true});
                    }, 1000)
                });
            }
        };
    }
}

// Consumo correcto de iterable asíncrono
const useAsycObject = async () => {
    for await (const num of asyncObjet) {
        console.log(num);
    }
}

useAsycObject();

// Incorrecta manera de consumir el objeto iterador asíncrono
let objIterator = asyncObjet[Symbol.asyncIterator]();
console.log(objIterator);

// Llamadas al método next() devolverán Promise { <pending> }
// ¿Por qué se imprime un 4 al hacer varias llamadas, es como si
// desde la segunda llamada al método next(), se imprimieran 
// resuldatos
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
