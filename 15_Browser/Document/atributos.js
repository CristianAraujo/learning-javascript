// Fecha: 26 de octubre del 2022

/*
    Atributos y propiedades
    Para los nodos, los atributos HTML estándar se convierten en
    propiedades de los objetos del DOM. Por ejemplo para el tag
    <body id="page"> entonces el objeto del DOM tiene a id como
    su proiedad. Es decir body.id="page".

    Pero el mapeo entre los atributos HTML y las propiedadees del
    DOM no siempre es uno a uno
*/

/*
    Propiedades del DOM
    Los nodos son objetos normales en JavaScript, por lo que estos
    se pueden modificar como cualquier otro objeto.

    También es posible añadir métodos.
*/

// Agregando propiedades
let anuncios = document.querySelector('.anuncios');
anuncios.myData = {
    name: 'Cristian',
    title: 'Personal'
}

console.log(anuncios.myData.name);
console.log(anuncios.myData.title);

// Agregando métodos
anuncios.saludar = function () {
    console.log('Dentro de función saludar')
    console.log(this.tagName);
}

anuncios.saludar();

/*
    HTML atributos
    Cuando el navegador parsea los atributos HTML, creando los
    objetos del DOM a partir de las etiquetas, este reconoce los
    atributos estándar y crea propiedades del DOM a partir de 
    ellos.
*/
let contenedor = document.body.children[0];
console.log(contenedor);
console.log(contenedor.id);

/*
    Si un atributo no es estándar, no habrá una propiedad del DOM
    para este. 

    Para acceder a los atributos tenemos:
    elem.hasAttribute(name) - Verifica la existencia del atributo
    elem.getAttribute(name) - Obtiene el valor
    elem.setAttributo(name, value) - Configura el valor
    elem.removeAttribute(name) - Remueve el atributo

    Para obtener una lista de los atributos
    elem.attributes
*/

// Se agrega un nuevo atributo name
contenedor.setAttribute('name', 'contener');
console.log(contenedor.attributes);

// Se verifica si existe el atributo name
console.log(contenedor.hasAttribute('name'));

// Se consulta el valor del atributo name
console.log(contenedor.getAttribute('name'));

// Se remueve el atributo name
contenedor.removeAttribute('name')
console.log(contenedor.attributes);


/*
    Sincronización propiedad - atributo
    Cuando un atributo estandar cambia, la propiedad correspondiente
    se auto-actualiza (con algunas excepciones) y viceversa.

    No todas las propiedades pueden actualizar atributos, por 
    ejemplo, input.value sincroniza solo atributo -> propiedad, pero
    no al revés.
*/

// Al cambiar el atributo id de aside, este hace que la propiedad
// id en el HTML se actualice de maner autómatica.
let lateral = document.getElementById('lateral');
lateral.setAttribute('id', 'barra');
console.log(lateral.getAttribute('id'));

// Cambiando el atributo se actualiza la propiedad del objeto
let nombre = document.getElementById('nombre');
console.log(nombre);
nombre.setAttribute('value', 'valor');
console.log(nombre.value);

// Cambiando la propiedad, no se actualiza el valor del atributo
// HTML
nombre.value = 'OtroValor';
console.log(nombre.getAttribute('value'));

/*
    Propiedades de DOM tipadas
    Las propiedades del DOM no siempre son strings. Por ejemplo
    input.checked (para checkboxes) es un bolean.
*/
let check = document.getElementById('check');

// En este caso el atributo es un string vacío
console.log(check.getAttribute('checked'));

// En este caso la propiedad es un bolean true
console.log(check.checked);

let divertido = document.getElementById('funnyDiv');

// Atributo style es un string
console.log(divertido.getAttribute('style'));

// Propiedad style es un objeto
console.log(divertido.style);

let enlace = document.querySelector('.enlace');

// Atributo es #
console.log(enlace.getAttribute('href'));

// Propiedad es una ruta absoluta
console.log(enlace.href);

/*
    Atributos no estándar dataset
    los atirbutos no estándar son usados para pasar información
    desde el HTML a JavaScript
*/

let user = {
    nombre : 'Cristian',
    edad : 33
};

// Pasamos información a elementos HTML mediante atributos
// personalizados
console.log(document.querySelectorAll('[show-info]'));
for(let div of document.querySelectorAll('[show-info]')){
    let campo = div.getAttribute('show-info');
    console.log(campo);
    div.innerHTML = user[campo];
}

/*  
    Los atributos personalizados presentan un problema y es que
    si usamos atributos personalizados y luego alguno de ellos
    se vuelve estándar podrían originarse efectos no deseados.

    Para evitar esto último, se usa los atributos data-*
    
    Todos los atributos que comienzan con data-* están reservados
    para propositos del programador
*/

let nosotros = document.querySelector('.nosotros');

// Los atributos que comienzan con data-* pueden ser accedidos
// por medio de la propiedad dataset del objeto DOM
console.log(nosotros.dataset.about);
console.log(nosotros.dataset.age);

// Los atributos con más de un guión se transforman en camel case
// en las propiedades DOM
console.log(nosotros.dataset.olderState);