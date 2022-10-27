// Fecha: 26 de octubre del 2022

/*
    Estilos y clases

    Hay dos maneras de asignar estilos a un elemento:
    - Creando una clase en CSS y añadiendola al elemento
      <div class="...">

    - Escribiendo las propiedades directamente en el atributo style
      <div style="...">

    En JavaScript podemos utilizar ambos métodos, pero siempre se
    prefiere agregar clases antes que editar el atributo style.
    Editar style es aceptable cuando por ejemplo, calculamos 
    coordenadas de un elemento dinamicamente y queremos asignarlas
    al elemento.
*/


/*
    className y classList

    elem.className 
    corresponde al atributo class en HTML. Este reemplaza el string
    completo de clases.

    elem.classList
    Es un objeto especial con métodos para añadir, alternar y eliminar
    una clase en particular.

    ClassList tiene los siguientes métodos
    - add('class') : Añade una clase
    - remove('class') : Remueve una clase
    - toggle('class') : Añade una clase si no existe, sino la elimina
    - constains('class') : Comprueba si existe la clase. Retorna true 
        o false.
*/
let div = document.body.firstElementChild;
console.log(div);

// Se añade una clase al elemento div
div.className = 'clase';
console.log(div.className);

// Se añade una segunda clase. Si solo se usa className se
// estaría borrando la primera.
div.classList.add('alerta');
console.log(div.className);

// Se remueve una clase
div.classList.remove('alerta');
console.log(div.className);

// Se alterna la existencia de una clase
div.classList.toggle('alerta');
console.log(div.className);


/*
    Elemento style
    Es un objeto que corresponde a que fue escrito en el atribuo style
    Para propiedades de más de una palabra, se usa camelCase.

    background-color => elem.style.brackgroundColor
    z-index => elem.style.zIndex

*/
div.style.backgroundColor = 'salmon';


/*
    Resetear la propiedad style
    style es un objeto, al que podemos asignarle propidades CSS. Si 
    deseamos resetear una propiedad, podemos:

    - Asignarle a la propiedad una cadena vacía.
      Al asignar una cadena vacía a una propiedad en el objeto style el
      navegador automaticamente asignará los valores por defecto a esa 
      propiedad

    - Usar el método removeProperty
      Este método remueve explicitamente la propiedad del objeto

    style.cssText
    Para asignar varias propiedades en una sola instrucción debemos usar 
    cssText. A este se le asigna un string el cual puede contener todas 
    las propiedades CSS que deseemos agregar
*/

// Se remueve la propiedad del elemento style. 
console.log(div.style);
div.style.removeProperty('background-color');
console.log(div.style);

// Uso de cssText para añadir mútiples propiedades
div.style.cssText = `color:brown; font-size: 1.5em; font-family: sans-serif;`;


/*
    Pensar en unidades
    No hay que olvidar añadir las unidades a los valores correspondientes 
    por ejemplo si deseamos añadir un top de 10px debemos indicar la unidad
    en lugar de solo el valor de 10
*/

// Se usa siempre la unidad correspondiente para cada valor agregado
div.style.border = '1px dotted salmon';
div.style.padding = '1em';
div.style.marginTop = '20px';


/*
    Estilos computados
    La propiedad style solo opera con el atributo style en HTML sin ninguna
    cascada CSS, por lo que no podemos leer valores directamente desde style
    ya que no siempre serán los valores que tome la presentación del elemento

    getComputedStyle
    - getComputedStyle(element, [pseudo])
      element: Es el elemento del cual deseamos leer un valor
      pseudo: Un pseudo elemento si es requerido.

    * getComputedStyle retorna las unidades resueltas de una propiedad

    * getComputedStyle requiere siempre el valor completo de la propiedad
      como marginTop en lugar de margin. Este ultimo es ambiguo y no sabria
      resolverse correctamente

    * Estilos aplicadodos a :visited links estan ocultos

    Valores computados y resueltos
    - Valor computado
      Es el valor luego de aplicar todas las reglas CSS mediante herencia y 
      cascada. Este puede ser como height: 1em, font-size: 125%, etc.

    - Valor resuelto
      Es el valor que finalmente se aplica al elemento. Son unidades absolutas
      que el navegador calcula a partir del valor computado, como width: 20px
*/

let anchoDiv = getComputedStyle(div).width;
console.log(anchoDiv);
