# Arrays

Un arrays es una colección ordenada de valores, cada valor es llamado elemento, y cada elemento tiene una posición numérica en el array, conocida como índice. Los arrays en JavaScript no tienen tipado, lo que significa que un elemento puede ser e cualquier tipo y diferentes elementos del mismo array pueden tener diferentes tipos.

Los arrays en JavaScript son dinámicos, crecen o se empequeñecen según sea necesario, los elementos pueden encontrarse esparcidos `sparce`, es decir que los elementos no necesitan estar en índices contiguos y pueden haber vacíos entre ellos (gaps). Para los arrays con elementos vacíos, la propiedad `length` es mayor que el índice más grande de cualquier elemento.

Los arrays en JavaScript son una forma de objeto especializado, y los índices son un poco más que nombres de propiedades como integers.

Los arrays heredan propiedades desde `Array.prototype`. Muchos métodos son genericos, lo que significa que no solo son válidos para arrays, sino que también para objetos conocidos como `arrays-like`.

ES6 introduce una nueva clase de arrays conocidos como `typed arrays`.

## Creando Arrays

Los arrays pueden ser creados como:

- Arrays literales
- Con `spread operator` en un objeto iterable
- Con el constructor `Array()`
- Con los métodos `Array.of()` y `Array.from()`

### Arraysy literals

Sin una lista de elementos separados por comas, entre corchetes.

```js
// Un array vacío
let empty = [];

// UUn array de 5 elementos numéricos
let primes = [1, 2, 3, 5, 11];

// Un array con 3 elementos de diferente tipo y una coma final
let misc = [1.1, true, 'a', ];
```

Los valores en un array no están obligados a ser una constante, pueden ser una expresión o tambiénpuede almacenar objetos literales u otros arrays:

```js
let base = 1024;

// Array que almacena expresiones que evaluan a un valor.
let table = [base, base + 1, base + 2, base + 3];

// Array que contiene otros arrays, los cuales a su vez contiene
// valores númericos y objetos
let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]]
```

Si una array contiene múltiples comas sin valores entre ellas, el array es esparcido. Los valores que son omitidos no existen y devuelven `undefinined` si son consultados. Los arrays literales pueden llevar una coma final después del último elemento.

```js
// Array espacido, tiene un elemento vacío en el medio
let count = [1, ,3];

// Un array sin elementos, pero con length 2 ya que la última 
// coma es una coma final y no se considera como separadorde 
// elementos
let undefs = [,,];
```

### El spread operator

En `ES6` es posible usar el `spread operator` (...) para incluir elementos dentro de arrays literales:

```js
let a = [1, 2, 3];

// b == [0, 1, 2, 3, 4]
let b = [0, ...a, 4];
```

Los tres puntos en el ejemplo anterior integran los elementos del array guardado en la variable a para que formen parte del nuevo array. Es una manera conveniente para hacer copias de un array:

```js
let original = [1, 2, 3];

// Se crea una copia de los valores del array original
let copy = [...original];
copy[0] = 0;

// Esto retorna 1. El array original no es afectado por la 
// modificación
original[0]
```

El `spread operator` trabaja solo con objetos iterables. Ya que los `strings` son iterables, es posible hacer lo siguiente:

```js
let digits = [...'0123456789ABCDF'];

//La salida será un arrya del modo 
// ['0', '2', '3', '4', '5',]
// Ya que cada elemento forma parte individualmente del array
digits;
```

**Remover duplicados con spread operator**  
Para remover elementos duplicados, convertimos el array a un `set` y luego inmediatamente lo convertimos de vuelta a un array usando `spread operator`.

```js
let letteers = [...'hello world'];
[...new Set(letters)]
```

### El constructor Array()

Otra forma de crear arrays es mediante el constructor Array(). Es posible invocar este constructor en tres diferentes maneras:

- Llamada sin argumentos: Crea un array vacío, equivalente al array literal [].

```js
let a = new Array();
```

- Llamada con un solo argumento númerico, cual especifica el número de elementos, propiedad `length`. El array no tiene almacenados valores.

```js
let a = new Array(10);
```

- Especificando dos o más elementos o un solo elemento no numérico. En este modo los elementos forman parte del nuevo array.

```js
let a = new Array(5, 4, 3, 2, 1, 'testing, testing');
```

### Array.of()

El constructor Array() no puede ser usado para crear un array con un solo argumento numérico. En ES6, `Array.of()` crea y retornra un nuevo array usando sus argumentos como valores, sin importar cuantos argumentos sean.

```js
Array.of()
Array.of(10)
Array.of(1,2,3)
```

### Array.from()

Es otro método para la creación de arrays introducido en ES6. Espera un iterable o un `array-like` comom primer argumento y retorna un nuevo array que contiene los elementos del objeto.

```js
let copy = Array.from(original);
```

`Array.from()` es también importante porque define una manera de crear verdaderas copias de arrays desde objetos `array-like`. Si se pasa una función como segundo argumento, entonces, cada elemento será pasado a la función y el valor retornado a la función será almacenado en el array en lugar del valor original. Es similar a la función `map()`, pero más eficiente al momento en que se está creando el array.

```js
let obj = {x: 1, y: 2, z: 4};
let arr = Array.from(obj, x => x * 2);
```

## Leyendo y escribiendo elementos en un array

Es posible acceder los elementos de array usando el `operador []`. La referencia al array debe aparecer a la izquierda de los corchetes. **Una expresión arbitraria que tenga un valor entero no negativo debe estar entre los corchetes**

> En JavaScript, puedes utilizar un número negativo como índice al acceder a un elemento de un array utilizando el operador []. Sin embargo, debes tener en cuenta que los índices de los elementos de un array comienzan en 0 y aumentan en incrementos de 1. Por lo tanto, si utilizas un índice negativo, estarás accediendo a una posición del array que está fuera del rango válido.

```js
let arr = [1, 2, 3, 4, 5];
```

>Los índices válidos para acceder a los elementos de este array son 0, 1, 2, 3 y 4. Si utilizas un índice negativo, como por ejemplo -1, estarás accediendo a una posición fuera del rango del array y obtendrás un valor undefined.

```js
console.log(arr[-1]); // undefined
```

Es posible usar esta sintaxis para leer y escribir elementos en un array.

```js
let a = ["world"];
let value = a[0];
a[1] = 3.14;
let i = 2;
a[i] = 3;
a[i + 1] = 'hello';
a[a[i]] = a[0];
```

Los arrays al ser solo objetos especializados, JavaScript convierte los índices numéricos de los arrays a string, así el índice 1, se convierte en el string "1", luego usa ese string como nombre de propiedad.

```js
let o = {};
o[1] = "one";
o["1"];
```

Es útil distringuir un índice de una array del nombre de una propiedad de un objeto. Todos los índices son nombres de propiedades, pero solo los nombres de propiedades que son enteros entre 0 y 2^32 - 2 son índices.

Es posible indexar un array usando números que son negativos o valores que no sean enteros. Cuando se hace esto, el número es convertido a string el cual es usado como nombre de la propiedad.

```js
a[-1.23] = true; // This creates a property named "-1.23"
a["1000"] = 0; // This the 1001st element of the array
a[1.000] = 1; // Array index 1. Same as a[1] = 1;
```

Debido a que los índices de los arrays son simplemente una manera de nombrar propiedades JavaScript no tiene el arror `out of bounds`. Cuando se trata de acceder una propiedad que no existe, simplemente se obtiene `undefined`.

```js
let a = [true, false];
a[2]
a[-1]
```

## Sparse Arrays

Los `sparse arrays` o arrays esparcidos, son aquellos en los cuales los elementos no se encuentran en índices contiguos comenzando en 0. En este tipo de arrays, la propiedad `length` no indica en número de elementos.

Los arrays esparcidos, pueden ser creados con el constructor `Array()` o asignandole valores a índices mayores a al valor de la propiedad `length` o en arrays literales no asignando valores entre las comas.

```js
// Se crea una array con una longitud de 5 elementos, pero no tiene valores
let a = new  Array(5);

// Se crea un array vacío y en la posición 1001 se asigna el valor 1000, por lo que todas las posiciones anteriores se encuentran vacias
a = [];
a[1000] = 0;

// Se crea un array con 3 índices sin valores. Recordar que la
// coma al final es permitida y no representa un nuevo índice.
let arr = [1, 2, , , 4, , 5,];
```

## Array Length

Cada array tiene la propiedad `length`, esta propiedad es la que hace a los arrays diferentes de los objetos regulares de JavaScript. Para arrays densos, `length` indica el número de elementos en el array, su valor es un más que el índice más alto en el array.

```js
// length 0: El array no tiene elementos
[].length

// length 3: El índice mayor es 2, length es 3.
["a", "b", "c"].length
```

En los arrays esparcidos, la propiedad `length` es más grandeque el número de elementos. Nunca tendremos un elemento cuyo índice sea mayor o igual que la propiedad `length` del array.

Si se asing un valor a un elemento de una array cuyo índice, es mayor o igual que el valor del `length`, entonces el valor de la propiedad `length` se actualizará para ser mayor que el valor índice del último elemento + 1.

Si se configura la propiedad `lenght` para un entero no negativo más pequeño que la canantidad de elementos presentes en el array, entonces los elementos con índice mayor o igual al valor de `lenght` serán borrados dela array.

```js
// Se crea un array con 5 elementos
a = [1, 2, 3, 4, 5];

// a ahora es [1, 2, 3]
a.length = 3;

// Se borran todos los elementos de a 
a.length = 0;

// a tiene un valor de length de 5 pero no tiene elementos
a.length = 5;
```

También es posible configurar la propiedad `length` de un array a un valor mayor que el valor actual.

## Añadiendo y borrando elementos

**Añadir elementos por asignación**  
La manera más simple de añadir elementos es simplemente asignando valores a los nuevos índices:

```js
let a = [];
a[0] = "zero";
b[1] = "one";
```

**Añadir elementos por el método push()**  
Es posible usar el método `push()` para agregar uno o más valores a un array, los cuales se irán agregando después del útimo elemento.

```js
// Se crea una array
let a = [];

// Se agregan elementos al array
a.push("zero");
a.push("two, three");
```

Agregar un elemento a un array es lo mismo que asignar un valor a `a[a.length]`.

También es posible agregar elementos al inicio del array con el método `unshift()` y aumenta los índices de los elementos existentes.

El método `pop()` hace lo opuesto que el método `push()`. `pop()` remueve el último elemento del array retornandolo y reduciendo la propiedad `length` del array en 1.

El método `shift()` remueve el primer elemento del array retornandolo y reduciendo la propiedad `length` en 1, además reduciendo el índice de todos los elementos del array.

```js

```

**Quitar elementos de un array**  
Es posible borrar elementos de un array con el operador `delete`, asi como este borrar propiedades.

```js
// Se crea un array con 4 elementos
let a = [1, 2, 3, 4];

// Se borra el valor del índice 2, es decir el valor 3
delete a[2];

// Devolverá falso ya que la propiedad 2 no tiene valor
2 in a

// Devuelve 4, ya que el eliminar un valor no afecta la longitud
// del array.
a.length
```

Borrar eleementos de un array es similar, pero levemente diferente, a asignar `undefined` a esos elementos. Notar que borrar elementos no afecta el valor de `length`.

`splice()` nos permite añadir, eliminar o reemplazar elementos de un array. Será visto en detalle más adelante.

## Iterando sobre arrays

**Iteración con for/of**  
Desde ES6 la manera más sencilla de iterar sobre una array (u objeto iterable) es con el bucle `for/of`.

```js
let letters = [..."hello world"];
let string = "";
for(let letter of letters) {
    string += letter;
}

console.log(string);
```

El bucle `for/of` retorna los elementos del array en forma ascendente, con arrays esparcidos, para índices vacíos, este retorna `undefinded`.

Si se necesita saber el índice de cada elemento, además del valor, es posible usar el método `entries()` junto a una asignación por destructuración:

```js
let letters = [..."Hello World"];
let everyother = "";
for(let [index, letter] of letters.entries()) {
    if (index % 2 === 0) everyother += letter;
}

console.log(everyother);
```

**Iteración con forEach()**  
Este es un método que ofrece una aproximación funcional para la iteración. `forEach()` se invoca sobre el array a iterar y recive como argumento una función la cual se invoca para cada elemento del array, retornando el valor de la función.

```js
let letters = [..."Hello World"];
let uppercase = "";
letters.forEach(letter => {
    uppercase += letter.toUpperCase();
});

console.log(uppercase);
```

`forEach()` itera en orden sobre el array y pasa como segundo argumento el índice el elemento a la función. Distinto a `for/of` cuano se eencuunetra con elementos cuyos valores no existen en el array, no se invoca la función.

**Iteración con bucle for**  
Es posible también iterar sobre un array de la manera clásica, usando el bucle `for`.

```js
let vowels = "";
for(let i = 0; i < letters.length; i++) {
    let 
}
```

En bucles anidados, u otros contextos donde el rendimiento es crítico, es posible encontrar el uso de un bucle `for` tradicional, ya que el bucle `for` tradicional solo necesita comprobar la longitud del array al comienzo en lugar de comprobarla cada iteración.

```js
//Guarda la longitud del array en una variable local
for(let i = 0, len = letters.length; i < len; i++) {

}

// Itera hacia atrás desde el final del array has el inicio
for(let i = letters.length-1; i >= 0; i--) {

}
```

Si el array es un array esparcido con valores que no existe, podemos comprobar el calor y saltar la oteración si este está vacío.

```js
for(let i; i < a.length; i++) {
    if(a[i] === "undefined") continue;
}
```

## Arrays multidimensionales

JavaScript no soporta arrays multidimensionales, pero es posible aproximarse mediante arrays de arrays.

**Acceder a valores**  
Para acceder a valores en un array de arrays, usamos el operador `[]` dos veces.

```js
// Se crea un array multidimensional
let table = new Array(10);
for(let i = 0; i < table.length; i++) {
    table[i] new Array(10);
}

// Se ininicializa el array
for(let row = 0; row < table.length; row++) {
    for(let col = 0; col < table[row].length; col++) {
        table[row][col] = row * col;
    }
}

// Se usa el array multidimnesional para calacular 5*7
table[5][7];
```

## Métodos de arrays

Es posible agrupar los métodos de los arrays en:

- Métodos de iteación. Tipicamente invocan una función por cada elemento del array durante la iteración.
- Métodos de pilas y colas. Añaden y remueven elementos desde el inicio o final del array.
- Subarray. Métodos para extraer, borrar, insertar, llenar y copiar.
- Búsqueda y ordenamiento. Métodos para buscar elementos y ordenarlos en un array.

## Métodos de iteración

Estos métodos aceptan una función como su primer argumento, e invocan esa función una vez cada elemento (o algunos elementos) del array.

Algunos de estos métodos también aceptan un segundo argumento opcional. Si es especificado la función es invocada como si fuera un método de este segundo argumento. Esto es, el segundo argumento que sea pasado será el valor de `this` para la función.

Cabe mencionar que la mayoría de los casos, la funcnión que se pasa como primer argumento de estos métodos es invocada con tres argumentos: el valor del elemento del array, el índice el elemento del array y el array en si mismo. A menudo solo es necesario indicar el primero de estos y es posible ingnorar el resto.

**forEach()**  
El método `forEach()` itera a través de un array, invocando la función que se especifica para cada elemento. `forEach()` invoca la función con tres argumentos: el valor del elemento, el indice del elemento, y el array en si mismo.

```js
let data = [1, 2, 3, 4, 5], sum = 0;

// Calcular la suma de los elementos del array
data.forEach(value => { sum += value; });

// Se incrementa el valor de cada elemento del array
// en este caso la función se invoca con 3 argumentos. 
// v es el valor del elemento, i es el índice y a es el array.
data.forEach(function(v, i, a) { a[i] = v + 1; });
```

`forEach()` no provee una manera de terminar con la iteración antes de todos los elementos. No hay algo equivalente a `break` del bucle `for` regular.

**map()**  
El método `map()` pasa a traves de cada elemento del array en el cual es invocada la función que se especifica y retorna un array conteniendo los valores retornados por la función.

```js
let a = [1, 2, 3];

// b recibirá el array [1, 4, 9]
let b = a.map(x => x * x);
```

`map()` invoca la función que recibe como argumento de la misma manera que lo hace `forEach()`. Sin embargo la función que recibe `map()`debe retornar un valor.

`map()` retorna un array, no modifica el array en el cual fue invocado. El array retornado tiene la misma longitud que el array donde fue invocado y los mismos elementos vacíos.

**filter()**  
Retorna una array que contiene un subset del array original. La función que se pasa a `filter()` debe tener un predicado que retorne que retorne `true` o `false`, si se retorna `true`, entonces o un valor que convierta a `true` entonces el elemento pasa el predicado y es miembro del subset y es añadido al array que será retornado.

```js
let a = [5, 4, 3, 1, 2];
a.filter(x => x < 3);
a.filter((x, i) => i  % 2 === 0);
```

`filter()` salta los elementos vacíos en un array y retorna una rray denso.

**find() y findIndex()**  
Son similares a `filter()` en el sentido de que reciven una función con un predicado y comienzan a iterar sobre cada elemento del array buscando que elementos cumplen con el predicado. Estos métodos paran la iteración la primera vez que un elemento cumple con el predicado. Cuando eso sucede `finds()` retorna el valor del elemento, mientras que `findIndex()` retorna el índice del elemento que cumplio el predicado. Si ningún elemento cumple el predicado, `find()` retorna `undefinded` y `findIndex()` retorna -1.

```js
// Se crea un array con 5 elementos
let a = [1,2,3,4,5];

// Retorna 2 que es el índice del valor 3
a.findIndex(x => x === 3);

// Retorna -1 ya que no hay elementos menores a 0
a.findIndex(x => x < 0);

// Retorna 5, ya que 5 % 5 es 0
a.find(x => x % 5 === 0);

// Retorna undefined ya que no hay múltiplos de 7
a.find(x => x % 7 === 0);
```

**every() y some()**  
Ambos funcionan con predicados. Aplican una función a cada elemento del array que retorna `true` o `false` si se cumple o no con el predicado.

`every()` es como el cuantificador matemático `para todo`. Retorna `true` si y solo si todos los valores del array cumplen con la condición del predicado.

```js
// Se crea una array con valores
let a = [1, 2, 3, 4, 5];

// Se comprueba que todos los elementos sean menores que 10.
// Se cumple por lo que every retorna true
a.every(x => x < 10);

// Comprueba que todos los elementos sean divisibles por 2.
// No todos los elementos lo cumplen por lo que every retorna
// false.
a.every(x => x % 2 === 0);
```

`some()` es como el cuantificador matemático `existe`. Retorna verdadero si existe al menos un elemento del array que cumpla con el predicado de la función y retorna `false` si todos los elementos no cumplen con el predicado.

```js
let a = [1, 2, 3, 4, 5];

// some() retorna true ya que existen elementos que son
// divisibles por 2.
a.some(x => x % 2 === 0);

// some() retorna false ya que ningún elemento cumple con el
// predicado.
a.some(isNaN);
```

Tanto `some()` como `every()` paran de iterar tan pronto como saben que valor deben retornar. `some()` retornará `true` la primra vez que un valor del array cumpla con el predicado, mientras que `every()` retornará false la primera vez que algún elemento del array no cumpla con el predicado.

Por convención matemática, `every()`retorna `true` y `some()` retorna `false` cuando son invocados en un array vacío.

**Reduce() y reduceRigth()**  
Ambos métodos combinan los elementos de una array usando la función que se especifica para producir un único valor. `reduce()` recibe dos argumentos, el primero es la función que realiza los calculos, y el segundo y opcional, es un valor inicial para pasar a la función.

```js
// Se crea un array con 5 elementos
let a = [1,2,3,4,5];

// Se pasa una función que toma dos elementos y los va sumando. 
// como valor inicial se pasa 0, por lo que el primer llamdo
// será 0 + 1 = 1, el segundo llamado será con el resultado 
// del primer llamado más el segundo elemento 1 + 2 = 3, el 
// tercer llamado será con el resultado del segundo llamado más
// el valor del tercer elemento 3 + 3 = 6 y así.
// La función retornará 15.
a.reduce((x,y) => x + y, 0);

// El primer llamado será con el valor 1 multiplicado por el 
// valor del primer elemento 
a.reduce((x,y) => x * y, 1);

// El primer llamado será con los dos primeros valores del array
// así se tendrá 1 > 2 ? devolviendo 2. Luego 2 > 3 devolviendo
// 3 y así. La función retornará 5.
a.reduce((x,y) => (x > y) ? x : y);
```
