# Libreria Estándar

La librería estándar de JavaScript contiene útiles clases y funciones disponibles en sus diferentes entornos de ejecución.

- Set y maps, que representan conjuntos de valores y mapas.
- TypedArrays que representan arrays de información binaria.
- Expresiones regulares, que definen patrones de texto para su procesamiento.
- Clase Date, para representar y manipular fechas y horas.
- Clase Error, que se usa para el manejo de errores.
- El objeto JSON, el cual soporta serialización y deserialización.
- El objeto Intl, nos ayuda a localizar programas en JavaScript
- El objeto Console, define métodos de salida en consola.
- La clase URL, simpliifica las tareas de manipulación y parsing de URLs.
- setTimeOut, y funciones relacionadas, para especificar que el código sea ejecutado deespués de un intervalo de tiempo.

## Sets y Maps

ES6 introduce las clases Set y Map.

**Clase Set**  
Un set es una colección de valores, como una array, pero los `sets` no están ordenados o indexados y no permiten valores ducplicados. Para crear un objeto tipo `set` se usa su constructor `Set()`.

```js
// Se crea un nuevo objeto set
let s = new Set();

// Se crea un objeto set con dos elementos, uno de los cuales
// es un set
let t = new Set([1, s]);
```

El arguento que recibe el constructor `Set()` debe ser un objeto `array-like`.

```js
// Set que copia los elementos de s
let t = new Set(s);

// Este set tendrá 4 elementos: "M" "i" "s" "p" ya que pueden
// haber elementos repetidos
let unique = new Set("Mississippi");
```

La propiedad `size` nos entrega cuantos valores tiene un Set. Equivalente a `length` en los arrays.

```js
let unique = new Set("Mississippi");

// => 4
unique.size
```

Los sets no necesitan ser inicializados cuando se crean. Es posible añadir, remover y limpiar un set con los métodos:

- `add()`: Toma un argumento único argumento, si se pasa un array, se añade el array al set, no los elementos individuales. Retorna el set en el cual fue invocado.
- `detele()`: Borra un elemento a la vez el cual se le pasa como argumento. Retorna un valor booleano, si se remueve con exito el elemento, retorna `true` de otro modo, no hace nada y retorna `false`.
- `clear()` borra todos los elementos del set.

```js
// Se crea un nuevo set
let s = new Set();

// Se consulta la cantidad de elementos
s.size

// Se añaden elementos
s.add(1)
s.add(2)
s.add([4,5,6])
s.add(true)

// Se consulta cantida de elementos
s.size

// Se borra elemento 1
// => true
s.delete(1)

// Se intenta borrar un elemento inexistente
// => false
s.delete("test");

// Se intenta borrar el array
// => false. El array en el set tiene otra referencia
s.delete([4,5,6])
```

Los sets usan la comparación de igualdad estricta `===`, para determinar si los elementos están duplicados, por lo que un elemento 1 será distinto a "1". Los objetos también son comparados con igualdad estricta, por lo que serán comparadas sus referencias.

Para comprobar si un valor pertenece a un set, se dispone del método `has`.

```js
let oneDigitPrimes = new Set([2,3,5,7])

// => true, 2 existe en el set
oneDigitPrimes.has(2)

// => true, 3 existe en el set
oneDigitPrimes.has(3)

// => false, 4 no existe en el set
oneDigitPrimes.has(4)

// => false, "5" no existe en el set
oneDigitPrimes.has("5")
```

Los más importante de entender sobre los `Sets` es que estos están optimizados para la consulta de sus miembros, y no importa cuantos miembros tenga, el método `has()` será rápido.

La clase `Set` es iterable, lo que significa que es posible usar un bucle `for/of` para enumerar todos los elementos.

```js
let oneDigitPrimes = new Set([2,3,5,7])
let sum = 0;
for (let p of oneDigitPrimes) {
    sum += p;
}

console.log(sum);
```

Debido a que los `Sets` son iterables, es posible convertirlos a arrays y pasar sus elementos como argumentos a una función.

```js
let oneDigitPrimes = new Set([2,3,5,7])
[...oneDigitPrimes]
Math.max(...oneDigitPrimes)
```

Los `Sets` no son conjuntos ordenados ni indexados, por lo que no se puede consultar por el primero o tercer elemento. El orden usado para la iteración es el orden en el cual los elementos fueron insertados.

Además de ser iterables, la clase `Set` implementa el método `forEach()`, que es similar al presente en la clase `Array`.

```js
let product = 1;
oneDigitPrimes.forEach(n => { product *= n; });
console.log(product);
```

## La clase Map

La clase `Map` representa un conjunto de valores conocidos como `keys` donde para cada `key` hay un valor asociado. En este sentidod un `map` es como un array, pero en lugar de usar un conjunto secuencial de enteros como `keys`, los mapas permite usar valores arbitrarios como índices.

```js
// Se crea un nuevo mapa vacío
let m = new Map();

// Un mapa qe se inicializa con strings que mapean a números
let n = new Map([
    ["one", 1],
    ["two", 2]
]);
```

El argumento opcional del constructor `Map()` debe ser un objeto iterable que entregue arrays de dos elementos de la forma: `[key, value]`.

También es posibe usar el constructor `Map()` para copiar otros mapas o copiar las propiedades de un objeto existente:

```js
let copy = new Map(n);
let o = { x: 1, y: 2 };

// Crea un mapa con los elementos del objeto o
// map([ "x", 1], ["y", 2])
let p = new Map(Object.entries(o));
```

Una vez que se ha creado un objeto map es posible consultar sus valores asociados con el método `get()` pasando como argumento el nombre de la clave del elemento. Para agregar elementos, se usa el método `set()` el cual recive una clave y un valor. Si se invoca el método `set()` con una llave que ya exisre, entonces se cambiará el valor asociado a esta.

También los objetos `Maps` definen los métodos `has()` que siven para averiguar si un mapa tiene una clave especificada en su argumento; el método `delete()` que remueve la clave recivida como argumento y su valor asoaciado; `clear()` que remueve todo el contenido del objeto `Map`.

Además se define la propiedad `size` que indica cuantas claves tiene el objeto `Map`.

```js
let m = new Map();
m.size
m.set("one", 1);
m.set("two", 2);
m.size
m.get("two");
m.get("three");
m.set("one", true);
m.size
m.has(true);
m.delete("one");
m.clear()
```

El método `set()` puede encadenarse para permitir inicializar o añadir varios elementos a un objeto Map.

```js
let m = new Map().set("one", 1).set("two", 2).set("three", 3);
m.size
m.get("two");
```

Cualquier valor JavaScript puede ser usado como `key` o `value` en objetos `Maps`. Esto incluye `null`, `undefined`, `NaN` y también referencias como `objects` y `arrays`. Además los objetos `Maps` también comparan por identidad (igualdad estricta), así si se comparan dos objetos, estos serán diferentes si sus referencias son diferentes.

```js
let m = new Map();

// La clave es un objeto vacío que mapea a un entero 1
m.set({},  1);

// La clave es un objeto vacío diferente que mapea a un entero 2
m.set({},  2);

// Se consulta la cantidad del elementos
m.size

// Se consulta si un objeto vacío existe en el objeto Map, pero
// como las comparaciones se hace por identidad, este objeto
// no es el mismo que los otros objetos en el mapa con distintas
// referencias
m.get({})

// El objeto m (map) en si mismo se usa como clave que mapea a
// un valor undefined
m.set(m, undefined);

// Se consulta si existe una llave m en el objeto map
m.has(m)

// Devuelve undefined ya que es el valor que la llave m mapea
// aunque este es el mismo valor que si el mapa no tuviera una
// clave m.
m.get(m)
```

**Iteración en objetos Maps**  
Los objetos `Maps` son iterables, cada valor iterado tiene dos elementos tipo array, en donde el primer elemento es la llave y el segundo elemento es el valor asociado a esa llave. Si se usa el `spread operator` con un objeto tipo `Map` se obtendra un array de arrays, como los que son pasados al constructor `Map()`. Cuando iteramos un `map` con el bucle `for/of` es posible usar la asignación por destructuración para asignar las llaves y los valores a variables separadas.

```js
let m = new Map([["x", 1], ["y", 2]]);

// => [["x", 1], ["y", 2]]
[...m]

for (let [key, value] of m) {
    // En la primera iteración key valdrá x y value valdrá 1
    // En la segunda iteración key valdrá y y value valdrá 2
}
```

Los mapas iteran en el mismo orden en el que los objetos fueron insertados. Si se desea iterar solo las llaves podemos usar el método `keys()` y si se desea iterar solo los valores es posible usar `values()`. También podemos usar el método `entries()` que nos entrega un objeto iterable de tipo `key/value`  que es exactamente lo mismo que iterar el `Map` directamente.

```js
let m = new Map([["x", 1], ["y", 2]]);
[...m.keys()]
[...m.values()]
[...m.entries()]
```

También es posible iterar los objetos tipo `Map` con el método `forEach()` (similar al método forEach() de la clase Array).

```js
// Notar que el orden correcto es: value, key no key, value
m.forEach((value, key) => {

});
```

Puede parecer extraño que el primer parámetro sea `value` y el segundo sea `key`. En el método `forEach()` de la clase Array, se pasa como primer argumento el elemento del array y como segundo elemento el índice; por lo que, por analogía, el método `forEach()` de la clase `Map` pasa primero el valor y luego la clave.

## WeakMap y WeakSet

**WeakMaps**  
Los `WeakMaps` son una clase que es una variante, pero no una subclase de `Map`.