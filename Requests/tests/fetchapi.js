// fecha 17 de noviembre del 2022

// Creamos un objeto URL
let url = new URL('/jokes/random', 'https://api.chucknorris.io');

// Se imprime en consola las propiedades de objeto URL creado
console.log(url);

// Primera manera de solicitar datos, con promesas. Se realiza un
// fetch, luego la respuesta es una promesa que se resuelve en un
// objeto Response, 
fetch(url)
    .then(res => {
        // Se imprime el objeto respuesta, en este momento es un
        // objeto ¿Promise o Response?
        console.log(res instanceof Response);
        console.log(res.headers)

        for(let [name, value] of res.headers) {
            console.log(`${name} ->>: ${value}`);
        }

        console.log(res);

        // Se retorna un 
        return res.json(); // ¿Aquí no podria usar resolve(res.json)?
    })

    // Se tiene un objeto JSON, que se puede usar para acceder a la
    // información. ¿Qué es data en este punto? ¿Promise?
    .then(data => { 
        // Se intenta imprimir el tipo de dato de data
        console.log(data instanceof Object);

        // Se imprime la propiedad value de data
        console.log(data.value)
    });

const res = async (url) => {
    let respuesta = await fetch(url);
    let cuerpo = await respuesta.json();
    return cuerpo;
}

const printresult = async (url) => {
    let cuerpo = await res(url);
    console.log(`Imprimiendo resultado:\n${JSON.stringify(cuerpo)}`);
}

printresult(url);