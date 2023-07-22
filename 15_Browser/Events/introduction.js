// Fecha: 28 de octubre del 2022

/**
 * Introducción a los eventos en el navegador
 * 
 *  Un evento es una señal de que algo ha pasado
 */

/**
 * Tipos de eventos
 * 
 * - Eventos del mouse
 * + click
 * + contextmenu
 * + mouseover / mouseout
 * + mousedown / mouseup
 * + mousemove
 * 
 * - Eventos del teclado
 * + keydown / keyup
 * 
 * - Eventos de elementos de formulario
 * + submit
 * + focus
 * 
 * - Eventos del documento
 * + DOMContentLoaded
 * 
 * - Eventos CSS
 * + transitioned
 */

/**
 * Manejadores de eventos
 * Son funciones que corren en caso de que un evento ocurra
 * 
 * + En atributo HTML
 *      Cuando lo hacemos como atributo del DOM podemos agregar el código en el atributo:
 *      <p onclick="alert('click aquí');">parrafo</p>
 *      
 *      O llamando a una función desde atributo
 *      <p onclick="saludo();">parrafo</p>
 *     
 */

function saludo () {
    alert("Hola se ha dado click");
}

/**
 * Con propiedades del DOM
 *      podemos asignar un manejador de eventos a una propiedad del DOM
 *      elem.onclick
 */
let element = document.getElementById('saludar');
element.onclick = function () {
    alert('Tremendo saludo');
};

/**
 * No se puede agregar más de una manejador de eventos con los métodos anteriores ya 
 * que al agregar un segundo manejador de eventos, este sobreescribirá al primero
 */

/**
 * Accediendo al elemento this
 * this dentro de un manjeador de eventos hace referencia al objeto en si donde ocurrío 
 * el evento 
 */

element.onclick = function () {
    this.innerHTML = 'Holitas';
}

/**
 * Posibles errores
 * 
 * - Asignar llamados a funciones directamente
 *      Cuando tenemos funciones que deseamos asignarlas como manejadores de eventos, debemos
 *      asignar la función sin hacer el llamado.
 *  
 *      correcto:
 *      elem.onclick = saludar;  
 *  
 *      incorrecto
 *      elem.onclick = saludar();
 * 
 * - No se puede usar setAttributo para crear manejadores de eventos
 *      No se puede hacer algo como esto:
 *      
 *      document.body.setAttribute('onlick', function() { alert(1) });
 * 
 * - Importan mayúsculas y minúsculas
 *      onclick y ONCLICK no son lo mismo, las propiedades del DOM son sensibles a mayúsculas
 * 
 */

/**
 * addEventListener y removeEventListener
 *      Estos métodos permiten añadir y remover manejadores de eventos sobre un objeto.
 * 
 *      elem.addEventListener(event, handler, [options])
 * 
 *      event: El evento a capturar
 *      handler: La función que se lanza cuando ocurre el evento
 *      options: 
 * 
 *      * Para remover un manejador de evento con removeEventListener necesitamos la misma función
 *      * addEventListener nos permite agregar múltiples manejadores de eventos
 *      * Algunos eventos solo pueden ser manejados con addEventListener como DOMContentLoaded
 * 
 */

let div = document.querySelector('.caja');
div.addEventListener('click', color);

function color () {
    this.style.backgroundColor = 'salmon';
}

/**
 * Objeto evento
 *      Cuando un evento sucede el navedor crea un objeto y pone los detalles del evento dentro del
 *      objeto y lo pasa como argumento al manejador de eventos asignado.
 */

let info = (e) => console.log(e);
div.addEventListener('click', info)

/**
 * Objectos manejadores de eventos: handleEvent
 *      Podemos además de funciones, con addEventListener, asignar objetos para manejar eventos. 
 *      Cuando un evento ocurre, el método handleEvent del objeto es llamado.
 */

let manejo = {
    handleEvent(e) {
        console.log(e.type + ' ocurrio en ' + e.currentTarget);
    }
};

div.addEventListener('click', manejo);

/**
 * También es posible asignar objetos de clases hechas por el usuario como manejadores de eventos
 * 
 */

class Menu {
    handleEvent(e) {
        switch(e.type) {
            case 'mouseover':
                element.style.backgroundColor = 'skyblue';
                break;
            case 'mouseout':
                element.style.backgroundColor = 'brown';
                break;
        }
    }
}

let menu = new Menu();
div.addEventListener('mouseover', menu)
div.addEventListener('mouseout', menu)

/**
 * El método hadleEvent no necesariamente debe hacer todo el trabajo, tambien la
 * clase puede tener otros métodos
 */

class menucito {
    handleEvent(e){
        
    }
}