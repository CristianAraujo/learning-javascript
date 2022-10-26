// Fecha: 26 de octubre del 2022

/*
    Clases de los nodos
    Cada nodo pertenece a una clase. Cada clase puede brindar
    propiedades particulares de la clase. El árbol de herencia
    comienza con eventTarget, del cual hereda node y luego 
    el resto de clases.

    EventTarget
        Node
            Document
                HTMLDocument

            Element
                HTMLElement
                    HTMLInputElement
                    HTMLBodyElement
                    HTMLAnchorElement
            
            CharacterData
                Text
                Comment

    EventTarget: Raíz abstracta del árbol de herencia

    Node: Clase abstracta como base para los nodos del DOM.
        Da funcionalidades de parentNode, previuosSibling,
        nextSibling, childNodes, etc.

    Document: Es el documento como un todo

    CharacterData: Clase abstracta

    Text: Corresponde a texto dentro de elementos.

    Comment: Clase para comentarios

    Element: Es la clase base para los elementos del DOM
                    
*/

/*
    Uso de instanceof
    Podemos hacer uso de instanceof para checkear la herencia
*/
let body = document.body instanceof HTMLBodyElement;
console.log(body);
console.dir(document.body);

let elementoLi = document.querySelector('.pais');
console.log(elementoLi instanceof HTMLUListElement);
console.dir(document.querySelector('.pais-1'));

/*
    NodeType
    Manera antigua de obtener el tipo de un nodo.

    1: Element Nodes
    3: Text Nodes
    9: Document Objects
    (Hay otros)
*/
let tipo = document.querySelector('.pais-2');
console.log(tipo.nodeType);

let texto = document.body.childNodes[2];
console.log(texto.nodeType);


/*
    NodeName y TagName
    Podemos leer el nombre de un nodo 

    TagName solo se usa con elementos mientras que NodeName con
    cualquier tipo de nodo.
*/

let nombreMain = document.querySelector('.main-content').nodeName;
console.log(nombreMain);

let nombreTexto = document.body.childNodes[2].nodeName;
console.log(nombreTexto);

/*
    innerHTML
    Nos permite obtener el HTML dentro de un elemento en forma de
    cadena de texto.
*/

let lista = document.querySelector('.paises').innerHTML;
console.log(lista);
console.log(typeof(lista));

lista += '<li class="pais pais-7>Pais 7</li>';
console.log(lista);

document.querySelector('.paises').innerHTML = lista;


/*
    outerHTML
    Es similar a innerHTML, pero contiene una lista con los elementos
    en si y no en forma de texto plano.
*/

let listaElementos = document.querySelector('.paises').outerHTML;
console.log('Lista de paises:');
console.log(listaElementos);
console.log(typeof(listaElementos));


/*
    nodeValue/data
    Es la contraparte de innerHTML, nos entrega el contenido de nodos
    de texto y comentarios
*/
let nodotexto = document.body.childNodes[2];
console.log(nodotexto.nodeValue);

let comentario = nodotexto.nextSibling;
console.log(comentario.data);

/*
    textContent
    Provee acceso al texto dentro de un elemento, solo al texto
    sin los tags
*/
let textoPais_1 = document.querySelector('.pais-1').textContent;
console.log(textoPais_1);

/*
    hidden 
    Es un atributo del DOM que especifica si un elemento es visible
    o no. Funciona como la propiedad CSS display: none. Podemos 
    cambiar su valor de manera:

    elem.hidden = False
*/

let divOculto = document.getElementById('elemento');
divOculto.hidden = true;
console.log(divOculto);

/*
    Más propiedades
    Los elementos del DOM tienen otras propiedades, en particular
    muchas de ellas dependen de la clase a la que pertenece el 
    elemento. Por ejemplo:

    value: El valor de los elementos <input>, <select>, <textarea>
        etc. Cuyas clases son: HTMLInputElement, HTMLSelectElement
*/