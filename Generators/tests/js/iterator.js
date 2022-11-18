// Fecha: 18 de noviembre del 2022

let nodo = document.querySelector('.print');
nodo.innerHTML = '<h1>Hola</h1>';

// Declaro un objeto que sea iterable. 
let iterable = [2022, 2023, 2024];
console.log(iterable);

// llamando al método iterador de un objeto iterable se obtiene
// un objeto iterador.
let iterator = iterable[Symbol.iterator]();
console.log(iterator);

// Llamando al método next() de un objeto iterador se obtiene un
// objeto de resultado de la iteración. 
for(let result = iterator.next(); !result.done; result = iterator.next()) {
    console.log(result);
    console.log(`Valor: ${result.value}`);
}

let list = [1,2,3,4,5];
let iter = list[Symbol.iterator]();
let head = iter.next().value;
console.log(head);

let tail = [...iter];
console.log(tail);