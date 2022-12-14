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