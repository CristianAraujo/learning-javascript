// Fecha: 02 de octubre del 2022
function mostrarPorConsola(algo){
    console.log(algo);
}

function calculo(num1,  num2, callback){
    let sum = num1 + num2;
    callback(sum);
}

calculo(5, 5, mostrarPorConsola);

// Fecha: 0 de octubre del 2022
function saludar () {
    setTimeout( () => {
        console.log('Hola saludando');
    }, 3000);
}

saludar();
console.log('Me despido');

console.log('Comenzando');

function saludando(nombre, callback) {
    callback(`Hola como estas ${nombre}`);
}

console.log('Antes del saludando...');

saludando('Andrea', (saludo) => {
    console.log(saludo);
});


console.log('Fin');

const canFetch = typeof globalThis.fetch === 'function';
console.log(canFetch);

let nombrar = (nombre, llam) => {
    console.log(
        llam(nombre)
    );
}

let llamada = (nombre) => {
    return `Hola ${nombre}`;
}

nombrar('Cristian', llamada);

// Se crea 3 funciones que serán usadas como callbacks
let sumar = (num1, num2) => {
    console.log(`numeros: ${num1}, ${num2}`)
    console.log(num1 + num2);
};

let restar = (num3, num4) => {
    console.log(`numeros: ${num3}, ${num4}`);
    console.log(num3 + num4);
};

let mutiplicar = (num5, num6) => {
    console.log(`numeros: ${num5}, ${num6}`);
    console.log(num5 + num6);
}

// Se crea una función de alto nivel (hight order function) que llamará todos los callbacks que recibe.
let operar = (op1, op2, op3, num1, num2, num3, num4, num5, num6) => {
  op1(num1, num2);
  op2(num3, num4);
  op3(num5, num6);
  console.log(`resultados dados`)
}

operar(sumar, restar, mutiplicar, 4, 5, 6, 10, 12, 15);

let sumando = (num1, num2) => {
    setTimeout(() => console.log(num1 + num2), 4000);
}

sumando(2, 4);

function saludarDespues (nombre) {
    setTimeout(() => { 
        console.log(`Hola como estás ${nombre}`);
    }, 5000)
}

saludarDespues('Mariana');

let resta = (num1, num2) => console.log(`resta: ${num1 - num2}`);
function hacerResta (llamarResta, num1, num2) {
    setTimeout(llamarResta, 6000, num1, num2);
}

hacerResta(resta, 4, 2);