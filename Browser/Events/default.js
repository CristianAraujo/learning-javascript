// Fecha: 29 de octubre del 2022

/*
    Acciones por defecto del navegador

    Muchos eventos conllevan automáticamente acciones en el navegador, por ejemplo:
    - click en un enlace inicia la navegación a la URL del enlace
    - click en un botón submit inicia el envío de la información al servidor
*/

/*
    Previniendo acciones por defecto del navegador

    Hay dos maneras de decirle al navegador que no ejecute acciones por defecto.
    - event.preventDefault()
      Es la manera más usada. 

    - Si un manejador de eventos es asignado on<event> no agregado con addEventListener
      retornar falso funciona de previniendo las acciones por defecto. 
      Retornar falso en un manejador de eventos es usualmente ignorado, la única exepción
      es retornar falso en  un manejador asignado usando on<event>

      Por ejemplo:
      <a href="https://www.google.com" onclick="return false">Click para ir a Google</a>
      <a href="https://www.youtube.com" onclick="event.preventDefault()">Click para ir a YouTube</a>
*/

/*
    Ejemplo: Menu
    Se creará un menú y se prevendrá el comportamiento por defecto del navegador
*/

menu.onclick = function (e) {
    if (e.target.nodeName != 'A') return;
    let href = e.target.getAttribute('href');
    alert(href);

    // Si se omite el return false, el evento desencadenará el comportamiento por
    // defecto del enlace
    return false;
};

/*
    Siguiendo eventos

    Algunos eventos fluyen a otros, si se cancela el primer evento nunca ocurrirá un
    segundo. Por ejemplo, si presionar el botón izquierdo del mouse (mousedown) hace
    que se desencadene el evento focus en el elemento, entonces si prevenimos y no
    permitimos el evento mousedown entonces tampoco se desencadenará el evento focus.
*/

/*
    La opción de manejo pasiva de eventos

    El argumento opcional passive: true de addEventListener le señala al navegador que 
    el comportamiento por defecto que desencadena el evento no será cancelado. 
    Por ejemplo, si se usa está opción en eventos como touchmove en dispositivos móviles
    entonces el navegador sabrá que el evento no será cancelado y se entrega una mayor 
    fluidez.
*/

/*
    event.defaultPrevented

    Es una propiedad del evento, cuando es true indica que la acción fue prevenida, cuando
    es falsa indica que no lo fué.

    [Agregar contenido faltante en esta sección]
*/