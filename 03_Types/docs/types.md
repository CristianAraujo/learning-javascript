# Tipos, valores y variables

## Definiciones

Los tipos en JavaScript pueden ser divididos en dos categorías: tipos primitivos y tipos objetos. Los primitivos incluyen números, cadenas de texto y boleanos.

Los valores especiales `null` y `undefined` también son valores primitivos. Además, ES6 introduce el nuevo tipo para `Symbol` para propósitos especiales.

Cualquier valor que no es un número, cadena de texto, boleano, symbol, null, o undefined es un objeto. Un objeto es una colección de propiedades donde cada propiedad tiene un nombre un valor.

JavaScript define objetos especiales, como los `arrays`, que representan una colección ordenada de valores numerados, objetos tipo `Set` que representan un conjunto de valores, `Map` que representan mapeos de claves a valores, `Typed array` para operaciones con información binaria, `RegExp`que representan expresiones regulares, `Date` para representar fechas, `Error` para representar errores.

Las `funciones` y las `clases` en JavaScript no solo son parte de la sintaxis del lenguaje, son en si mismas valores que pueden ser manipulados. Además, son un tipo especializado de objeto.

El intérprete de JavaScript realiza la recolección de basura automáticamente, lo que significa que el programador no debe preocuparse por la destrucción de objetos o valores.  Cuando un programa deja de tener alguna referencia a un valor, el intérprete liberará la memoria.

JavaScript soporta el estilo de orientación a objetos. Tecnicamente, solo los objetos en JavaScript tienen métodos, pero valores de numeros, strings, boleanos y symbol se comportan como si tuvieran métodos. Solo null y undefined no permiten la invocación de métodos en si misimos.

Los objetos en JavaScript son inmutable y sus valores primitivos son inmutables. Los strings pueden ser pensados como arrays de caracteres, pero son inmutables, es posible acceder a los elementos de el string, pero alterarlo.

JavaScript convierte libremente los valores de un tipo a otro si el programa espera un tipo específico y se le entrega otro. El como JavaScript hace dichas conversiones se definen en sus reglas de conversión.

Las constantes y variables nos permiten usar nombres para referirnos a valores. Las constantes son declaradas con `const` mientras que las variables con `let` (antiguamente con var). Estas declaraciones no especifican el tipo de dato que reciben.

## Números

