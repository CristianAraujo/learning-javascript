// Se crea una promesa resulta.
// ¿No necesito el operador new para crear una promesa, como
// let promesa = new Promise()?
let promesa = Promise.resolve('Hola');

// Imprimo el objeto para ver como esta
console.log(promesa);

// Verifico el tipo de dato
console.log(typeof promesa);

// Se procesa la promesa con el método then()
promesa.then(resultado => console.log(resultado));

// Se crea una promesa con un valor recjected
const miError = new Error('Mi error');
Promise.reject(miError)
    .catch(
        err => console.log(err)
    );


    asyncFunc1()
    .then(result1 => { asyncFunc2().then( result2 => {} ) });


    const promises = [
        new Promise(
            (resolve, reject) =>
                setTimeout(() => resolve('result'), 100)
        ), // (A)
        new Promise((resolve, reject) =>
          setTimeout(() => reject('ERROR'), 200)), // (B)
      ];


