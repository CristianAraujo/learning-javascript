// Fecha: 28 de octubre del 2022

/**
 * Bubbling (Burbujeo)
 *      Cuando un evento ocurre en un elemento, este llama a su manejador de eventos,
 *      luego llama al manejador en su padre y así subiendo en la jerarquía de sus
 *      ancestros.
 */

// Se seleccionan varios componentes anidados
let boton = document.querySelector('.caja-4 > button');
let caja4 = document.querySelector('.caja-4');
let contenido = document.querySelector('.contenidos');

// Se crea un manejador de eventos
let click =  (e) => {alert(e.currentTarget)};

// Se agrega el manejador a todos los elementos
boton.addEventListener('click', click);
caja4.addEventListener('click', click);
contenido.addEventListener('click', click);

/**
 * En el ejemplo anterior el event de click se propaga desde el elemento más interno, en este caso
 * el boton, hasta el más exterior. Lo que se le llama burbujeo, es por eso que todos los manejadores
 * del evento en sus ancestros también reciben el evento.
 * 
 * Casí todos los eventos burbujean, pero algunos no, por ejemplo: focus no burbujea.
 */

/**
 * event.Target
 *      El elemento con mayor anidación que causa el evento es llamado target y es accesible a través
 *      de event.target
 *      
 *      * Diferencia entre target y this
 *        - event.target: Es el elemento target que ha iniciado el evento, no cambia duarante el burbujeo
 *        - this: Es el elemento actual en el cual se está corriendo el manejador en el.
 * 
 *      Por ejemplo, en la sección anterior si solo agregamos el manejador en el elemento .contenidos este
 *      correspondería a this, pero si el click es hecho en el button, este sería el event.target
 */

let enviar = document.querySelector('.enviar');
let noticias = document.querySelector('.noticias');
let aletarNoticias = (e) => alert(`target: ${e.target.tagName} | this: ${this.tagName}`);
noticias.addEventListener('click', aletarNoticias);

/**
 * Parar el burbujeo
 *      Los eventos burbujean hacia arriba en la jeraquía hasta llegar al elementoo <html> en algunos casos 
 *      hasta window. Para frenar el burbujeo se tiene el siguiente método:
 * 
 *      - event.stopPropagation()
 */

let sobre = (e) => { currentTarget.style.backgroundColor = 'red'}
noticias.addEventListener('mouseover', sobre);

/**
 * Si un elemento tiene múltiples manejadores para el mismo evento, si se se para el burbujeo para uno de 
 * ellos, el resto continuará propaganddse. En otras palabras si se usas event.stopPropagation() esto para
 * la propagación solo del manejador en particular.
 * 
 * Para parar la propagación en todos los manejadores de eventos, se tiene:
 * 
 * - event.stopInmediatePropagation()
 * 
 */

/**
 * No es necesario detener la propagación de todos los eventos. 
 * En ocasiones se quiere que los eventos se propaguen, como cuando deseamos analizar el comportamiento de
 * los clicks en toda la página. También podemos escribir nuestra propia información en nuestro objeto
 * evento dentro de un manejador y leer esa información dentro de otro objeto.
 */

/**
 * Capturando eventos
 * 
 * Los eventos estándar del DOM describen 3 fases
 * - fase de captura: Se viaja desde la parte superior del DOM hasta el elemento que causa el evento
 * - fase de target: Se encuentra el elemento sobre el cual se ejecuta el evento
 * - fase de burbujeo: Se propaga el evento desde el elemento donde se originó hasta la raíz del DOM
 * 
 * Remover un manejador de eventos necesita la misma fase
 *      Si añadimos un manejador con addEventListener(..., true), entonces necesitamos quitarlo de la misma
 *      manera con removeEventListener(..., true)
 * 
 * Los listener en la misma fase se ejecutan en el orden que fueron configurados
 *      Si tenemos múltiples manejadores de eventos asignados al mismo elemento con addEventListener, ellos
 *      correran en el orden que fueron creados.
 * 
 *      elem.addEventListener("click", e => alert(1)); // guaranteed to trigger first
 *      elem.addEventListener("click", e => alert(2));
 * 
 * event.StopPropagation() durante fase de captura también previene el burbujeo
 *      Cuando este método se llama en fase de captura, no solo frena la progragación sino que también frena 
 *      la captura.
 */     

// Viendo el funcionamiento del proceso de captura
let mostrarTag = (e) => {alert(e.this.tagName)}

for (let elem of document.querySelectorAll('*')) {
    elem.addEventListener('click', mostrarTag, true);
    elem.addEventListener('click', mostrarTag);
    console.log(elem);
}