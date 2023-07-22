// Fecha: 07 de diciembre del 2022

// Se crea una función generadora simple:
function* simpleGenerator() {
    yield 1;
    yield 2;
}

// Consumimos la función generadora simple. Al
// invocar la función, esta nos entrega un objeto
// generador que es a su vez un objeto iterable
let resultSimpleGenerator = simpleGenerator();
console.log(resultSimpleGenerator);
console.log(resultSimpleGenerator.next());