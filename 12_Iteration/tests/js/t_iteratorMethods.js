// Fecha: 07 de diciembre del 2022

function makeIterator(from, to) {
    let current = from;

    return {
        next() {
            if (current <= to) {
                result = { value: current, done: false };
                current++;
                return result;
            }
            return { value: undefined, done: true } 
        },

        return(valor) { 
            return { value: valor, done: true } 
        },

        throw(exception) {
            console.log(`Error inesperado ${exception}`);
        }
    };
}

// Se crea un objeto iterator mediante el uso de la función 
// makeIterator
let iterador = makeIterator(1,3);

// Se llama al método de la función throw del  objeto iterator
iterador.throw(new Error('Error de conteo'));

// Se llama al método return del objeto iterator
console.log(iterador.return('Terminado'));

// Se consume el objeto iterator con llamadas sucesivas al método
// next()
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

// No se puede consumir el objeto iterator con un bucle for..of
// ya que no es un objeto iterable de por si, no implementa la 
// interfaz iterable por medio del método [Symbol.iterator]()

// for (const num of iterador) console.log(num);