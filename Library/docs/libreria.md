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

## Fechas y horas

La clase `Date` es una `API` de JavaScript que trabaja con fechas y horas. Se puede crear un objeto `Date` mediante su constructor `Date()`. Sin argumentos, este retorna un objeto `Date` que representa la fecha y hora actual. Si se pasa un argumento con valor numérico, el constructor `Date()` interpreta ese valor como el número de milisegundos trascurridos desde el 1 de enero de 1970.

```js
// Se crea un objeto Date que representa la fecha actual
let now = new Date();

// Se pasa como argumento 0, por lo cual debe devolver el 1 de
// enero de 1970 a las 00 hrs ya que 0 indica la cantidad de 
// milisegundos transcurridos desde esa fecha
let epoch = new Date(0); 
```

Si se especifican dos o más argumentos de enteros, estos son interpretados como año, mes, day del mes, hora, minuto, segundo y milisegundo en hora local. Por ejemplo:

```js
let century = new Date(
    2100, 0, 1, 2, 3, 5, 2
);
```

Los meses del año comienzan en 0, por lo que enero corresponde a 0.  Si se omiten los campos de hora en el constructor, estos se llenan por defecto con valores 0, configurando la media noche.

Si se desea especificar una fecha y hora en UTC (Universal Coordinated Time, aka GMT), entonces se puede usar `Date.UTC()`. Este es un método estático que toma los mismos argumentos que el constructor `Date()`, interpretándolos en tiempo UTC, y retornando un `timestamp`en milisegundos el cual se puede pasar al constructor `Date()`. Por ejemplo:

```js
let century = new Date(Date.UTC(2100, 0, 1));
```

Si desea imprimir una fecha, esta por defecto será imprimida en la zona de hora local. Si se desea mostrar una fecha en UTC, entonces se debe explicitamente convcertir a string con `toUTCString()` o `toISOString()`.

Finalmente, si e pasa un strong al constructor `Date()`, este intentará parsear el string como una especificación de fecha y hora. El constructor `Date()` puede parsear fechas especificadas en formatos producidos por `toString()`, `toUTCString()` y `toISOString()`. Por ejemplo:

```js
// Se le entrega a Date un string con el formato ISO por lo cual
// este es capaz de interpretarlo correctamente y crear un 
// objetot fecha.
let century = new Date("2100-01-01T00:000:00Z");
```

**Consultar y configurar objectos Date**  
Una vez creado el objeto `Date` es posible consultar y configurar sus valores con los métodos setters y getters correspondientes. Cada método tiene dos formas: una que consulta y configura los valores usando el formato local y hora que usa el tiempo UTC.

Para consultar y configurar los valores de un objeto `Date` tenemos por ejemplo tenemos: `getFullYear()`, `getUTCFullYear()`, `setFullYear()` o `setUTCFullYear()`.

Para obtener y configurar los valores de los otros campos de `Date` simplemente se reemplaza por el nombre que deseamos, por ejemplo, si se desea el mes sería: `getFullMonth()`, `getUTCFullMonth()`, `setFullMonth()` o `setUTCFullMonth()`.

Por ejemplo:

```js
// Se crea un nuevo objeto fecha, que almacenará la fecha actual
let d = new Date();

// Se configura el año del objeto fecha creado, obteniendo el
// valor del año presente en el objeto, sumandole 1.
d.setFullYear(d.getFullYear() + 1)
```

`setFullYear()` y `setUTCFull()` year también permiten configurar el és y el day del mes. `setHours()` y `setUTCHours()` permiten especificar los minutos, los segundos y los milisegundos.

`getDay()` y `getUTCDay()` retornan el día de la semana (0 para los domingos y 6 para los sábados). El día de la semana es una propiedad de solo lectura, por lo que no existe un método correspondiente a setDay. `getDate()` y `getUTCDate()` retornan el día del mes.

### Timestamps

JavaScript representa las fechas internamente como enteros que especifican el número de milisegundos desde la media noche del 1 de enero del 1970, hora UTC.

Para cualquier objeto `Date`, el método `getTime()` retorna este valor interno y `setTime()` lo configura. Así para añadir 30 segundo a una fecha podemos hacer lo siguiente:

```js
d.setTime(d.getTime() + 30000);
```

Estos valores en milisegundos son también llamados `timestamps`. El método estático `Date.now()` retorna el tiempo actual como `timestamp` y es útil por ejemplo cuando se desea medir cuando tarda un código en correr, por ejemplo:

```js
let starTime = Date.now();

// Hacer algo que consuma tiempo 
reticulateSplines();

let endTime = Date.now();
console.log(`La función ha tardado: ${statTime - endTime}`);
```

**High-Resolution Timestamps**  
La función `performance.now()` retorna valores timestamp en miliegundos, pero los valores incluyen fracciones de milisegundos, por lo que es mucho más precisa.

Está función es parte de la API `Performance` y no está definida por el estándar ECMAScript, aunque es implementada por los navegadores y Node. Para usar `performance` en Node se debe importar:

```js
const { performance } = require("perf_hooks");
```

### Aritmetica de fechas

Es posible comprar fechasa con los operadores de comparación `<`, `>`, `<=`, `=>`, y además tambien se pueden sustraer objetos `Date` desde otro para determinar el número de milisegundos entre dos fechas. Esto es posible porque la clase `Date` define un método `valueOf()` que returna un `timestamp`.

Para hacer aritmética que involucran días, meses y años, es posible usar `setDay()`, `setMonth()`, y `setYear()` ya que utilizar milisegundos para estas operaciones resulta engorroso. A continuación un ejemplo de como sumar tres meses y dods seamanas a la fecha actual:

```js
let d = new Date();
d.setMonth(d.getMonth() + 3, d.getDate() + 14);
```

Los métodos de configuración de fechas funcionan correctamente, incluso cuando están fuera de rango. Cuando añadimos tres meses al mes actual, si terminamos con un valor mayor a 11 (el cual representa a diciemrbe). `setMonth()` maneja esto incrementando el año como sea necesario. Similarmente, cuando configuramos el dia del mes con un valor mayor al número de dias en el mes, el mes se incrementa apropiadamente.

```js
let fechaDiciemnbre = new Date(2022, 11, 27);
let fechaPosterior = new Date(fechaDiciembre.getMonth() + 1);
```

### Formateando y Parsing fechas

La clase `Date` define un número de diferentes métodos para convertir objetos `Date` en strings. Aquí algunos ejemplos:

```js
// Se crea un nuevo objeto tipo fecha año 2020, enero, dia 1,
// 17:10:30 hora.
let d = new Date(2020, 0, 1, 17, 10, 30);

// Convertimos a string el objeto anterior
// Wed Jan 01 2020 17:10:30 GMT-0300
d.toString();

// Wed, 01 Jan 2020 20:10:30 GMT
d.toUTCString();

// 01-01-2020
d.toLocaleDateString();

// 17:10:30
d.toLocaleTimeString();

// 2020-01-01T20:10:30.000Z
d.toISOString();
```

Lista completa de métodos para formatear strings de fechas

- `toString()`. Este método usa la hora looal, pero no entrega la información en el formato local.
- `toUTCString()`. Este método usa el tiempo UTC, y no formatea la fecha en formato local.
- `toISOString()`. Entrega la fecha y la hora en el formato IUSO-8601. horas:minutoss:segundos:ms. La letra T separa la fecha de la hora. Es expresado con la hora UTC indicada con la Z al final de la cadena.
- `toLocaleString()`. Este método usa la hora local y el formaque es apropiado para el usario local.
- `toDateString()`. Este método formatea solo la porción correspondiente a la fecha, omitiendo la hora. Usa la zona horaria local.
- `toLocaleDateString()`. Formatea solo la fecha. Usa la zona horaria local y el formato apropiado para el usario local.
- `toTimeString()`. Formatea solo la hora, omite la fecha. Usa la zona horaria local, pero no entrega un formato local.
- `toLocaleTimeString()`. Formatea la hora en un formato local y usa la zona horaria local.

```js
let ahora = new Date();

// Convertimos a string el objeto anterior
console.log('fecha .toString()', ahora.toString());
console.log('fecha .toUTCString()', ahora.toUTCString());
console.log('fecha .toLocaleDateString()', ahora.toLocaleDateString());
console.log('fecha .toLocaleTimeString()', ahora.toLocaleTimeString());
console.log('fecha .toISOString()', ahora.toISOString());
console.log('fecha .toLocaleString()', ahora.toLocaleString());
console.log('fecha .toTimeString()', ahora.toTimeString());
console.log('fecha .toLocaleTimeString()', ahora.toLocaleTimeString());
```

Ninguno de los métodos anteriores es ideal cuando deseamos formatear fechas y horas para mostrarlas al usuario final. Lo cual es mejor hecho con `internacionalización`.

Finalmente, existe el método `Date.parse()` que toma un string como argumento e intenta representar ese string como fecha y hora, retorna un timestamp que representa una fecha. `Date.parse()` es capaz de representar fechas cuyos strings tambien puedan ser representados por el constructor `Date()`.

## Clases Error

Las sentencias `throw` y `catch` pueden lanzar y atrapar cualquier valor de JavaScript, incluidos valores primitivos. No hay algun tipo exception que pueda ser usado como señal de errores. JavaScript define una clase `Error`, y es tradicional usar instancias de `Error` o sunclases cuando señalamos un erorr. Una razon por la cual usar un objeto Error, es que este captura el estado de la pila de llamadas en JavaScript.

Notar que la pila de llamadas muestra donde el objeto Error fue creado, no donde la sentencia `throw` lo lanzó. Si siempre creamos el objeto justo antes de lanzarlo con `throw new Error()` esto no causara ninguna confusión.

Los Objetos de Error tienen dos propiedades: `message` y `name`, y un método `toString()`. El valor de la propiedad `message` es el valor que se pasa al constructor `Error()`, conviertiendolo a string si es necesario. Para objetos creados con `Error()`, el valor de la propiedad `name` simepre es `Error`.

Aunque no es parte del estándar ECMAScript, Node y todos los navegadores modernos definen una propiedad `stack` en los objetos `Error`. El valor de esta propiedad es un string multilinea que contiene una `stack trace` de la pila de llamados de JavaScript al momento que el objeto Error fue creado.

Ademas de la clase `Error`, JavaScript deine un número de subclases, estas subclases son `EvalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError`, y `URIError`.

También es posible definir clases de error propias. Si creamos una subclase, podemos deinir nuevas propiedades y detalles del error. Por ejemplo:

```js
class HTTPError extends Error {
    constructor(status, statusText, url) {
        super(`${status} ${statusText}: ${url}`);
        this.status = status;
        this.statusText = statusTextM
        this.url = url;
    }

    get name() { return "HTTPError"; }
}

let error = new HTTPError(404, "Not found", "http://example.com/");

// => 404
error.status;

// => "404 Not found: http://example.com/"
error.message;

// => "HTTPError"
error.name;
```

## Serialización y Parsing JSON

El proceso de convertir estructuras de datos a streams de bytes o caracteres es conocido como serialización (o marshaling o pickling).

La manera mas fácil de serializar informaicón en JavaScript es usando el formato `JSON`. JSON soporta valores primitivos de números, strings, y también `true`, `false` y `null` como también `arrays` y objetos creados a partir de estos valores primitivos.

JavaScript soporta la serialización y deserialización JSON con dos funciones `JSON.stringify()` y `JSON.parse()`. Es posible serializar un objeto pasandolo como argumento a la funció´n `JSON.stringify`, la cual retornará un string, dado este string, es posible pasarlo como argumento a la función `JSON.parse()` y recrear la estructura de datos originall.

```js
// Se crea un objeto
let o = {s: "", n: 0, a: [true, false,  null]};

// Se pasa el oobjeto o a la función JSON.stringify 
// s == '{"s":"","n":0,"a":[true,false,null]}'
let s = JSON.stringify(o);

// Se pasa el objeto s a la función JSON.parse que devuelve
// la estructrua de datos a su forma original
// copy == {s: "", n: 0, a: [true, false, null]}
let copy = JSON.parse(s);
```

Tanto `JSON.stringify()` como `JSON.parse()` aceptan un segundo argumento que nos permite extender el formato JSON. `JSON.stringify()` también toma un tercer argumento opcional, este tercer agumento le dice a `JSON.stringify()` que debería formatear la información en múltiples lineas indentadas. Si el tercer argumento es un número, este será la cantidad de espacios usados para la indentación de cada nivel. Si el tercer argumento es un string de espacios en blanco, como `\t`, se usará este string como indentación de cada nivel.

```js
let o = {s: "test", n: 0};

// => '{\n "s": "test", \n  "n": 0\n}'
JSON.stringify(o, null, 2);
```

`JSON.parse()` ignora los espacios en blanco, por lo que pasar un tercer argumento a `JSON.stringify()` no tiene impacto en convertir de vuelta la estructura de datos.

### Configuraciones JSON

Si se solicita serializar un valor con `JSON.stringify()` que no es nativamente soportado por el formato JSON, este método busca si el valor tiene un método `toJSON()`, y si es así, entonces lo llama y serializa el valor en el lugar del valor original. Cuando se deserializa la estructura, es posible que no sea exactmante igual que la del comienzo.

Si se necesita re-crear objetos serializados, es posible pasar una `reviver function` como segundo argumento de `JSON.parse()`. Esta función es invocada una vez por cada valor primitivo (pero no para objetos o arrays que contengan esos valores primitivos) parseando el string de entrada. La función es invocada con dos argumentos, el primero, el nombre de la propiedad, el segundo argumento es el valor primitivo de ese objeto o elemento de array. Además, la función es invocada como un método del objeto que contiene el valor primitivo, por lo que podemos referirnos al objeto contenedor con `this`.

>La reviver function es una función que se llama para cada clave-valor en el objeto resultante, y permite modificar el valor devuelto por JSON.parse. La reviver function se llama con dos argumentos: el clave y el valor del objeto. Si se devuelve el mismo valor que se proporciona como argumento, se mantiene el valor original. Si se devuelve un valor diferente, se reemplaza el valor original con el nuevo valor. Por ejemplo, supongamos que tenemos la siguiente cadena de texto en formato JSON:

```js
const jsonString = '{"name":"John", "age":30, "city":"New York"}';

// Podemos parsear esta cadena con JSON.parse de la siguiente manera:
const obj = JSON.parse(json);

// imprime {name: "John", age: 30}
console.log(obj); 

// Podemos usar JSON.parse() junto con una función "reviver"
// para convertir esta cadena en un objeto de JavaScript y 
// modificar el valor de algunos de sus elementos de la 
// siguiente manera:
const obj = JSON.parse(jsonString, (key, value) => {
  if (key === 'age') {
    return value + 10;
  }
  return value;
});

console.log(obj.name); // imprime 'John'
console.log(obj.age); // imprime 40
console.log(obj.city); // imprime 'New York'
```

El valor retornado por la `reviver functions` o `funciones de restauración` se convierte en el nuevo valor de la propiedad nombrada. Si esta función retorna `undefined`, entonces la propiedad será removida del objeto antes de que `JSON.parse()` retorne al usuario. Si la función retorna el mismo valor recibido como argumento, entonces la propiedad permanece sin cambios.

Un ejemlo quqe usas una función de restauración para filtrar algunas propiedades y re-crear objetos tipo `Date`.

```js
let data = JSON.parse(text, function(key, value) {
    if (key[0] === "_") return undefined;
    if( typeof value === "string" &&
        /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)) {
        return new Date(value);    
    }

    return value;
});
```

**Personalización de JSON.stringify()**  
`JSON.stringify` permite personalizar la salida mediante un segundo argumento opcional, que recibe un array o una función.

Si el segundo argumento es un array de strings (o números que son convertidos a strings) estos son usados como nombres de las propiedades de objeto, cualquier propiedad cuyo nombre no este en el objeto será omitida para la serialización. Además, el string retornado incluirá las propiedades en el mismo orden que aparecen en el array.

Si el segundo argumento es una función, esta función es conocida como una `replacer function`. Es invocada por cada valor a ser serializado. El primer argumento de la `replacer function` es el nombre de la propiedad del objeto o el indice del array del valor en ese objeto, y el segundo argumento es el valor en si mismo. Esta función es invocada como un método del objeto o array que contiene el valor que será serializado.

El valor retornado por la `replacer function` es la serialización del valor original en su lugar. Si se retorna `undefined` o nada en lo absoluto, entonces el valor es omitodo de la serialización.

```js
// Se especifican que campos serán serializados y que orden.
let text = JSON.stringify(address, ["city", "state", "country"]);

// Se expecifica una replacer function que omite los valores de
// RegExp
let json = JSON.stringify(o, (k,v) => v instanceof RegExp ? undefined : v);
```

>En JavaScript, la función JSON.stringify() se utiliza para convertir un objeto o un valor primitivo en una cadena de texto en formato JSON (JavaScript Object Notation). Esta función acepta un segundo argumento opcional llamado "replacer", que es una función o un array de cadenas que se llama para cada uno de los elementos del objeto o del array que se está convirtiendo.  La función "replacer" se llama con dos argumentos: el clave del elemento y el valor del elemento. Si la función "replacer" devuelve el valor del elemento sin modificaciones, se usará ese valor para el elemento correspondiente en la cadena de texto en formato JSON resultante. Si la función "replacer" devuelve undefined, el elemento no se incluirá en la cadena de texto resultante. Si la función "replacer" devuelve un valor distinto, se usará ese valor en lugar del valor original. Por ejemplo, supongamos que tenemos el siguiente objeto:

```js
const obj = {
  name: 'John',
  age: 30,
  city: 'New York'
};
```

>Podemos usar JSON.stringify() junto con una función "replacer" para convertir este objeto en una cadena de texto en formato JSON y modificar el valor de algunos de sus elementos de la siguiente manera:

```js
const jsonString = JSON.stringify(obj, (key, value) => {
  if (key === 'age') {
    return value + 10;
  }
  return value;
});

// imprime '{"name":"John","age":40,"city":"New York"}'
console.log(jsonString);
```

>En este ejemplo, hemos usado una función "replacer" que aumenta en 10 el valor del elemento con clave "age". Como resultado, el valor del elemento "age" en la cadena de texto resultante es 40 en lugar de 30.

En general si se define un método `toJSON()` para un tipo, o si se usa una función de reemplazo que reemplace valores no-serialiazbles por valores serializables, entonces se tipicamente se necesitará usar una función de restauración con `JSON.parse()` para obtener la estructura de datos original de vuelta. Si se hace esto, se debe entender que se está definiendo una estructura de datos personalizada y sacrificando la portabilidad y compatibilidad.

## La API de internacionalización

Consiste en tres clases `Intl.NumberFormat`, `Intl.DateTimeFormat` y `Intl.Collator` que permiten formatear numeros, incluyendo modenas y porcentajes, fechas y horas en versiones locales, ademas comprar strings en formatos locales apropiados.

Una de las partes más importantes de la internacionalización es mostrar texto que ha sido traducido al idioma del usuario.

### Formateo de números

Los usuarios alrededor del mundo esperan los números formateados en diferentes maneras. Puntos decimales o comas, separadores de mil pueden ser puntos o comas, etc.

**Clase Intl.NumberFormat**  
La clase `Intl.NumberFormat` define el método `format()` que tiene en cuenta todos estos formatos posibles. El constructor toma dos argumentos. El primero especifica la zona para la cual el número deberia ser formateado, el segundo argumento es un objeto que especifica mas detalles sobre como el número debe ser formateado.

Si el primer argumento es omitido o `undefined` entonces se considerará la configuración local del sistema del usuario. Si el primer argumento es un string, este especificará la zona deseada como "en-US", "es-CL", "zh-Has-CN". El primer argumento también puede ser un array de strings, en este caso se seleccionará el más especifico y bien soportado.

El segundo argumento de `Intl.NumberFormat()`, si es especificado deberá ser un objeto que define una o más de las siguientes propiedades:

- `style`. Tipo de formato para número decimal. Por defecto es "decimal". Especificar "percent" para porcentajes o "currency" para monedas.
- `currencyDispaly`. Especifica como una moneda es mostrada. El valor por defecto es "symbol" que el símbolo de la moneda si esta tiene uno. El valor code, usa tres letras ISO y name muestra el nombre de la moneda en manera larga.
- `currency`. Si el style es currency, entonces está propiedad requiere especificar el código de tres letras ISO (como USD o GNP) .
- `useGrouping`. Configurar esta propiedad a false si deseamos que los números no tengan separadores de mil.
- `minnimumIntegerDigitis`. Si se tienen menos números que esta cantidad, serán gregados a la izquieda con ceros. Por defecto es 0.
- `minimumFractionDigits`, `maximumFractionDigits`. Controlan el formato de la parte fraccional de un número. Si el número tiene menos digitos fracionales que el mínimo, estos serán agregados como 0 en la derecha, si tiene más que el máximo, el número será redondeado.
- `minimumSignificantDigits`, `maximumSignificantDigits`. Controlan el número de digitos significativos usados.

Una vez creado un objeto `Intl.NumberFormant`, con las opciones locales deseadas, es posible pasarle un número a su método `format()` el cual retorna un string con el formato apropiado.

Por ejemplo:

```js
let euros = Intl.NumberFormat("es", {style: "currency", currency: "EUR"});
euros.format(10);
```

El siguiente ejemplo, es ejemplo personal, para pesos chilenos:

```js
let pesos = Intl.NumberFormat("es-CL", {
    style: "currency", 
    currency: "CLP",
    currencyDisplay: "symbol",
    maximumFractionDigits: 0
});

let amount = pesos.format(1000);
console.log(amount);
```

El método `format()` pertenece al objeto, por lo que es posible asignar el método a una variable y usarlo como si este fuera una función aislada, por ejemplo:

```js
let data = [0.05, .75, 1];
let formatData = Intl.NumberFormat(undefined, {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigitis: 1
}).format;

data.map(formatData);
```

### Formateando Fechas y Horas

`Intl.DateTimeFormat()` toma dos argumentos: una localización o array de localizaciones y un objeto de opciones de formato. Y la manera que se usa una instancia de `Intl.DateTimeFormat()` es llamando su método `format()` para convertir el objeti `Date` a un string. La idea es que se pueda usar el objeto de opciones que especifique que campos de fecha y hora quisieramos presentar al usuario y como estos deben estar formateados.

Las opciones disponibles son las siguientes:

- `year`. numeric para año completo de cuatro digitos, 2-digit para una abreviación.
- `month`:
  - numeric: para la posibilidad de un número corto como 1
  - 2-digit: para una representación que tiene dos digitos
  - long: para un nombre completo como "January"
  - short: para una abrevición como "Jan"
  - narrow: para una abrbeviación como "J"

- `day`:
  - numeric: para una representación de uno o dos digitos
  - 2-digit: para una representación de dos digitos para día del mes
  
- `weekday`:
  - long: para un nombre completo como "Monday"
  - short: para una abreviación como "Mon"
  - narrow: para una abreviación como "M"

- `era`: Especifica donde una fecha debe ser formateado con una era como CE o BCE (Antes o después de Cristo). Los valores permitodos son "long", "short" y "narrow".

- `hour`, `minute`, `second`:
  - numeric: para una representación de uno o dos dígitos
  - 2-digit: para forzar una representación de 2 dígitos.

- `timeZone`: Esta propiedad especifica la zona para la cual la fecha debería ser formateada. Si se omite será usada la zona local. Se reconoce "UTC" y los nombres IANA como: "America/Los_Angeles"

- `timeZoneName`: Especifica como la zona horaria debería mostrarse.
  - long: para un nombre completo
  - shot: para una abreviación

- `hour12`: Es una propiedada boleana que especifica onde usar hora en formato 12-horas. El valor por defecto es dependiente de la localización.

- `hourCycle`: Esta propiedad permite especificar ya sea que la media noche sea escrita como 0 horas, 12 horas o 24 horas. hour12 tiene precedencia sobre esta propiedad.
  - h11: media noche es 0 y la hora anterior es 11pm
  - h12: media noche es 12
  - h23: media noche es 0 y la hora anterior es 23
  - h24: media noche es 24

Algunos ejemplos:

```js
let d = new Date("2020-01-02T13:14:15Z");

// Sin opciones, se optiene el formato generico
// => "1/2/2020"
Intl.DateTimeFormat("en-US").format(d)

// => "02/01/2020"
Intl.DateTimeFormat("fr-FR").format(d)

let opts = { weekday: "long", month: "long", year: "numeric", day: "numeric" };

// => "Thursday, January 2, 2020"
int.DateTimeFormat("en-US", opts).format(d);
```

También es posible especificar el calendario añadiendo `-u-ca-` al argumento de la localización seguido del nombre del calendario. Por ejemplo:

```js
let opts = { year: "numeric", era: "short" };
Intl.DateTimeFormat("en", opts).format(d);
Intl.DateTimeFormat("en-u-ca-iso8601", opts).format(d);
```

### Comparando Strings

El problema con los strings en orden alfabético, es que algunos idiomas tienen diferentes alfabetos, por lo que ordenar alfabeticamente puede se más complejo de lo que a simple vista parece.

Si se desea mostrar strings al usuario en un orden que ellos persivan como natural, no es suficiente usar `sort()` en un array de strings. En estos casos es conveniente crear un objeto `Intl.Collator`, el cual podremos pasar al método `compare()` que como el método `sort()` realiza un orden de los strings con una aproximación localizada.

`Intl.Collator()` toma dos argumentos, el primero especifica la localización, el segundo es un objeto cuyas propiedades especifican exactamente que tipo de comparación será hecha.

- `usage`: Especifica como el objeto `collator` será usado.
  - sort: Valor por defecto.
  - seach

- `sensitivity`: Especifica si el `collator`es sensible a mayúsculas y acentos cuando hace la comparación. Cuando la propiedad usage es sort, el valor por defecto es variant.
  - base: Ignora mayúsculas y acentos, considera solo letra base
  - accent: Considera los acentos en la comparación, pero ignora mayúsculas
  - case: Considera mayúsculas, pero ignora acentos.
  - variant: Considera acentos y mayúsculas. Comparación estricta.

- `ignorePuntuation`: Configurar esta propiedad hace que se ignore la puntuación cuando se comparan strings. Con esta propiedad como true los strings "any one" y "anyone" son considerados igual.

- `numeric`:
  - true: Si los strings a comparar son enteros o contienen enteros y se desea ordenarlos en un orden numerico en lugar de alfabético. Por ejemplo "Version 9" deba ir antes que "Version 10".

- `caseFirst`: Especifica que tipo de letra debe ir primero. El valor por defecto depende del lugar.
  - upper: Las mayúsculas deben ordenarse primero
  - lower: las minúsculas deben ordenarse primero

Una vez creado el objeto `Intl.Collator` y las opciones deseadas, se usa el método `compare()` para comparar dos strings. Este método retorna un número. Si el valor retornado es menor a cero, el primer string va primero, si el valor retornado es mayor a cero, el primer string va después del segundo. Si `compare()` retorna cero, entonces los dos strings son iguales en lo que concierne al objeto `Collator`.

`Int.Collator` atomaticamente une el método `compare()` a su instancia, de modo que es posible pasarlo directamente a `sort()` sin tener que escribir una función contenedora e invocarlo a través del objeto `Collator`.

Aquí unos ejemplos:

```js
const collator = new Intl.Collator().compare;
["a", "z", "A", "Z"].sort(collator);

const filenameOrder = new Intl.Collator(undefined, {numeric: true }).compare;
["page10", "page9"].sort(filenameOrderr);

const fuzzyMatcher = new Intl.Collator(undefined, {
  sensitivity: "base",
  ignorePunctuation: true,
}).compare;
let strings = ["food", "fool", "Føø Bar"];

// => 2
strings.findIndex(s => fuzzyMatcher(s, "footbar") === 0)
```

Algunos lugares tienen más de un posible orden, por ejemplo, en España antes de 1994 "ch" y "ll" eran tratadas como letras individudales. Ese tipo de variantes no puede ser seleccionadas a traves de `Intl.Collator`, pero pueden ser añadidas pasado `-u-co-` a string de localización y añadiendo el nombre de la variante deseadaa. Por ejemplo:

```js
// Antes de 1994 CH y LL era tratadas como letras separadas en España
const modernSpain = Int.Collator("es-ES").compare;
const traditionalSpanish = Intl.Collator("es-ES-u-co-trad").compare;
let palabras = ["luz", "llama", "como", "chico"];
palabras.sort(modernSpanish);
palabras.sort(traditionalSpanish);
```

## La API Console

La API de consola define un número de funciones útiles. Esta API no es parte de ningún ECMAScript estandar, pero es soportada por navegadores y por Node.

La API console define las siguentes funciones:

- `console.log()`: Convierte sus argumentos a strings y los muestra en consola. Incluye espacios entre argumentos y comienza una nueva línea después de imprimir todos los argumentos.
  
- `console.debug()`, `console.info()`, `console.warn()`, `console.error()`: Funciona casi identicamente a `console.log()`. En Node, se envía el `stderr` stream en lugar de `stdout`. El resto de las funciones son alias de `console.log()`. En navegadores, podría haber algún ícono como prefijo.

- `console.assert()`: Si su primer arugmento es verdadero, entonces esta función no hace nada, pero si es falso o algun `falsy` value entonces los argumentos restanes serán imprimidos como si ellos hubieran sido pasados a `console.error()` con `Assertion falied` como prefijo. No se lanza una excepción.

- `console.clear()`: Limpia la consola cuando eso es posible.

- `console.table()`: Intenta mostrar sus argumentos de forma tabular.

### Salida formateada de consola

Si el primer argumento es un string y ese string incluye `%s`, `%i`, `%d`, `%f`, `%o`, `%O` o `%c`, entonces este primer argumento es tratado como un `format string` y los valores de los argumentos subsecuentes serán sustituidos en el string en el lugar de las secuencias anteriores.

- `%s`: Argumento convertido a string.
- `%i` y `%d`: Argumentos convertidos a números y truncados como enteros.
- `%f`: El argumento es convertido a número
- `%o` y `%O`: El argumento es tratado como un objeto y los nombres de las propiedades y valores son mostradas. La variante en mayúsculas se muestra dependiendo de la implementación.
- `%c`: En navegadores este argumento es interpreatado como un string de CSS y es usado para dar estilo al texto que sigue (hasta la siguiente `%c` o hasta el final del string). En Node, es ignorado.

Notar que no es a menudo necesario usar `format string` con funciones de consola, es usualmente fácil obtener salidas claras simplemente pasado uno o más valores a la función.
