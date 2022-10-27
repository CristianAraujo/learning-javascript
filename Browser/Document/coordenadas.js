// Fecha: 27 de octubre del 2022

/**
 * Coordenadas
 * 
 * Para mover elementos debemos estar familiarizados con las coordenadas
 * Hay dos sistemas de coordenadas:
 * 
 * - Coordenadas relativas a la ventana
 *   Se calcular respecto a la esquina superior izquierda. Las denotaremos
 *   como clientX y clientY. Son similates a position:fixed
 * 
 * - Coordenadas relativas al documento
 *   Calculadas desde la esquina superior izquierda del documento. Las 
 *   denotaremos como pageX y pageY. Similar a position:absolute.
 * 
 *   Cuando la página está en el punto inicial, estás coinciden.
 */

/**
 * Cordendas del elemento getBoundingClientRect
 * - elem.getBoundingClientRect
 *   Retorna las cordenas respecto a la ventana de un rectangulo que envuelve 
 *   al elemento elem como un objeto DOMRect.
 * 
 *   DOMRect propiedades:
 *   + X/Y : Cordenadas del rectangulo relativas a la ventana
 *   + width / height : Ancho y alto del rectangulo (puede ser negativo)
 *   + top / bottom : Coordenadas Y para el borde superior / inferior del DOMRect
 *   + left / right : Coordenadas X para el borde izquierdo / derecho de DOMRect
 */

let caja = document.querySelector('.caja');
let pinfo = document.createElement('p');
let dim = caja.getBoundingClientRect();
pinfo.innerHTML = `Distancia en X: ${dim.x}, distancia en Y: ${dim.y}`;
caja.after(pinfo);
console.log(dim)

/**
 * elementFromPoint(x,y)
 * 
 * Retorna el elemento más anidado que se encentra actualmente en las coordenadas x, y dadas.
 * Sintaxis:
 * 
 * let elem = document.elementFromPoint(x, y)
 * 
 * * Como este método usa coordenadas respecto a la ventana, puede ser diferente
 * 
 * * Para coordenadas fuera de la ventana elementFromPoint retorna null. Este método solo 
 *   funcionará bien si las coordenadas x, y estan dentro del área visible.
 * 
 */

let elemento = document.elementFromPoint(300, 300);
console.log(elemento);

/**
 * Usando posicionamiento fijo
 * 
 * - elem.getBoundingClientRect()
 *   Obtiene las coordenadas de un elemento elem 
 */

let elem = document.querySelector('.caja');
let coords = elem.getBoundingClientRect();
console.log(coords);
console.log(coords.x)
console.log(coords.y)


/**
 * Coordenadas del documento
 * 
 * Las coordenadas relativas al documento comienzan en la esquina superior izquierda del documento
 * No hay una manera estándar de obtener las coordenadas del documento, pero se pueden calcular ya
 * que los dos sistemas de coordenadas (relativo a la ventana y relativo al documento) están 
 * conectados por la siguiente fórmula:
 * 
 * pageY = clientY + alto del scroll vertical fuera de la ventana
 * pageX = clientX + ancho del scroll horizontal fuera de la ventana
 * 
 */