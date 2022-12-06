// Fecha: 05 de diciembre del 2022

/**
 * Recordemos:
 * - Un iterable es una estructura de datos, cuyo contenido puede ser accedido via iteración. Es una
 *   fábrica de objetos iterators.
 * 
 * - Un iterador (iterator) es una fábrica de objetos de tipo iterationResults, que se entregan por
 *   el método next().
 * 
 * - El objeto iterationResult contiene las propieadades value y done. 
 */

// Ejemplo de iterador

let range = {
    desde: 0,
    hasta: 4,

    [Symbol.iterator]() {        
        
        return {
            actual: this.desde,
            final: this.hasta,

            next(){
                if (this.actual <= this.final) {
                    return { value: this.actual++, done: false };
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
}
// let iterator = range[Symbol.iterator]();
for (let num of range) console.log(num);

console.log('\n');

/**
 * La iteración asincróna debemos cambiar la manera en que los valores
 * son entregados por el método next(), estos deben ser entregados de 
 * manera asincróna. Para lograr lo anterior, hay dos alternativas:
 * 
 * - La propiedad .value debería contener una promesa
 * - el método next() debería retornar una promesa iteratorResult
 * 
 * Se selecciona la segunda alternativa, ya que ambas propiedades
 * .value y .done deben ser envueltas en una promesa.
 */

// Ejemplo de iterador asíncrono

const asyncRange = {
    from: 0,
    to: 5,

    [Symbol.asyncIterator] () {
        return {
            current: this. from,
            last: this.to,

            async next() {

                // No entiendo donde se retorna una promesa aquí
                await new Promise(resolve  => setTimeout(resolve, 1000));

                if (this.current <= this.last) {
                    return {done: false, value: this.current++};
                } else {
                    return {done: true, value: undefined};
                }
            }
        };
    }
};

async function callAsyncRange() {
    for await (let num of asyncRange) console.log(num);
}

// callAsyncRange();

let iterator = asyncRange[Symbol.asyncIterator]();
console.log('Iterator:');
console.log(iterator);

console.log('Llamando async next():');
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
