// Fecha: 10 de diciembre del 2022

/**
 * Creación de ojetos literales
 */

// Creación de un objeto vacío
let empty = {}
console.log(empty);

// Creación de un objeto con propiedades númericas
let punto = {  x: 0, y: 0 };
console.log('punto:', punto);

// Creación de un objeto literal compuesto
let libro = {
    "titulo principal": "JavaScript",
    subtitulo: "Definitive Guide",
    autor: {
        nombre: "David",
        apellido: "Flanagan"
    }
};

console.log('Libro:', libro);
console.log('Titulo principal:', libro["titulo principal"]);

/**
 * Creación de objetos con palabra reservada new
 */

let objeto = new Object();
console.log('objeto:', objeto);

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}
console.log('Persona:', Persona);

let empleado = new Persona('Loreto', 'Vegas', 22);
console.log('empleado:', empleado);
console.log('nombre empleado:', empleado.nombre);

/**
 * Creación de objetos con Object.create()
 */

let vehiculo = Object.create({ marca: "Tesla", modelo: "s3" });
console.log('vehiculo:', vehiculo);

// Creación de un objeto que no tiene prototipo
let objetoNoPrototype = Object.create(null);
console.log('Objeto sin prototipo:', objetoNoPrototype)

// Creación de un objeto vacio
let objetoVacio = Object.create(Object.prototype);
console.log('Objeto Vacio', objetoVacio);