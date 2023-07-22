// Fecha: 13 de diciembre del 2022

let a = 10;

{
    let j = 4;
}
let b = 5;

let c = a + b;
console.log('c:', c);

function min (...nums) {
    console.log(nums);
    return Math.min(nums);
}

console.log('min', min(1,2,2,9,73));

function testLength(name, citizen, age) {
    return `${name} is ${age} and is ${citizen}`;
}

let funcLength = testLength.length;
console.log('funcLength:', funcLength);
console.log('nombre testLength:', testLength.name);
console.log('arguments testLength:', testLength.arguments);
console.log('prototype testLength:', testLength.prototype);

function f(y, z) { return this.x + y + z; }
let o = { x: 1 };
let g = f.bind(o, 2 );
console.log('g:', g(3));
console.log('objeto o:', o);
console.log('objeto function g:', g);

console.log('f.toString:',f.toString());