// Fecha: 25 de octubre del 2022

/*
WALKING THE DOM
_________________________________________________________
*/

/*
    <html> = document.documentElement
    <body> = document.body
    <head> = document.head
*/
let documento = document.documentElement;
let cuerpo = document.body;
let cabecera = document.head;

// Imprime todo el documento HTML
console.log(documento);

// Imprime todo lo que se encuentra entre <body> y </body>
console.log(cuerpo);

// Imprime todo lo que se encuentra entre <head> y </head>
console.log(cabecera);

/*
    Si el script se ubica al inicio del documento, cuando aún
    los elementos del DOM no han sido parseados, entonces el
    resultado podría arrojar null, null significa no existe.
*/

/*
    Children
        childNodes  : Elementos que son hijos directos devuelve
                      una colección de nodos, incluyendo nodos
                      de texto.

        firstChild  : Da acceso al primer hijo directo.

        lastChild   : Da acceso al último hijo directo.

        descendientes : todos los elementos anidados dentro del
                        elemento sin importar el grado de anidación
*/

// Devuelve el primer nodo incluyendo nodos de texto
// en este ejemplo, el documento HTML tiene un salto de línea
// y una tabulación de 4 espacios.
let primero = document.body.firstChild;

// Devuelve el nodo que es el último hijo directo de <body>
let ultimo = document.body.lastChild;

// Devuelve una colección de nodos. Todos los hijos directos de
// <body>
let nodos = document.body.childNodes;

console.log(primero);
console.log(ultimo);
console.log(nodos);

/*
    DOM Collection
    childNodes pareciera ser una array, pero es una colección, una
    especio de array, como un objeto iterable, por lo que podemos
    usar for..of para iterar sobre el. Además los métodos de los
    arrays no funcionan en una colección.
*/

// Se recorre los nodos devueltos en la colección por la propiedad
// childNodes. Las DOM Collection son read-only
for (let nodo of nodos) {
    console.log(nodo);
}


/*
    Siblings and the parent
        Siblings : nodos que son hijos del mismo padre
        parent   : Nodo padre

        nextSibling
        previousSibling
        parentNode
*/
let containerSibling = document.body.childNodes[1].nextSibling.nextSibling;
console.log(containerSibling);

let padrePrincipal = containerSibling.parentNode;
console.log(padrePrincipal);

/*
    Element-only Navigation
    Los nodos de elementos represetan etiquetas HTML, por lo que
    excluyen nodos de texto, o comentarios.

    children : Solo los elementos hijos
    firstElementChild : Primer elemento hijo
    previuosElementSibling : Previo elemento hermano
    nextElementSibling : Siguiente elemento hermano
    parentElement : Elemento padre

    En ocasiones parentElement puede retornar null ya que el padre
    no es un elemento como sucede con documentElement cuyo padre es 
    el documento mismo, que no es un elemento html.
*/

let hijosBody = document.body.children;
console.log(hijosBody);

let primerHijoBody = document.body.firstElementChild;
console.log(primerHijoBody);

let hermanoPrevioScript = document.body.lastChild.previousElementSibling;
console.log(hermanoPrevioScript);

/*
    More links: Tables

    Las tables proveen ciertas propiedades especificas.

    table.rows: Colección de elementos <tr> de la tabla
    table.caption: Referencia al elemento caption de la tabla
    table.tHead: Referencia a elemento <tHead>
    table.tFoot: Referencia al elemento <tfoot>
    table.tBodies: Referencia a la colección de <tBody>

    <tBody>, <tFoot> y <tHead> proveen tbody.rows, tfoot,rows y
    thead.rows respectivamente, que es una colección de elementos
    <tr> dentro de sus elementos padre.

    tr.cells : Colección de <td> y <th> dentro de un <tr>
    tr.sectionRowIndex : La posición de un <tr> dentro de su 
        elemento padre.
    tr.rowIndex: El numéro de un <tr> en la tabla como un todo

    <td> y <th>:
    tb.cellIndex : El número de celda dentro de un <tr>
*/

