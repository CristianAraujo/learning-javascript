// Fecha: 26 de octubre del 2022

/*
    Modificar el DOM
    Modificar el DOM es la llave para las páginas vivas. Crear y
    editar elementos al vuelo.
*/

/*
    Crear un elemento
    document.createElement(tag)
    Crea un nuevo elemento con el tag dado.

    document.createTextNode(text)
    Crea un nuevo nodo de texto


*/

// Creamos un nodo <div>
let div = document.createElement('div');

// Creamos un texto
let texto = document.createTextNode('Hola estoy aquí');

// Añadimos una propiedad de clase al nodo <div> creado
div.className = "alert";

// Ponemos contenido al <div> creado
div.innerHTML = "<strong>Hola estoy creando un div</strong> que se agregará";
console.log(div);

/*
    Métodos de inserción
    
    node.append(...nodes or strings)
    Agrega nodos o strings al final del nodo

    node.prepend(...nodes or strings)
    Inseta nodos o strings al inicio del nodo

    node.before(...nodes or strings)
    Inserta nodos o strings antes del nodo

    node.after(...nodes or strings)
    Inseta nodos o strings después del nodo

    node.replaceWith(...nodes or strings)
    Reemplaza el nodo con los nodos o strings dados

    * Los argumentos de todos estos métodos son una arbitraria lista
    de nodos DOM o strings a insertar
*/

// Se inserva <dif> creado anteriormente al inicio de body
document.body.appendChild(div);

// Se inserta un texto antes de la lista ol
ol.before('Antes de la lista');

// Se inserta un texto despues de la lista ol
ol.after('Despues de la lista');

// Se creea un elemento <li>
let liFirst = document.createElement('li');

// Se inserta dentro del elemento <li> un texto
liFirst.innerHTML = 'prepend';

// Se agrega a la lista <ol> el elemento <li> creado
ol.prepend(liFirst)

// Se crea un elemento <li>
let liLast = document.createElement('li');

// Se agrega en el nodo <li> un texto
liLast.innerHTML = 'append';

// Se agrega al final de la lista el nodo creado
ol.append(liLast);


/*
    El texto es insertado como texto, no como HTML aunque este
    contenta etiquetas HTML
*/

let divParrafo = document.createElement('div');
divParrafo.className = 'div-parrafo'
divParrafo.before('<p>hola</p>');
document.body.appendChild(divParrafo);

/*
    Insertar nodos adyacentes

    elem.insertAjacentHTML(where, html)
    Inserta HTML en donde se le indique respecto al elemento de
    referencia

    elem.insertAjacentText(where, text)
    Inserta una cadena de texto donde se le indique en el primer
    parámetro respecto al elemento elem de referencia
    
    elem.insertAjacentElement(where, elem)
    Inserta un elemento donde se le indique en el primer parámetro
    respecto al elemento elem de referencia

    * En la práctica solo se usa inserAdjacentHTML, ya que es para
      elementos y texto.

    Lugares de inserción
    "beforebegin" - inmediatamente antes del elemento elem
    "afterbegin" - dentro del elemento elem, al inicio
    "beforeend" - dentro del elemento elem, al final
    "afterend" - inmediatamente despues del elemento elem
*/

ol.insertAdjacentHTML('beforebegin', '<p>HELLO LISTA</p>');
ol.insertAdjacentHTML('afterend', '<p>SE TERMINO LA LISTA</>');


/*
    Remover nodos
    node.remove()
    Remueve un nodo
*/

// Se crea un nodo párrafo
let nodoParrafo = document.createElement('p');

// Se añade texto al párrafo
nodoParrafo.append('Hola este es el nodo parrafo');

let textoParrafo = document.createTextNode('Hola este es textnode');
console.log(textoParrafo);
nodoParrafo.insertAdjacentText("beforeend", 'hola');

// Se remueve el nodo nodoParrafo
ol.after(nodoParrafo);
setTimeout(() => nodoParrafo.remove(), 4000);

/*
    Mover elementos
    Podemos mover elementos con los métodos de inserción. Todos los
    métodos de inserción remuven el elemento de su antigua ubicación
*/

// Seleccionamos los nodos con los que vamos a trabajar
let primero = document.querySelector('.primero');
let segundo = document.querySelector('.segundo');

// Cambiamos el orden de los nodos
segundo.after(primero);

/*
    Clonar nodos
    elem.cloneNode(true)
    Crea una copia profunda con todos sus hijos cuando su parámetro
    es true

    elem.cloneNode(false)
    Clona el elemento sin los elementos hijos
*/

// Seleccionamos el elemento y lo clonamos. En este caso solo hay
// un nodo de texto en su interior el cual será clonado por ser hijo
let primeroCloneTrue = primero.cloneNode(true);
console.log(primeroCloneTrue);

// Seleccionamos el elemento y lo clonamos. En este caso el elemento
// se clona vacío, ya que como parámetro recive false.
let primeroCloneFalse = primero.cloneNode(false);
console.log(primeroCloneFalse);


/*
    DocumentFragment
    Es un nodo especial del DOM que sirve como contenedor para pasar
    una lista de nodos. Podemos pasar la lista de nodos e insertarla
    en algún otro lugar.
*/
function generarLista() {
    let fragment = new DocumentFragment();
    for (let i = 1; i <= 3; i++) {
        let li = document.createElement('li');
        li.append(i * 5);
        fragment.append(li);
    }
    return fragment;
}

segundo.insertAdjacentHTML('afterend', '<ul class="listaAfter"></ul>');
document.querySelector('.listaAfter').append(generarLista()); 

/*
    DocumentFragment es raramente usado ya que para esto podemos usar
    una lista de nodos. Se menciona mayormente ya que hay algunos 
    conceptos que hacen uso de este, como template element.
*/

/*  
    Métodos antiguos de inserción y eliminación
    Hay métodos antiguos de inserción y eliminación que existen aún 
    por razones historicas, pero no se aconseja su uso.

    - parentElem.appendChild(node)
      Agrega un nodo como el último hijo de parentElem

    - parentElem.InserBefore(node, nextSibling)
      Inserta un nodo antes de nextSibling dentro de parentElem
    
    - parentElem.removeChild(node)
      Remueve un nodo del elemento parentElem (el nodo debe ser hijo)

    Todos estos métodos retornan el nodo insertado o removido como 
    valor.
*/


/*
    document.write
    Es un mmétodo muy antiguo que permite añadir algo a la página.
    Este método escribe HTML dentro del documento. En JavaScript
    moderno este método no se usa ya que tiene limitaciones
    
    - Solo funciona mientras la página se está cargando
*/

