// Fecha: 19 de noviembre del 2022

import assert from 'node:assert';

// Prueba de assert.deepEqual
let num1 = 1;
let num2 = 2;
let num3 = num1 + num2;

console.log(assert.deepEqual(num3, 3));