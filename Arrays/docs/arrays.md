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

Cabe mencionar que la mayoría de los casos, la función que se pasa como primer argumento de estos métodos es invocada con tres argumentos: el valor del elemento del array, el índice el elemento del array y el array en si mismo. A menudo solo es necesario indicar el primero de estos y es posible ingnorar el resto.

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
Ambos métodos combinan los elementos de una array usando la función que se especifica para producir un único valor. `reduce()` recibe dos argumentos, el primero es la función que realiza los cálculos, y el segundo y opcional, es un valor inicial para pasar a la función.

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

`reduce()` toma dos argumentos. El primero es la función que realiza la reducción. La tarea de esa función es de alguna manera combinar dos valores en uno, retornando el valor reducido. El segundo arugmento (opcional) es un valor inicial que se le pasa a la función.

Las funciones usadas con `recude()` son diferentes a las funciones usadas con `forEach()` o `map()`. los valores como el valor inicial, índice, el array; son pasados como el segundo, tercer y cuardo elemento.

Cuando se llama a `reduce()` sin un valor inicial pasado, la función usa el primer elemento del array como su valor inicial. Esto significa que la primera llamada de la función, esta tomará el prmer y el segundo valor del array como su primer y segundo argumento.

Cuando `reduce()` es llamada en un array vacío sin un valor inicial, esto causa un `TypeError`.

**ReduceRigth()**  
`reduceRigth()` trabaja exactamente igual que `reduce()`, pero comienza a procesar el array desde el índice mayor hasta el menor. Esto es preferible cuando la asociatividad de la operación es de derecha a izquierda.

```js
let a = [2, 3, 4];
a.reduceRight((acc, val) => Math.pow(val, acc));
```

Ni `reduce()` ni `reduceRight()` aceptan algun argumento que especifique el valor para `this` en el cual la función será invocada.

`reduce()` y `reduceRight()` no solo pueden ser usadas para cálculos matemáticos. Cualquier función que pueda combiar dos valores, puede ser usada como función de reducción.

### Simplificando arrays con `flat()` y `flatMap()`

En ES2019, `flat()` crea y retorna un nuevo array que contiene los mismos elementos que el array llamado, excepto que algunos elementos los cuales ellos mismos son arrays, estos son simplificados en elementos individuales dentro del array retornado. Por ejemplo:

```js
// Devuelve: [1, 2, 3]
// Se simplifica el array interrior, devolviendo sus elementos
// como elementos simples.
[1, [2, 3]].flat()

// Esto devuelve [1, 2, [3]].
// Se simplifica el array con menos profundidad devolviendolo 
// dentro del array retornado como elemento simple
[1, [2,[3]]].flat()
```

Se se pasa a `flat()` un argumento numérico, este indicará el nivel de anidamiento en el cual se simplificarán los elementos.

```js
let a = [1, [2, [3, [4]]]];

// Devuelve: [1, [2, 3 [4]]]
// Se simplifica el primer nivel de anidamiento
a.flat(1) 

// Devuelve [1, 2, 3, [4]]
// Se simplifican hasta dos niveles de anidamiento
a.flat(2) 

// Devuelve [1, 2, 3, 4]
// Se simplifican hasta 3 niveles de anidamimento
a.flat(3) 

// Devuelve [1, 2, 3, 4]
// Se simplifican hasta 4 niveles de anidamiento
// ya que solo hay tres niveles de anidamiento se simplifican
// todos
a.flat(4) 
```

**`flatMap()`**  
`flatMap()` trabaja como  una combinación de `flat()` y `map()` el array retornado por la función `map()` es automaticamente pasado a una función `flat()` para ser simplificado. Es similara realizar `map(f).flat()`.

```js
let phrases = ["hello world", "the definitive  guide"];

// phrase.map() devuelve: 
// [["hello", "world"], ["the", "definitive", "guide"]]
// Luego a pasar el resultado anterior a flat() se tiene:
// ["hello", "world", "the", "definitive", "guide"]
let words = phrases.flatMap(phrase => phrase.split(" "));

// Imprime ["hello", "world", "the", "definitive", "guide"]
console.log(words);
```

Describir el siguiente ejemplo:

```js
[-2, -1, 1, 2].flatMap(x => x < 0 ? [] : Math.sqrt(x))
```

### Añadiendo arrays con `concat()`

El método `contact()` crea y devuelve un nuevo array que contiene los elementos originales, seguidos de los argumentos añadidos con `concat()`. Si los elementos que se añaden son arrays en si mismos, se añaden los elementos de estos arrays como elementos individuales, no como arrays. Solo se conservan como elementos los arrays anidados.

```js
// Se crea un array de elementos númericos
let a = [1, 2, 3];

// Se añade al array a los elementos 4 y 5
// [1, 2, 3, 4, 5]
a.concat(4, 5);

// [1, 2, 3, 4, 5, 6, 7]
a.concat([4, 5], [6, 7]);

// [1, 2, 3, 4, 5, [6, 7]]
a.concat(4, [5, [6, 7]]);

// Devuelve [1, 2, 3] ya que array original no es modificado
console.log(a);
```

Notar que `contact()` crea un nuevo array. Si te encuentras escribiendo codigo como `a = a.concat(x)`, entonces se debería pensar en modificar el array original en su lugar con `push()` o `splice()`.

### Métodos de pilas y colas con `push()`, `pop()`, `shift()` y `unshit()`

**push() y pop()**  
Los métodos `push()` y `pop()` nos permiten trabajar con arrays como si fueran pilas. `push()` agrega uno o más elementos al final del array y devuelve la nueva longitud del arrray. `push()` no simpifica sus argumentos.

`pop()` borra el último elemento del array, decrementando el valor de `length` y retornando el valor removido.

Tanto `push()` como `pop()` modifican el array original en su lugar.

```js
let stack = [];
stack.push(1, 2);
stack.pop();
stack.push(3);
stack.pop();
stack.push([4, 5]);
stack.pop();
stack.pop();
```

**unshift y shift**  
Estos métodos insertan y remueven elementos desde el inicio de un array. `unshift()` añade un elemento al inicio, aumenta el valor de los índices de todos los elementos presentes y retorna la nueva longitud del array. `shift()` remueve y retorna el primer elemento del array, disminuyento el índice de todos los elementos precentes. Estos métodos son menos eficientes que `push` y `pop()` ya que deben trabajar reubicando todos los elementos del array en cada operación.

```js
let a = [];
q.push(1, 2);
q.shift();
q.push(3);
q.shift();
q.shift();
```

Cuando se psadan múltiples elementos a `unshift()` estos son insertados todos a la vez, por lo que el resultado es diferente que cuando son insertados individualamente:

```js
// Array  a es []
let a = [];

// Array a es [1]
a.unshift(1)

// Array a es [2]
a.unshift(2)

// Array es []
a = [];

// Array a es [1, 2]
// Los elementos se insertan en el mismo orden en el cual son 
// recibidos como argumentos, por lo que el resultado es distinto
// al obtendo cuando se insertan separadamente ya que en este último
// caso el último elemento insertado siempre se colocará primero
a.unshift(1, 2);
```

### Subarrays con `slice()`, `splice()`, `fill()` y `copyWithin()`

**slice**  
El método `slice()` retorna un slice o subarray del array especificado. Toma dos argumentos que especifican el comienzo y el final del slice retornado, sin incluir el segundo argumento.

- Si se llama slice con solo con 1 argumento, el array retornado contendrá todos los elelementos desde la posición inicial indicada hasta la final.
- Si algún argumento es negativo, este se referería a posicions relativas al final del array.
- Slice no modifica el array original

```js
let a = [1, 2, 3, 4, 5];

// Devuelve: [1, 2, 3]
// Los elementos 0 al 3 con desde el valor 1 al 4, pero un slice
// no incluye el valor final
a.slice(0, 3);

// Devuelve: [4, 5]
// Solo se indica que se comience en el elemento indice 3, como
// no se indica final, se tomará desde el índice 3 hasta el final
a.slice(3)

// Devuelve: [2, 3, 4]
// El inicio es el elemento índice 1, mientras que el final será 
// el último elemento, ya que -1 hace referencia al último elemento
// El último elemento no se incluye
a.slice(1, -1)

// Devuelve: [3]
// El inicio es relativo al final por lo que el índice -3 corresponde
// al valor -3. El final del índice -2 sería el valor 4, pero
// no se incluye
a.slice(-3, -2)
```

**splice**  
`splice()` es un método de próposito general, modifica el array original. `splice()` puede borrar elementos de un array, insertar elementos de un array o hacer ambas al mismo tiempo. Los elementos que vienen antes o después de la operación ven sus índices decrementados o aumentados si es necesario.

El primer argumento para `splice()` especifica la posición del array donde se comenzará la inserción o eliminación. El segundo argumento, especificará el número de elementos que deben ser borrados desde el array. Si el segundo argumento es omitido se eliminarán todos los elementos del arrays desde el inicio indicado. `splice()` devolverá un array con los elementos borrados o un array vacío si no ningun elemento fue borrado.

```js
let a = [1, 2, 3, 4, 5, 6, 7, 8];

// devuelve [5, 6, 7, 8], los cuales son los elementos borrados
// desde el índice 4 hasta el final
// el array a ahora es: [1, 2, 3, 4]
a.splice(4);

// Devuelve: [2, 3]
// El array a ahora es: [1, 4]
a.splice(1,2);

// Devuelve: [4]
// El array a ahora vale [1]
a.splice(1,1)
```

`splice()` puede recibir otros argumentos que indican los elementos que deben ser insertados en el array, comenzando de la posición indicada en el primer argumento. Por ejemplo:

```js
let a = [1, 2, 3, 4, 5];

// a es: [1, 2, "a", "b", 3, 4, 5]
// La posición inicial de la inserción es el índice 2. Todos
// los elementos desde el índice 2 en adelante se incrementan en
// índice.
// el segundo argumento 0 indica que 0 elementos deben borrarse
// luego desde el tercer argumento tenemos los elementos a insertar
// en el array
a.splice(2, 0, "a", "b");

// Devuelve: [1, 2, [1, 2], 3, 3, 5]
// el primer argumento indica que se deben comenzar a borrar elementos
// desde el índice 2. El segundo argumento que se deben borrar
// 2 elementos. Luego de eso debenn insertarse los elementos
// pasados como argumentos restantes
a.splice(2, 2, [1, 2], 3);
```

**fill()**  
Configura elementos de una array, o dividisión de un array, a un valor especificado. Modifica el array original y lo retorna.

El primer argumento de `fill()` es el valor con el cual el array será configurado, el segundo argumento (opcional) especifica el inicio, si se omite el inicio será el comienzo. El tercer argumento especifica el índice final, sin incluir el final.

```js
// Se crea un array con 5 posiciones vacias
let a = new Array(5);

// Se llena el array a con solo 0
// a [0, 0, 0, 0, 0]
a.fill(0)

// Se llena el array con valores 9 desde la posición 1
// a [0, 9, 9, 9, 9]
a.fill(9, 1)

// Se llena el array con valores 8 desde la posición 2 hasta
// la posición -1
// a [0, 9, 8, 8, 9]
a.fill(8, 2, -1)
```

**copyWithin**  
Copia una división del array a una nueva posición dentro del mismo array. El primer argumento especifica el índice de destino, el segundo argumento especifica el índice del primer elemento que será copiado, si es omitido es usado 0. El tercer argumento especifica el final de la división de elementos que serán copiados, si se omite, la longitud del array es usada. No se incluye el elemento final en la copia.

```js
let a = [1, 2, 3, 4, 5];

// Copia a la posición 1 usando todo el array
// a [1, 1, 2, 3, 4]
a.copyWhitin(1);

// Copia a la posición 2 un los elementos comprendidos entre el
// índice 3 y el 5. Cómo el array tiene indices desde 0 a 4, se 
// copian los dos últimos elementos a la posición 2
// a [1, 1, 3, 4, 4]
a.copyWhitin(2, 3, 5);

// Se copina a la posición 0, desde el índice -2 hasta el final
// a [4, 4, 3, 4, 4]
a.copyWhitin(0, -2)
```

### Métodos de orden y búsqueda en arrays

**indexof() y lastIndexOf()**  
`indexOf()` y `lastIndexOf()` buscan en un array la aparición de un valor especificado y retornan el índice de la primera coincidencia o -1 en el caso de no encontrarse. `indexOf()` busca desde el inicio hasta el final del array, mientras que `lastIndexOf()` busca desde el final al inicio.

```js
let a = [0, 1, 2, 1, 0];

// Retorna 1, ya que 1 es el índice de la primera aparición de 1
// buscando de izquierda a derecha
a.indexOf(1);

// Retorna 3, ya que 3 es el índice de la primera aparición de 1
// buscando de derecha a izquierda
a.lastIndex(1);

// Retorna -1, ya que no hay coincidencias para el valor 3
a.indexOf(3);
```

Estas funciones comparan su argumento con los valores del array mediante el operador de equivalencia `===`. Si array contiene objetos u otros arrays, en lugar de valores primitivos, serán comparadas sus referencias. Si se desea comparar el contenido de un objeto, es mejor usar `find()`.

`indexOf()` y `lastIndexOf()`, toman un segundo argumento, que especifica el índice desde donde comenzar la búsqueda. Si este argumento es omitido `indexOf()` comienza la búsqueda al inico del array y `lastIndexOf()` al final.

Los índices negativos son permitidos, y son tratados como un desplazamiento respecto al final del array.

En el siguiente ejemplo, se tiene una función que busca un elemento especificado en un array y retorna un array con todas las considencias.

```js
function findall(a, x) {
    let results = [], len = a.length, pos = 0;

    while(pos < len) {
        pos = a.indexOf(x, pos);
        if (pos === -1) break;
        results.push(pos);
        pos = pos + 1;
    }
    return results;
}
```

**Includes**  
`sort()` ordena los elementos de un array en el array original y retorna el array ordenado. Cuando este métodod es llamado sin argumentos, ordena los elementos de una array de manera alfabetica (covierte los elementos temporalmente si es necesario).

```js
let a = ["banana", "cherry", "apple"];

// Devuelve: ["apple", "banana", "cherry"]
a.sort();
```

Si un array contiene elementos `undefined` estos son ordenados al final del array.

Para ordenar un array en un orden particular, se debe pasar una función de comparación como un argumento de `sort()`. Si en la comparación, el primer argumento debe aparecer primero, la función debe retornar un valor menor que 0, si el  primer argumeto debe aparecer segundo la función debe retornar un valor menor a 0, si ambos valores son equivalentes la función debe retornar 0, en este caso el orden es irrelevante.

Por ejemplo:

```js
let a = [33, 4, 1111, 222];

// Devuelve el orden alfabetico
// [1111, 222, 33, 4]
a.sort();

// Retorna los valores ordenados numéricamente
// [4, 33, 222, 1111]
a.sort(function (a, b) {
    return a - b;
});

// Retorna los valores ordenados de manera inversa
// [1111, 222, 33, 4]
a.sort((a, b) => b - a);
```

Otro ejemplo, comparación de elementos de texto sin sensibilidad a mayúculas.

```js
let a = ["ant", "Bug", "cat", "Dog"];

// a == ["Bug", "Dog", "ant", "cat"]; 
// Orden sencible a mayúsculas
a.sort();

a.sort(function(s, t) {
    let a = s.toLowerCase();
    let b = t.toLowerCase();
    if (a > b) return -1;
    if (b > a) return 1;
    return 0;
});
```

**Reverse**  
El método `reverse()` invierte el orden de los elementos de un array y retorna el array resultante. Las operaciones son realizadas en el array de origen.

```js
let a = [1, 2, 3];
a.reverse();
```

### Conversiones de Array a string

La clase Array define tres métodos para convertir de arrays a strings (si se desea guardar contenido de un array en forma de texto para volver a usarlo después, es mejor serialzar el array con `JSON.stringifu()`).

**join()**  
El método `join()` convierte todos los elementos de un array a un string que los concatena y retorna el array resultante. Es posible especificar un string que separe los elmentos como argumento de `join()`. Si nada es especificado, se usarán comas.

```js
let a = [1, 2, 3];

// "1,2,3"
a.join();

// "1 2 3"
a.join(" ");

// "123"
a.join("");

// Se crea una array con 10 elementos vacios
let b = new Array(10);

// El resultado es "----------"
b.join("-");
```

**toString()**  
Como todos los objetos, los arrays tienen el método `toString()` que funciona como `join()` sin argumntos,

```js
// "1,2,3"
[1,2,3].toString()

// "a,b,c
["a", "b", "c"].toString()
```

Además `toLocaleString()` es la versión de `toString()` localizada. Concatena los elementos el array según la configuración de localización específica.

#### Funciones estáticas de arrays

La clase Array define tres funciones estáticas para los arrays, las que se pueden invocar por medio del constructor array.

`Array.of` y `Array.from` son métodos que crean nuevos arrays ya documentados anteriormente. el tercer método es `Array.isArray(), es cual es usado para determinar cuando un valor es array o no.

```js
// true
Array.isArray([])

// false
Array.isArray({})
```

## Objetos Array-like

Los objetos `array-like` no son en realidad arrays, pero en la practica, aunque no se puedan invocar directamente métodos de arrays en ellos, es posible iterar sobre sus valores con el mismo código que se haria para un verdadero array. Esto es espcialmente verdadero cuando los algoritmos tratan a los arrays como solo lectura o si ellos al menos dejan la propiedad `length` sin cambios.

El siguiente código toma un objeto reglar, añade propiedades para convertirlo en un `array-like` y luego iterar a través de sus elementos.

```js
let a = {}
let i = 0;
while (i < 10) {
    a[i] = i * i;
    i++;
}

a.length = i;

let total = 0;
for(let j = 0; j < a.length; j++) {
    total += a[j];
}
```

En JavaScript del lado del cliente, un número de métodos para trabajar con documentos HTML retornan objetos `array-like`. El siguiente ejemplo es una función que se puede usar para probar objetos que trabajen como arrays:

```js
function isArrayLike(o) {
    if(o &&
       typeof o === "object" &&
       Number.isFinite(o.length) &&
       o.length >= 0 &&
       Number.isInteger(o.length) &&
       o.length < 4294967295) {
        return true;
       } else {
        return false;
       }
}
```

La mayoria de los métodos de arrays son definidos de manera genérica asi estos estos puede ser correctamente aplicados en objetos `array-like`.

Es posible invocar métodos de arrays usando `Function.call`.

```js
// Se crea un objeto array-like
let a = {"0": "a", "1": "b", "2": "c", length: 3}

// Se llama el método join desde la clase Array pasándole como
// this el objeto a y como separador +
// "a+b+c"
Array.prototype.join.call(a, "+");

// Se llama el método map de la clase array
Array.prototype.map.call(a, x => x.toUpperCase());

Array.prototype.slice.call(a, 0);

// Se crea un nuevo array desde el objeto a
Array.from(a)
```

## String como Arrays

Los strings en JavaScript se comportan como arrays de solo lectura de caracteres UTF-16 Unicode. Es posible acceder a los elementos de un string mediante la notación de corchetes.

```js
let s = "test";

// => "t"
s.chartAt(0);

// => "e"
s[1]
```

Esto significa que podemos aplicar métodos genéricos de los arrays sobre los strings.

```js
// => "J a v a S c r i p t"
Array.prototype.join.call("JavaScript", " ")
```

Los strings son valores inmutables, por loque son tratados como arrays de solo lecturaa. Los métodos como `push()`, `sort()`, `reverse()` y `splice()` no funcionan en strings. Esto no causa un error, solo falla de manera silenciosa.
