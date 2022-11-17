// Fecha: 14 de noviembre del 2022
// let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let url = 'https://api.github.com/users/crstnaraujo';

async function traerDatos(url) {
    let datos = await fetch(url);
    console.log(typeof datos);
    console.log(datos instanceof Response);
    console.log(datos);
    document.querySelector('.datos').innerHTML += `${datos.status } : ${datos.ok}`;
    return datos;
}

async function traerCuerpo(url) {
    let response = await fetch(url);
    if (response.ok) {
        let cuerpo = await response.json();
        console.log(typeof cuerpo);
        document.querySelector('.datos').innerHTML = JSON.stringify(cuerpo);
        // document.querySelector('.datos').innerHTML += cuerpo;
    } else {
        alert('HTTP-Error: ' + response.status);
    }
}
        
// traerCuerpo(url);
let dat = traerDatos(url);
console.log(`datos: ${dat}`);

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));


