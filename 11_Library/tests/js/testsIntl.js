// Fecha: 28 de diciembre del 2022

let pesos = Intl.NumberFormat("es-CL", {
    style: "currency", 
    currency: "CLP",
    currencyDisplay: "symbol",
    maximumFractionDigits: 0
});

let amount = pesos.format(1000);
console.log(amount);

/**
 * Pruebas sobre la clase Intl.DateTimeFormat
 */

let d = new Date("2020-01-02T13:14:15Z");

// Sin opciones, se optiene el formato generico
// => "1/2/2020"
Intl.DateTimeFormat("en-US").format(d)

// => "02/01/2020"
Intl.DateTimeFormat("fr-FR").format(d)

let opts = { 
    weekday: "long", 
    month: "long", 
    year: "numeric", 
    day: "numeric" 
};

// => "Thursday, January 2, 2020"
Intl.DateTimeFormat("en-US", opts).format(d);
let chile = Intl.DateTimeFormat("es-CL", opts).format(d);
console.log(chile); 