// Fecha: 29 de octubre del 2022

/*
    Eventos personalizados

    También podemos generar nuestros propios eventos en JavaScript. Los customs events pueden
    ser usados para crear componentes gráficos, por ejemplo.
*/

/*
    Event constructor

    Las clases forman una herencia similar a como lo hace el DOM, para las clases asociadas a 
    los eventos, la raiz es la clase Event. Podemos contruir nuestro propio evento usando su
    constructor.

    let = miEvento = new Event(type[, options]);

    Argumentos:
    - type: El tipo de evento, como 'click' o nuestro 'mievento'
    - options: Hay dos opciones:
        + bubbles: true/false: Si es true, el evento puede "burbujear"
        + cancelable: true/false: Si es true, la acción por defecto puede ser prevenida
    
    Por defecto los aagumentos son: {bubbles: false cancelable: false}

    [Nota: Luego de leer la explicación esto es como lanzar una excepción]
*/

let miEvento = new Event('mievento', {bubles: true, cancelable: true});

/*
    dispatchEvent

    Después de crear un evento, debemos correrlo en un elemento. Para esto usamos:
    
    - elem.dispatchEvent(event)
      Lanza un evento 
*/

// lanzamos el evento de manera automatica, en realidad no se ha hecho click por
// parte del usuario.
let evento = new Event('click');
elem.dispatchEvent(evento);

/*
    event.isTrusted

    Nos permite identificar si el evento es originado realmente por el usuario o es 
    lanzado con dispatchEvent. Es falso para eventos generados en el script y true 
    para eventos del usuario.
*/

/*
    Ejemplo de burbujeo
    
    Podemos crear un evento que se propague con el nombre "hello" y capturarlo en el
    documento

    Consideraciones:
    - Deberiamos usas addEventListener para customs events ya que on<event> solo existe
      para eventos predefinitos, por ejemplo document.onmievento no funcionaría.
    - Debemos configurar bubbles: true si deseamos que el evento se propage
*/

document.addEventListener('hello', function(e) {
    alert('Hello desde ' + e.target.tagName);
});