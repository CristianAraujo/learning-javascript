// Fecha: 15 de noviembre del 2022

let url =  new URL('/article/xmlhttprequest/example/json', 'https://javascript.info');
console.log(url);

let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'JSON';
xhr.send();
let respuesta = xhr.response;
let mensaje = respuesta.mensaje;
console.log(mensaje);