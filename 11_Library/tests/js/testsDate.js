// Fecha: 27 de diciembre del 2022

let fecha = new Date();
console.log('Fecha: ',fecha);

let century = new Date(
    2100, 0, 1, 2, 3, 5, 2
);
console.log('century: ', century)

let century2 = new Date(Date.UTC(2100, 0, 1));
console.log('century2: ', century2)

let f = new Date();
console.log('f', f);

for (let prop in f) console.log(prop);

console.log('f:', f.getDay());
console.log('f:', f.getDate());

let fechaDiciembre = new Date(2022, 11, 27);
let fechaPosterior = fechaDiciembre.setMonth(fechaDiciembre.getMonth() + 1);
console.log('FechaPosterior: ', new Date(fechaPosterior));

let d = new Date(2020, 0, 1, 17, 10, 30);

// Convertimos a string el objeto anterior
console.log('d: ',d.toString());
console.log('fecha .toString()', d.toString());
console.log('fecha .toUTCString()', d.toUTCString());
console.log('fecha .toLocaleDateString()', d.toLocaleDateString());
console.log('fecha .toLocaleTimeString()', d.toLocaleTimeString());
console.log('fecha .toISOString()', d.toISOString());
console.log('fecha .toLocaleString()', d.toLocaleString());
console.log('fecha .toTimeString()', d.toTimeString());
console.log('fecha .toLocaleTimeString()', d.toLocaleTimeString());
