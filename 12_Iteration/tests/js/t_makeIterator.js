// Fecha: 7 de diciembre del 2022

function makeIterator () {
    const arr = [1, 2, 3, 4];
    return {
        next(){
            if (arr.length) {
                return {value: arr.shift(), done: false};
            }
            return {value: undefined, done: true};
        }
    };
}

let iterador = makeIterator();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

// No podemos consumir un iterador directamente con un bucle for..of
// ya que este llama internamente al método [Symbol.iterator]().
for (let num of makeIterator()) console.log(num);