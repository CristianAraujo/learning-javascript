// Fecha: 25 de octubre del 2022

/*
    getElementbyId or id
    Nos proporciona acceso a un elemento con una ID conocida

    * El ID debe ser único.
    * El método getElementById se aplica sobre document, no se
      puede aplicar sobre algún otro elemento.
*/

// Acceder a un elemento mediante su ID
let contenidoPrincipal = document.getElementById('main-container');
console.log(`Contenido principal:\n ${contenidoPrincipal}`)
console.log(contenidoPrincipal);

// Usa la ID de manera directa. Solo funciona con nombres de ID
// que sean identificadores válidos en JavaScript. Se recomienda
// evitar su uso
lateral.style.color = 'red';


/*
    QuerySelectorAll
    Retorna todos los elementos que coincidan con el selector CSS
    que recibe como parámetro.

    elem.querySelectorAll(CSS)
    Retorna una colección de nodos.
*/

let articulos = document.querySelectorAll('.article');
console.log(articulos);


/*
    QuerySelector
    Retorna el primer elemento que coincide con el selector CSS
    que recibe como parámetro

    elem.querySelector(CSS)
    equivalente con elem.querySelectorAll(CSS)[0]
*/

let articulo_1 = document.querySelector('.article');
console.log(articulo_1);

/*
    matches
    Comprueba si un elemento hace match con un selector CSS que
    recibe como parámetro. Retorna verdadero o falso.
*/

let barra = document.body.matches('.lateral');
console.log(barra);

/*
    closest
    Busca el ancestro más cercano que coindica con el selector 
    CSS que recibe como parámetro. Incluye el elemeeto mismo en
    la búsqueda
*/

let con = document.querySelector('.article').closest('.list-articles');
console.log(con);

/*
    getElementsBy*
    Hoy en día estos métodos fueron reemplazados con querySelectorAll
    pero pueden encontrarse en código antiguo.
    Estos selectores retornan colecciones vivas, que siempre reflejan 
    el estado actual del DOM y se actualizan cuando hay cambios.

    elem.getElementsByTagName(tag)
    Busca un elemento con el tag dado y retorna una colección con el
    resultado

    elem.getElementsByClassName(class)
    Retorna los elementos que coincidan con la clase dada

    elem.getElementsByName(name)
    Retorna los elementos que coincidan con el atributo name que
    recibe como parámetro
*/

let barraLateral = document.getElementsByTagName('aside');
console.log(barraLateral);

let listaArticulos = document.getElementsByClassName('.article');
console.log(listaArticulos);

let inputNombre = document.getElementsByName('nombre');
console.log(inputNombre);