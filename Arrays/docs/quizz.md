# Quizz Arrays

1. ¿Qué es un array?
2. ¿Cuales son los elementos de un array?
3. ¿Qué significa que los arrays en JavaScript no sean tipados? Explicar.
4. ¿Qué significa que los arrays sean dinámicos?
5. ¿Qué significa que los arrays puedan ser `sparce`?
6. Para arrays sin vacíos, ¿Qué indica la propiedad `length`?
7. ¿De dónde se heredan las propiedades de los arrays?

## Creando Arrays

1. ¿De qué maneras es posible crear arrays?

### Array literals

1. Dar un ejemplo de creación de arrays literales que tengan: solo valores númericos, valores con diferentes tipos.
2. ¿Qué pasa si se agrega una última coma después del elemento final?
3. Los arrays ¿Solo pueden alamacenar valores constantes?
4. ¿Es posible almacenar otros objetos en un arrays?
5. ¿Qué sucede si un array se define de la siguiente manera: `a = [1, , 3,]`? Explicar
6. ¿Qué valor toman los elementos vacíos en un array?

### El spread operator

1. ¿Cómo funciona el `spread operator` para crear arrays? Explicar y dar ejemplo.
2. ¿El `spread operador` modifica el array original usado al crear uno nuevo?
3. ¿Con qué tipos de objetos puede trabajar el `spread operator? ¿Solo arrays?
4. Dar ejemplo de como remover duplicados de un array usando `spread operator`.

### El constructor Array()

1. ¿De cuantas maneras podemos usar el constructor array para crear nuevos arrays? Nombrarlas
2. ¿Como funciona la creación de un array mediante el constructor Array sin parámetros? Dar ejemplo
3. ¿Como funciona la creación de un array mediante el constructor Array con un paramétro? Dar ejemplo
4. ¿Como funciona la creación de un array mediante el constructor Array con múltiples paramétros? Dar ejemplo

### Array.of()

1. ¿Qué es Array.of()? Explicar
2. ¿Cómo crear arrays con Array.of? Dar ejemplo

### Array.from()

1. ¿Qué es Array.from()? Explicar
2. ¿Cómo se crean nuevos arrays con Array.from()? Explicar
3. ¿Qué recibe como segundo argumento Array.from()? Explicar y dar un ejemplo.
4. ¿Cuándo es preferible entregar como segundo argumento una función a Array.from()? Explicar

## Lyendo y escribiendo elementos en un array

1. ¿Qué operador es usado para leer y escribir elementos en un array? Explicar como se compone una expresión de lectura y asignación
2. ¿Que debe ir entre [] y por que? Explicar
3. ¿Los arrays son objetos?
4. ¿Qué sucede con los índices en los arrays? Explicar
5. ¿Cuál es la diferencia entre los índices de los arrays y las propiedades de los objetos? Explicar
6. ¿Es posible usar índices negativos o no enteros para los arrays? Explicar
7. ¿Es posible obtener el error `out of bounds` en los arrays en JavaScript? Explicar
8. ¿Qué sucede cuando se trata de acceder a una propiedad que non existe en los arrays en JavaScript?

## Sparce Arrays

1. ¿Qué son los sparce arrays? Explicar
2. ¿La propiedad length en sparce arrays indica el número de elementos? Explicar
3. Dar ejemplo de como crear `sparce arrays`

## Array Length

1. ¿A que se refiere la propiedad `length`?
2. ¿Todos los arrays tienen la propiedad `length`?
3. Dar ejmplos de cómo obtener la propiedad `length` de un array
4. ¿Es posible tener un índice mayor a la propiedad length en un array? Explicar
5. ¿Qué sucede con la propiedad `length` si se agrega un elemento al array cuyo índice sea mayor al valor de `length?
6. ¿Es posible cambiar la propiedad `length` a "mano"?
7. ¿Qué sucede si se disminuye manualmente la propiedad `length`? Explicar y dar ejemplos de cada posible situación.

## Añadiendo y borrando elementos

1. ¿Cuál es la manera más simple de asignar valores a los elementos? Dar ejemplo
2. ¿Cómo funciona el método `push()` y que hace?
3. ¿Qué sucede con el valor de `length` cuando se añaden elementos con `push()`?
4. ¿Cómo funciona el método `unshift()` y que sucede con los índices de los elementos al usar este método? Explicar y dar ejemplo.
5. ¿Cómo funciona el método `pop()`? Explicar y dar ejemplo.
6. ¿Cómo funciona el método `shift()`? Explicar y dar ejemplo.
7. ¿De qué maneras podemos borrar elementos de un array? Nombrarlas y dar ejemplo
8. ¿Qué sucede en el array cuando eliminamos elementos? Explicar
9. ¿Cómo afecta borrar elementos de un array al valor de `length? Explicar

## Iterando sobre arrays

1. ¿Cúal es la manera más secilla de iterar sobre un array desde ES6? Dar ejemplo
2. ¿Cómo funciona una iteración con el bucle `for/of`?
3. ¿Qué retorna un bucle `for/of` cuando una iteración no tiene un valor existente?
4. ¿Cómo es posible saber el índice los elementos de cada iteración usando `for/of`? Dar ejemplo
5. ¿Qué es `forEach()` y fomo funciona?
6. Dar un ejemplo de iteración de una array con `forEach()`
7. ¿En que orden itera `forEach()`?
8. ¿Qué se pasa como segundo argumento a `forEach()`?
9. ¿Qué sucede cuando `forEach()` se encuentra con valores que no estan definidos en el array?
10. Dar ejemplo de sintaxis de bucle `for` clásico
11. ¿Qué sucede con el rendimiento de bucles aninados?
12. ¿Por qué se podría preferir un bucle `for` clásico en lugar de un bucle `for/of`? Explicar
13. Dar ejemplo de dos variaciones idiomaticas de uso del bucle `for` para recorrer un array (Según ejemplo JavaScript Definitive Guide)
14. ¿Cómo realizar comprobaciones sobre valores no definidos en un bucle `for`? Dar ejemplo

## Arrays multidimensionales

1. ¿Qué son los arrays multidimensionales?
2. ¿Existen estructuras de datos que realmente sean arrays multidimensionales en JavaScript?
3. ¿Cómo crear arrays multidimensionales en JavaScript?
4. Dar ejemplo de creación de arrys multidimnesionales, y explicar.

## Métodos de Arrays

1. ¿Cómo podemos agrupar los métodos de los arrays? Explicar.

### Métodos de iteración

1. ¿Cuáles son los métodos que se pueden clasificar como métodos de iteración? Nombrarlos
2. ¿Qué reciben en su mayoria, como primer argumento los métodos de iteración? Explicar.
3. ¿Qué reciben en su mayoria, como segundo argumento los métodos de iteración? Explicar.
4. ¿Cómo es, en la mayoría de los casos invocada la función que es pasada como primer argumento en los métodos de iteración? Explicar.
5. Explicar como funciona el método `forEach()` y dar ejemplos de uso.
6. ¿Es posible terminar con la iteración de un método `forEach()` antes del termino de array? Explicar.
7. Explicar cómo funciona el método `map()` y dar ejemplos de uso.
8. ¿Qué característica debe tener la función que recibe como parámetro el método `map()`?
9. ¿Qué retorna el método `map()`?
10. Al usar el método `map()`, ¿Se módifica el array original?
11. La propiedad `length` del resultado del método `map()` ¿Cómo es respecto a la propiedad `length` del array original?
12. Explicar cómo funciona el método `filter()` y dar ejemplos de uso.
13. ¿Qué sucede con los elementos que no tienen valores definidos al usar el método `filter()`?
14. Explicar cómo funcionan los métodos `find()` y `findIndex()` y dar ejemplos de uso
15. ¿Qué retorna el método `find()` si no encuentra el valor buscado?
16. ¿Qué retorna el método `findIndex()` si no encuentra el valor buscado?
17. Explicar cómoo funciona el método `every()` y dar ejemplo de uso.
18. Explicar cómoo funciona el método `some()` y dar ejemplo de uso.
19. ¿En que momento están capacitados los métodos `every()` y `some()` para devolver un valor? Explicar
20. ¿Qué valores retornan los métodos `every()` y `some()` al ser aplicados a un array vacío?
21. Explicar el funcionamiento de la funcion `reduce()` y dar ejemplos de uso.
22. ¿Qué argumentos reciben los métodos `reduce()` y `reduceRight()`?
23. ¿Qué recibe como segundo parámetro los métodos `reduce()` y `reduceRigth()`?
24. ¿Qué sucede cuando los métodos `reduce()` y `reduceRigth()` son llamados en un array vacío?
25. ¿Es posible especificar el valor de `this` a las funciones `reduce()` y `reduceRight()`? Explicar.
26. Los métodos `reduce()` y `reduceRight()` ¿Solo pueden ser usados para cálculos mátematicos? Explicar y dar ejemplos.

### Simplificandod arrays con `flat()` y `flatMap()`

1. ¿Cuándo se agrega el método `flat()` y `flatMap()` en JavaScript?
2. ¿Que hace y como funciona el método `flat()` Explicar y dar ejemplos.
3. ¿Qué recibe cómo parámetro el método `flat()`? Explicar y dar ejemplo
4. ¿Que hace y como funciona el método `flatMap()` Explicar y dar ejemplos.
5. ¿Qué métodos encadenados tendrían el mismo resultado que `flatMap()`?

### Añadiendo arrays con `concat()`

1. Explicar en que consiste el método `concat()` y dar ejemplos.
2. ¿Qué sucede si los elementoss que intentan añadir a un array mediante el uso de `concat()` son arrays en si mismos?
3. ¿Hasta que nivel de anidamiento, son simplificados los elementos arrays que se usan como argumentos en el método `concat()`?
4. ¿El método `contac()` modifica o crea un nuevo arrayy resultante?
5. ¿Es recomendable intentar modificar el array original mediante el método `concat()`? explicar.

### Métodos de pilas y colas con `push()`, `pop()`, `shift()` y `unshit()`

1. ¿Qué nos permiten los métodos `push()` y `pop()`?
2. ¿Qué hace el método `push()`? Explicar y dar ejemplos.
3. ¿Qué hace el método `pop()`? Explicar y dar ejemplos.
4. ¿`pop()` y `push()` modifican el array original?
5. Implementar una cola mediante el uso de `pop()` y `push()`
6. ¿Qué hacen los métodos `shift()` y `unshift()`?
7. ¿Qué hace el método `shift()`? Explicar y dar ejemplos.
8. ¿Qué hace el método `unshift()`? Explicar y dar ejemplos.
9. ¿Por qué se dice que `shift()` y `unshift()` son menos efiientes que `push()` y `pop()`?
10. ¿Cómo funciona `unshift()` cuando se agregan varios valores al comienzo del array en una sola llamada? Dar ejemplo y explicar.

### Subarrays con `slice()`, `splice()`, `fill()` y `copyWithin()`

1. ¿En que consiste el método `slice()`? Explicar
2. ¿De que maneras es posible llamar al método `slice()`? explicar cada una y dar ejemplos
3. ¿En que consiste el método `splice()`?
4. ¿Qué sucede con los índices de los elementos originales del array?
5. Explicar los argumentos que recibe el método `splice()`.
6. Dar ejemplos de uso del método `splice()`
7. ¿En que consiste el método `fill()`?
8. ¿Qué argumentos recibe el método `fill()`? Explicar
9. Dar ejemplos de uso del método `fill()`.
10. ¿En qué consiste el método `copyWhit()`?
11. ¿Qué argumentos recibe el método `copyWhit()`? Explicar
12. ¿El método `copyWith()` modifica el array original o crea una copia?
13. ¿El método `copyWith()` tiene algún valor de retorno?

### Métodos de orden y búsqueda en arrays

1. ¿En qué consisten los métodos `indexOf()` y `lasIndexOf()`?
2. Explicar los parámetros que reciben `indexOf()` y `lasIndexOf()`.
3. ¿Cual es la diferencia entre `indexOf()` y `lasIndexOf()`?
4. Dar ejemplos de uso de `indexOf()` y `lasIndexOf()`
5. ¿Como se realizan las comparaciones en `indexOf()` y `lasIndexOf()`? Explicar
6. ¿Qué sucede cuando `indexOf()` y `lasIndexOf()` comparan objetos?
7. ¿Se permiten los índices negativos en `indexOf()` y `lasIndexOf()`? Explicar
8. Dar ejemplos de uso de de estos métodos mediante una función que encuentre todas las considencias y retorne un array con los índices de estas coincidencias.
9. ¿En que consiste el método `include()`? Explicar
10. ¿Que hace especial a la comparación de igualdad del método `include()`? Expliar.
11. Dar ejemplos de uso del método `include()`
