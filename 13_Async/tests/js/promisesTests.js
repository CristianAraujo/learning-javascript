// Fecha: 9 de noviembre del 2022

// Crear una promesa
let promesa = new Promise(function (resolve, reject) {
    // Código que se ejecutará
});

// Ejemplo de promesa
let saludoPrometido = new Promise(function (resolve, reject) {
    setTimeout(() => console.log('Hola, saludo de ejemplo de promesa después de 2s'), 2000);
});


console.log(saludoPrometido);

// ¿Como revisar el estado de las promesas?
let saludoPrometido2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Hola, este es el saludo prometido2 luego de 2s!')
        console.log(saludoPrometido2);
    }, 2000);
});


let saludoPrometido3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Hola, este es el saludo prometido3 luego de 3s!')
    }, 3000);
});

saludoPrometido3.then(
    resultado => console.log(resultado),
    state => console.log(state)
)

console.log(`Saludo prometido3: ${saludoPrometido3}`);


console.log([
    {nombre: 'Camila', edad: 24},
    {nombre: 'Romina', edad: 22},
])

// Ejemplo de javascripttutorial
function getUsers(callback) {
    setTimeout(() => {
        callback([
            {nombre: 'Liset', edad: 21},
            {nombre: 'Carolina', edad: 22},
        ]);
    }, 4000);
}

function findUser(username, callback) {
    getUsers((users) => {
        let user = users.find((user) => user.nombre === username);
        callback(user);
    });
}

findUser('Carolina', console.log);


// Ejemplo mio javaScripttutorial

// Se crea array de objetos, cada objeto representará una persona cuyas
// propiedades serán nombre y edad.
let personas = [
    {nombre: 'Javiera', edad: 20},
    {nombre: 'Tatiana', edad: 33},
    {nombre: 'Janis', edad: 22},
]


// La función matchUsuario recibe un array y busca dentro del array si existe
// algún item cuya propiedad nombre coincida (haga match) con el argumento
// recibido nombreUsuario. La función retorna un objeto.
function matchUsuario(usuarios, nombreUsuario){
    let persona = usuarios.find((usuario) => usuario.nombre === nombreUsuario);
    return persona;
}


// ObtenerUsuarios recibe como primer parámetro una función que se encarga de 
// filtrar los datos, al llamar la función esta retorna un objeto, que luego es
// imprimido en pantalla. Como el llamado a la función se encuentra dentro de
// setTimeout, todas estas operaciones se ejecutan de manera asíncrona.
function obtenerUsuarios(callback, usuarios, nombre) {
    setTimeout(() => {
        let persona = callback(usuarios, nombre);
        console.log(`Persona dentro de funcion encontrar usuario\t nombre: ${persona.nombre}\t edad: ${persona.edad}`);
    }, 5000);
}

// encontrar usuario finalmente hace el llamado de las funciones anteriores para
// ello se le deben pasar todos los argumentos necesarios que serán utilizados por
// sus callbacks internos
function encontrarUsuario(obtener, matchear, usuarios, nombre) {
    obtener(matchear, usuarios, nombre);
}


let p = matchUsuario(personas, 'Janis');
console.log(`Nombre de usuario p: ${p.nombre} - ${p.edad}`);

let u = obtenerUsuarios(matchUsuario, personas, 'Javiera');
console.log(`Nombre de usuario u: ${u}`);


encontrarUsuario(obtenerUsuarios, matchUsuario, personas, 'Tatiana');