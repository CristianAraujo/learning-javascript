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

range = {
    desde: 0,
    hasta: 10,

    [Symbol.iterator]() {        
        return {
            actual: this.desde,
            final: this.hasta,

            next(){
                if (this.actual <= this.final) {
                    return { value: this.actual, done: false };
                }
                else {
                    return { done: true };
                }
            }
        };
    }
}

for (let num in range) console.log(num);