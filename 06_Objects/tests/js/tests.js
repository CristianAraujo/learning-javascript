// Fecha: 09 de diciembre del 2022

let s = { x: 1, y:1}.toString();
console.log(s);

let o = console.log('hello');
console.log(o);


const ciudades = { 
    Filipinas: "Manila", 
    Malasia: "Kuala Lumpur",
    Tailandia: "Bangkok",
    Vietnam: "Hanoi" 
};

for (const pais in ciudades) {
    console.log(pais);
}

let a = { x: 1, y: 2 };
let b = { s: 3, j: 4 };
let c = { p: 4, q: 6 };

Object.assign(a, b, c);
console.log('a:', a);

let g = { x: 1, y: 2 };
let h = { s: 3, j: 4 };
let i = { p: 4, q: 6 };

let n = Object.assign({}, g, h, i);
console.log('n:', n);