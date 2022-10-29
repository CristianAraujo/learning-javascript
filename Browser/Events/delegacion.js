// Fecha: 28 de octubre del 2022

/**
    Delegación de eventos

    Si tenemos muchos elementos que se mejan de manera similar, entonces en lugar de asignar
    un manejador de eventos a cada uno de ellos, podemos poner un solo manejador en un
    ancentro comun. 

    Luego con event.targert podemos ver donde sobre que elemento ocurrio el evento

*/

// Seleccionamos la tabla en donde estan contenida
let table = document.querySelector('.paises');
function changecolor (e) {
    // e.target.style.backgroundColor = 'indigo';
    e.target.classList.toggle('seleccionado')
}
console.log(typeof(table));
table.addEventListener('click', changecolor);

/*
    [Nota de método que no se si he aprendido antes]
    - elem.contains(selector)
      Comprueba si dentro de un elemento hay otro que coincida con el selector pasado como 
      parámetro.
*/
let td = document.querySelector('td');
console.log(td);
function comprobarTD(contenedor, interno) {
    if (!contenedor.contains(interno)) return;
    console.log(`Contiene td: ${interno}`);
}
comprobarTD(table, td);

/*
    Ejemplo de delegación

    Hay otros usos para la delegación. En el siguiente ejemplo, delegaremos la captura de los
    eventos al elemento padre, y por medio del atributo data-action pasaremos la información 
    de en que elemento dentro del padre ocurrió el evento. Según donde sea el target del evento
    tomaremos distintas acciones en el manejador.

    En el ejemplo siguiente también se podría haber usado clases, pero semanticamente es mejor
    usar los atributos data-*.
*/

class Menu {
    // Necesito repasar POO en JavaScript para entender esto
    constructor(elemento) {
        this._elemento = elemento;
        elemento.onclick = this.onClick.bind(this);
        console.log(this);
    }
    
    save() {
        alert('Guardando');
        console.log(this);
    }

    load() {
        alert('Cargando');
    }
    
    search () {
        alert('Buscando');
    }
    
    send (){
        alert('Enviando');
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if(action) {
            this[action]();
        }
    };
}

let menu = document.querySelector('.menu')
new Menu(menu);

/*
    Patrón de comportamiento

    Podemos también usar la delegación de eventos para añadir comportamientos a los elementos
    de manera declarativa.

    - Podemos añadir un atributo personalizado al elemento que describa su comportamiento
    - 

    Ejemplo Behavior: counter

*/

document.addEventListener('click', function (e) {
    if (e.target.dataset.counter != undefined) {
        e.target.value++
    }
});

/*
    Ejemplo comportamiento: toggle
    Otro ejemplo de comportamiento es hacer click en un elemento con un atributo data-toggle-id
    el cual mostrará y oculatará el elemento con una id dada.
*/

// Al agregar el listener al documento, este escucha cualquier evento click
// que surga en el documento
document.addEventListener('click', function(e) {

    // Cuando ocurre un evento click, se debe reconocer de donde viene para
    // procesarlo de la manera en que deseamos. En este caso buscamos que el
    // click se produzca en un elmemento que tenga el atributo data-toggle-id
    // si eso sucede, entonces se consulta el valor del atributo, el cual se
    // guarda como valor de una ID para el elemento a buscar en el DOM.
    let id = e.target.dataset.toggleId;

    // Si el click no ocurrió en ningún elemento que tenga el atrbuto toggleId
    // entonces retornamos
    if(!id) return;

    // Si encontramos un elemento que tiene el atributo que nos interesa, entonces
    // seleccionamos el elemento que tenga como ID el valor del atribudo data-toggle-id
    // del elemento donde ocurrió el evento click.
    let elem = document.getElementById(id);

    // Finalmente cambiamos el valor del atributo hidden del elemento seleccionado, de 
    // manera que podemos hacer un toggle de este.
    elem.hidden = !elem.hidden;
});