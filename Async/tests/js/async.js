// Pruebas de Async / Await

// Async keyword.
// Al agregar Async en la declaración de una función indicamos
// que esta siempre retorne una promesa. Otros valores serán
// envueltos en una promesa resuelta.
async function uno (){
    return 1;
}

uno().then(result => console.log(result));

// Es equivalente a:
function dos () {
    return Promise.resolve(2);
}

dos().then(result => console.log(result));

// Await
// La palabra clava await pone a espera la ejecución del
// programa hasta que la promesa que se espera este 
// resuelta. No es posible usar await en funciones regulares
// es decir que no sean asíncronas.
async function espera () {
    let resultado = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hecho'), 2000);
    });

    let espero = await resultado;
    console.log(espero);
    console.log('Listo');
}

espera();
console.log('¿Esperando?');


// función que simula la calculos de datos
async function obtenerDatos() {
    console.log('Cargando datos');
    let datos = new Promise((resolve, recjected) => {
        setTimeout( () => {
            console.log('Datos cargados');
            resolve([2,3,4,5,]);
        }, 4000)
    });
    return await datos;
}

console.log(obtenerDatos());



