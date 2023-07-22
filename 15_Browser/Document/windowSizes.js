// Fecha: 27 de octubre del 2022

/*
    Tamaño de ventana y scrolling
    ¿Cómo saber el tamañoo de la ventana del navegador?
    ¿Cómo saber el ancho total del documento incluyendo las scrollbars?
    ¿Cómo podemos hacer scroll en la página usando JavaScript?

    Para obtener esta información tenemos que usar el elemento del documento
    document.documentElement, que corresponde al tag <html>
*/


/*
    Width y Height de la ventana
    Para obtener el ancho de la ventana y su alto usamos:

    - document.documentElement.clientWidth
      Nos entrega el ancho del área de la vetana del navegador disponible para
      mostrar el contenido, sustrayendo el ancho del scrollbar si existe  
      
    - document.documentElement.clientHeight
      Nos entrega el alto del área de la vetana del navegador disponible para
      mostrar el contenido, sustrayendo el alto del scrollbar si existe  

    - window.innerWidth
      Nos entrega el ancho del área que muestra el contenido, incluyendo las 
      scrollbars
      
    - window.innerHeight
      Nos entrega el alto del área que muestra el contenido, incluyendo las 
      scrollbars

    * Siempre agregar el DOCTYPE
*/

let anchoVentana = document.documentElement.clientWidth;
let altoVentana = document.documentElement.clientHeight;
console.log(`Ancho ventana: ${anchoVentana}`);
console.log(`Alto ventana: ${altoVentana}`);

/*
    width y height del documento
    Teoricaaente como raiz document.documentElement encierra todo el contenido y 
    podriamos medir las dimensionens completas con:
    document.documentElement.scrollWidth/scrollHeight

    Pero estas propiedades no funcionan siempre como lo esperamos. En Chrome/Safari
    y Opera si no hay scroll documentElement.scrollHeight puede ser incluso menor
    que documentElement.clientHeight.

    Para obtener con seguridad el alto completo del documento, debemos calcular el 
    máximo de esas propiedades
*/
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollHeight);  

/*
    Obtener el scroll actual
    Para calcular el scroll se tiene:

    - document.documentElement.scrollLeft
    - document.documentElement.scrollTop

    Sin embargo estas propiedades no funcionan en navegadores antiguos basados en 
    Webkit, donde deberiamos usar:

    - document.body en lugar de document.documentElement

    Para evitar recordar esas particuladades se tiene:
    - window.pageXOffset
    - window.pageYOffset

    También estan disponibles por razones históricas las propiedades
    - window.scrollX
    - window.scrollY

    Que son lo mismo que las anteriores. En realidad son un alias de las anteriores.

*/
let scrollLeft = document.documentElement.scrollLeft;
let scrollTop = document.documentElement.scrollTop;
console.log(`Scroll Left: ${scrollLeft}`);
console.log(`Scroll Top: ${scrollTop}`);
console.log(`Usando pageXOffset: ${window.pageXOffset}`);
console.log(`Usando scrollX: ${window.scrollX}`);
console.log(`Usando PageYOffset: ${window.pageYOffset}`);
console.log(`Usando scrollY: ${window.scrollY}`);

/**
 * Scrolling: scrollTo, scrollBy, scrollIntoView
 * 
 * Para hacer scroll en una página todos los elementos del DOM deben estar construidos
 * Elementos regulares pueden ser scrolled cambiando:
 * 
 * - document.documentElement.scrollTop 
 * 
 * - document.documentElement.scrollLeft
 * 
 * - document.body.scrollTop
 * 
 * - document.body.scrollLeft
 * 
 * Alternativamente a los métodos anteriores, se tienen métodos univesales:
 * 
 * - window.scrollBy(x, y)
 *   Hace scroll respecto a su posición relativa actual, por ejemplo scrollBy(0, 10)
 *   hara un scroll hacia abajo 10px respecto de la posición actual.
 * 
 * - window.scrollTo(pageX, pageY)
 *   Hace scroll respecto a coordenadas absolutas, tomando como punto inicial la esquina
 *   superior izquieda de la pantalla. Así scrollTo(0, 0) hará scroll hasta el inicio.
 */

window.scrollBy(0, 100)

/**
 * scrollIntoView
 * - elem.scrollIntoView(top)
 *   Hace scroll a la página para hacer visible el elemento elem. Su agumento puede ser:
 * 
 *   top = true: Por defecto. Alinea el borde superior del elemento con el borde superior
 *      de la ventana.
 * 
 *   top = false: El borde inferior del elemento se alinea con el borde inferior de la 
 *      ventana.
 */

let caja2 = document.querySelector('.caja2');
caja2.scrollIntoView(top);

/**
 * Olvidando el scrolling
 * 
 * Si necesitamos prohibir el scroll en la página, usamos:
 * 
 * - document.body.style.overflow = "hidden"
 */
