# Estructura Léxica

La estructura léxica se refiere al set de elementos que especifican como escribir programas en ese lenguaje. Es la sintaxis de más bajo nivel del lenguaje. En esta sección se verá:

- Sensibilidad a mayúsculas, espacios y saltos de línea
- Comentarios
- Literales
- Identificadores y palabras resevadas
- Unicode
- Puntos y comas opcionales

## El texto de un programa JavaScript

JavaScript es case-sensitive, lo que singnifica que las palabras reservadas, nombres de variables y de funciones y otros identificadores deben ser sempre escritos de manera consisa.

JavaScript ignora los espacios entre tokens en los programas. La mayor parte de JavaScript también ignora los saltos de línea.

JavaScript reconoce carácteres de nueva línea, retornos de carro y secuencias de retornos de carro/linea como terminadores de línea.

## Comentarios

Se tienen dos estilos de comentarios: usando // se pueden hacer comentarios de una línea, mientras que /* y */ crean comentarios de bloque, estos últimos no pueden ser anidados.

## Literales

Es un valor que aparece directamente en el programa, como:

```js
12
1.2
"hello world"
'hi'
true
false
null
```

## Identificadores y palabras reservadas

Un identificador es un nombre, son usados para nombrar constantes, variables, propiedades, funciones y clases y proveen etiquetas para ciertos loops. Un identificador en JavaScript debe comenzaar por una letra, un guión bajo (_) o un signo de dólar ($). Las palabrasa reservadas no pueden ser usadas como identificadores.

### Palabras reservadas

Son parte del lenguaje y muchas de ellas no pueden usarse como identificadores, aunque pueden ser usadas como nombre dd propiedades dentro de objetos. Otras como from, of, get y set, pueden usarse en algunos contextos sin ambiguedades de sintaxis como identificadores. Otras como let, aún no es totalmente una palabra reservada por compatibilidad con versiones anteriores. Let puede usarse como identificador si una variable es creada con var y fuera de una clase, pero no si la declaración es dentro de una clase o con const.

## Unicode

Los programas en JavaScript son escritos usando el conjunto de caracteres unicode, el lenguaje permite letras unicode, digitos y ideographics (pero no emojis) en identificadores.

### Secuencias de escape Unicode

Para soportar programas y sistemas usando viejas tecnologías, JavaScript define secuencuas de escape que permiten escribir carácteres Unicode usando solo carácteres ASCII. Estas secuencias de escape comienzaan por `\u` y son seguidas por exactamente cuatro dígitos hexadecimal o por uno a seis digitos hexadecimales encerrados en llaves. Por ejemplo:

```js
let café = 1;
caf\u00e9
caf\u{E9}
```

La versión con llaves fue introducida en ES6 para soportar mejor Unicode y agregar otros carácteres especiales como emojis.

### Normalización Unicode

Los carácteres Unicode permiten más de una manera de codificar el mismo carácter. Estos diferentes tipos de codificación tipicamente muestran exactamente el mismo resultado cuando son interpretados, pero tienen diferentes codificaciones binarias, lo que significa que son considerados distintos por JavaScript, lo que podría causar problemas.

El estandar Unicode define la codificación preferida para todos los caracteres y especifica un procedimiento de normalización para convertir el texto a su forma canónica adecuado para ser comparado.

JavaScript asume que el código fuente que es interpretado ya fue normalizado y no hace ningún tipo de normalización por si mismo.

## Puntos y comas opcionales

JavaScript usa los puntos y comas para separar sentencias  del lenguaje. Es posible omitir los puntos y comas entre dos sentencias si estas son escritas en lineas separadas.

JavaScript trata un salto de línea como un punto y coma si el siguiente caracter que no sea un espacio en blanco no puede ser interpretado como una continuación de la sentencia actual. Por ejemplo, considera:

```js
let a
a
=
3
console.log(a)
```

JavaScript interpreta este cóodigo así:

```js
let a; a = 3; console.log(a);
```

Hay tres exepciones para que JavaScript interprete saltos de líneas como puntos y comas. La primera involucra a `return`, `throw`, `yield`, `break` y `continue`. Estas sentencias a menudo se encuentran solas, pero algunas veces son seguidas por un identificador o expresión. Si un salto de línea aparece entre cualquier de estas palabras JavaScript lo interpretará como punto y coma. Por ejemplo:

```js
return
true;
```

JavaScript lo interpreta como:

```js
return; true;
```

La segunda exepción involucra los operadores `++` y `--`, estos operadores si son usados en su forma postfija deben aparecer en la misma línea que su operando.

La tercera exepción involucra las funciones que son definidas por la sintaxis de flecha, `=>`, la cual debe aparecer en la misma línea que la lista de paramétros.
