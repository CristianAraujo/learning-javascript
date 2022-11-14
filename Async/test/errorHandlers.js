
let dividir = (a, b) => {
    throw 'MiError';
}

// console.log(dividir(2,'j'));

let asyncDivision = new Promise((resolve, rejected) => {
    return dividir(1,1);
});

asyncDivision.then(
    result => console.log(result)
)