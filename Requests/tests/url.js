// Fecha: 15 de noviembre del 2022
let direccion = new URL('/blog', 'https://concretoconstrucciones.cl');
console.log(direccion);

let protocolo = direccion.protocol;
let origin = direccion.origin;
let href = direccion.href;
console.log(protocolo);
console.log(origin);
console.log(href);

direccion.searchParams.set(['q', 'test me!'],['nombre', 'Camila']);
console.log(direccion);