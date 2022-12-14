// Fecha: 12 de diciembre del 2022
// "use strict";

function cuadrado(lado) {
    return lado * lado;
}

let lado = 5;
let area = cuadrado(lado + 2 + 3);
console.log(area);

function printDate(date) {
    console.log(date);
}

let fechaActual = new Date();
let returnPrint = printDate(fechaActual);
console.log(returnPrint);

const showThis = (function () { return this; }());
console.log('showthis:\n', showThis);

function showthisagain () { return this; };
let recivethis = showthisagain();
console.log('recivethis:\n', recivethis);

function strictmodethis () { 
    'use strict';
    return this;
}

let recivestrictthis = strictmodethis();
console.log('\nrecive strict this:\n', recivestrictthis);