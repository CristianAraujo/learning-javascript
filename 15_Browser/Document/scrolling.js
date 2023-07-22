// Fecha: 27 de octubre del 2022

/*
    Tamaño de elementos y scrolling
*/


/*
    Tamaño de elementos
    El tamaño de un elemento esta compuesto por:

    - padding
      Es el espacio entre los bordes del elemento y el contenido. Usualmente si hay
      mucho texto como contenido, el padding-bottom podría desbordarse.  

    - border
      Corresponde al ancho del borde de la caja

    - scrollbar
      Algunos navegadores (no todos) reservan espacio desde el "content width" para
      la barra de scroll. Si el ancho del area del contenido, sin scrollbar es de 
      300px y la barra de 16px, entonces el ancho final del content será de 284px.
    
    - content height
      Corresponde la altura total final disponible para que se muestre el contenido
      
    - content width
      Corresponde al ancho final disponible para que se muestre el contenido
    
*/

/*
    Geometria 
    Propiedades geometricas de un elemento.
    Las propiedades geométricas de un elemento son zero o null para elementos que no
    estan mostrados en pantalla. Por ejemplo con la propiedad display:none.
*/

/*
    offSetParent, offSetLeft y offSetTop
    * offSetParent
      Es el ancestro más cercano que el navegador usa para calcular las coordenadas
      durante el proceso de renderización. El ancestro más cercano debe ser:
      + Estar posicionado via CSS (position es absolute, relative, fixed o sticky)
      + <td>, <th> o <table>
      + <body>

      Hay ocasiones en que offSetParent es null
      + Cuando un elemento no se muestra (display:none o no está en el documento)
      + Para <body> y <html>
      + Para elementos con position:fixed

    - offsetLeft
      provee el desplazamiento en el eje x desde la esquina superior izquierda del 
      offSetParent

    - offsetTop
      provee el desplazamiento en el eje y desde la esquina superior izquierda del
      offSetParent
*/


/*    
    offSetWidth y offSetHeight
    - offsetWidth
      Provee el ancho completo del elemento, incluyendo bordes
    
    - offSetHeight
      Provee el alto completo del elemento, incluyendo bordes

    

*/

/*
    clientTop y clientLeft
    Dentro del elemento tenemos los borders. La medida de cada uno de los bordes
    son las propiedadee clientTop y clientLeft

    - clientTop
      Ancho que hay entre la caja interior y la caja exterior después del borde en
      el eje y.
    
    - clientLeft
      Ancho que hay entre la caja interior y la caja exterior después del borde en 
      el eje x.
      
*/

/*
    clientWidth y clientHeight
    Entregan el tamaño del área dentro de los bordes, incluyen el ancho del contenido
    (content width) junto con los paddings, pero sin el ancho de la scrollbar.

    Si no hay una scrollbar horizontal, el clientHeight será igual la distancia vertical
    del elemento entre los bordes.

    Si no hay paddings, el clientHeight y clientWidth, son iguales a las dimensiones que 
    encierran el content area.
*/


/*      
    scrollHeight  y scrollWidth
    Son medidas iguales a clientWidth y clientHeight, pero también se suman las distancias
    oculatas por el scroll.

    - scrollHeight
      Es el alto total del elemento considerando el scroll

    - scrollWidth
      Es el ancho total del elemento considerando el scroll. Si no hay scrollbar horizontal
      entonces es el mismo que el clientWidth
*/

/*
    scrollTop y scrollLeft
    Corresponden al alto y ancho oculto fuera del elemento.
    La mayoria de las propiedades son de solo lectura, pero scrollTop y scrollLeft pueden
    ser manipuladas. Por ejemplo:
    
    elem.scrollTop += 10

    - scrollTop
      Distancia desde la parte superior del elemento a la parte visible en el eje y

    - scrollLeft
      Distancia horizontal desde la parte izquierda del elemento hasta la parte visible
      izquierda
*/

/*
    No tomar ancho ni alto desde CSS
    Con el manejo del DOM haciendo uso de propiedades CSS podemos obtener un ancho y un
    alto para los elementos, pero se aconseja utilizar las propiedades geometricas vistas
    en esta lección.

    - En CSS el width/height de un elemento depende de la propiedad box-sizing, cual define
      qué es el width y qué es el height. Un cambio en box-sizing en CSS puede traer 
      problemas en JavaScript
    
    - El width y height pueden ser auto.

    - La aparición de scrollbars puede generar problemas ya que la scrollbar toma espacio del
      contenido en algunos navegadores, por lo que el ancho real disponible para un elemento
      es menos que el width en CSS.
      getComputedStyle(elem).width en algunos navegadores como Chrome retornan el ancho real,
      el ancho del contenido, menos el ancho del scrollbar, pero en otros navegadores como 
      firefox, se ignora el ancho del scrollbar.
*/