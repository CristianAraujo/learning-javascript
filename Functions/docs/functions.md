# Funciones

## ¿Qué son las funciones?

Las funciones son bloques de código que se definen una vez otorgandoles un identificador, por lo que pueden ser ejecutadas o invocadas varias veces. Una definición de función puede incluir una lista de identificadores conocidos como parámetros.

Para hacer uso de una función debemos invocarla, entregandole los argumentos que la función requiere. Cada invocación de una función tiene sus propios valores para sus argumentos.

Las funciones son objetos, por lo que se pueden configurar propiedades o invocar métodos en ellas como cualquier otro objeto.

La definición de funciones puede estar anidada en otras funciones. Las funciones anidadas pueden acceder a las variables en las cuales están definidas.

---

## Definición de funciones

Las maneras de definir funciones son las siguientes.

- Con la palabra clave `function`, como una declaración.
- Con la palabra clave `function`, como una expresión.
- Como funciones flecha o `arrow functions`.

>JavaScript define algunos tipos de funciones especialiazdas, como las funciones generadores que se definen como `function*` y las funciones asíncronas que se defienen como `async function`.

### Declaración de funciones

La declaración de funciones consiste en la palabra clave `function` seguida de los siguientes componentes:

- **Un identificador como nombre de la función**. Es usado como nombre de variable, la cual es definida al declarar la función y la cual se le asigna el objeto de la función.
- **Un par de paréntesis alrededor de una lista de cero o más identificadores**, los identificadores son los nombres de los parámetros de la función, los cuales se comportarán como variables locales de la función.
- **Un par de llaves con cero o más sentencias dentro**, las llaves se usan para delimitar el cuerpo de la función.

Ejemplo de definición de una función:

```js
// Funciónque imprime las propiedades de un objeto
function printprops(o) {
    for (let prop in o) {
        console.log(`${prop}: ${o[prop]}\n`);
    }
}

// Función que calcula la distancia entre dos puntos
function distance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
}
```

Debemos considerar que **el nombre de una función es una variable que contiene el objeto función**. Es decir, una declaración de función define una variable y asigna el objeto de la función a ella. En la declaración de funciones, estas son elevadas `hoisted` al comienzo del script, por lo cual este tipo de funciones puede ser invocada antes de la aparición de su definición.

**Sentencia return**  
Las funciones pueden o no contener una sentencia `return` la cual sirve para retornar un valor desde la función a su llamador. Cuando se encuentra con una sentencia `return`, inmedatamente se termina la ejecución de la función devolviendo el control del programa a su llamador.

La sentencia `return` no es obligatoria. Sin embargo todas las funciones retornan algo. Cuando no existe la sentencia `return` se hace un retorno implicíto de un valor `undefined`.

**Las funciones tienen alcance de bloque**  
En `ES6` en `strict  mode`, las funciones tienen un alcance de bloque, por lo que solo son visibles dentro del bloque en el cual fueron definidas.

### Funciones expresadas

Una función expresada, es aquella que aparece dentro de un contexto de una expresión o sentencia. Su nombre es opcional. Las funciones expresadas no declaran una variable. Declarar una variable o una constante a la cual asignar la función depende del programador. Es una buena práctica usar `const` para asignar funciones expresadas, esta manera evitar sobreescribir el valor si de crean con let.

Si una función expresada tiene nombre, este se convierte en una variable local dentro de la función y se realiza un `binding` del nombre al objeto de la función.

Las funciones expresadas no son elevadas `hosting` como las funciones declaradas, por que estas funciones no existen hasta que al expresión que las define es evaluada, por lo que no se puede invocar una función expresada antes de que se asigne a una variable.

```js
// Función expresada asignada a una constante
const square = function (x) { return x*x; };

// Función expresada que incluye nombre. Es útil para la recursión
const f = function fact(x) {
    (x <= 1) ? 1 : x * fact(x - 1);
};
```

Las funciones expresadas también pueden ser argumentos de otras funciones:

```js
[3, 2, 1].sort(function (a, b) { return a - b; });
```

También existen las funciones **autoinvodas** que se ejcutan inmediatamente, en este caso este tipo de funciones expresadas se rodea por paréntesis:

```js
let tensquared = (function (x) { return x*x; }(10));
```

### Arrow functions

Desde `ES6` se dispone de una sintaxis compacta para la creación de funciones. De forma general, una `arrow function` es un lista de parámetros separados por comas entre parentesis, seguidos por una flecha `=>`, seguida por el cuerpo de la función entre llaves:

```js
const sum = (x, y) => { return x + y; };
```

Si el cuerpo de la función es una sola sentencia, es posible omitir la sentencia return y las llaves. Además si solo se recibe un parámetro es posible omitir los paréntesis:

```js
// Función que solo tiene una sentencia, se omite return y llaves.
const sum = (x, y) => x + y;

// Función que solo recibe un parametro se omiten los parentesis
const polynomial = x => x*x + 2*x + 3;
```

Las funciones que no reciben argumento deben conservar los parentesis:

```js
const constante = () => 42; 
```

Si el cuerpo de una función flecha tiene solo una rensencia `return` la cual retorna un objeto literal, entonces se debe poner el objeto entre parentesis si se omite la sentencia return para evitar confusiones entre las llaves del objeto y las que delimimtan el cuerpo de la función.

Los siguientes ejemplos muestran como debe ser la sintaxis para una sentencia `return` única que retorne un objeto literal:

```js
const f = x => { return { value: x }; };
const f = x => ( { value: x } );
```

Los siguientes ejemplos entregarian un error:

```js
// La siguiente función no retorna nada
const h = x => { value: x };

// Error de sintaxis
const i = x => { v: x, w: x }; 
```

Una particularidad es que **las funciones flecha heredan el valor de this desde el ámbito en cual ellas son definidas** no desde cual son llamadas. Además, no tienen una propiedad `prototype, por lo que no puede ser usadas como funciones constructoras para clases.

La sintaxis consisa de las funciones flecha las hace ideales para pasarlas como parámetros a otras funciones:

```js
// Filtra los valores diferentes a null
let filetered = [1, null, 2, 3].filter(x => x !== null);

// Calcula el cuadrado de los números de una array
let squares = [1, 2, 3, 4].map(x => x*x);
```

### Anidamiento de funciones

Las funciones puede ser anidadas dentro de otras funciones, las funciones interiores podrán acceder a las variables locales de la función en la cual están anidadas.

```js
function hypotenuse(a, b) {
    function square(x) { return x*x; }
    return Math.sqrt(square(a) + square(b));
}
```

---

## Invocar funciones

El código de las funciones no se ejecuta hasta que la función sea invocada. En JavaScript las funciones pueden ser invocadas de 5 maneras:

1. Como funciones
2. Como métodos
3. Como constructores
4. Inderectamente a través de llamadas con `call()` y `apply()`
5. Implicitamente, a través de características del lenguaje

### Invocación como funciones

Consiste en una expresión de una función que es evaluada a un objeto de funcón, seguido por parentesis, entre los cuales se encuentra una lista de argumentos separados por comas.

```js
let total = distance(0, 0, 2, 1) + distance(2, 1, 3, 5);
let probability = factorial(5) /  factorial(13);
printprops({ x: 1 });
```

En una invocación, cada argumento de la función es evaluado, por lo que los argumentos pueden ser expresiones válidas en JavaScript.

```js
// El tercer argumento se evalua antes de pasar su valor a la función.
let total = suma(2, 3, x + 9);
```

Si una función no tiene una sentencia `return` esta retorna el valor `undefined`, si existe la sentencia `return`, el valor que sigue a `return` será el valor retornado, si no existe dicho valor, `return` devolverá `undefined`.

**Invocación condicional**  
La invocación condicional es...

**Contexto de invocación**  
Para una invocación sin `strict mode`, el contexto de una función, es decir el valor de `this`, es el objeto global. Para invocaciones en `strict mode`, el contexto de invocación es `undefinded`.

Las funciones flecha, se comportan diferente, y siempre hereda el valor de `this` desde donde fueron definidas.

Las funciones escritas para ser invocadas como funciones (y no como métodos), generalmente no usan `this`, esto solo podría usarse para determinar si se está ejecutando `strict mode`.

### Invocación como métodos

Un método es una función en JavaScript que es almacenada como una propiedad en un objeto.

```js
// Se crea un objeto
let o = {}

// Se crea una función
const f = function (x) { return x*x; };

// Se almacena la función en la propiedad m del objeto o
o.m = f;

// Se llama la función como método del objeto o
let squaretwo = o.m(2);
```

**Contexto de invocación**  
Las funciones invocadas toman como su contexto de invocación el objeto sobre el cual están siendo invocadas, por lo que, en el ejemplo anterior, el contexto de invocación sería el objeto o. Dentro del cuerpo de la función podemos referirnos al conexto de invocación usando `this`.

```js
let calculator = {
    operand1: 1,
    operand2: 2,
    add () {
        this.result = this.operand1 + this.operand2;
    }
};

calculator.add();
let resultado = calculador.result;
console.log(resultado);
```

La invocación de funciones como métodos usan la notación de punto más de forma más habitual, pero también pueden usar corchetes:

```js
let o = {
    prop1: 5,
    prop2: 2,
    m (x, y) {return (this.prop1 + this.prop2) / (x + u)}
}

// Otra manera de escribir o.m(2,1)
let result = o['m'](2, 1);

// También se usa invocación al método asumiendo que o[2] es una función
let a = o[2](1,1)
```

**Objeto como parámetro implícito**  
Cualquier función que es llamada como método, se le es pasada implícitamente el objeto sobre el cual es llamada, así llamados como el siguiente pueden ejecutarse:

```js
const rect = {
    width: 0, 
    height: 0,
    setSize (width, height) {
        this.width = width;
        this.height = height;
    }
}

// El objeto rect, se pasa a si mismo como argumento implícitamente
rect.setSize(4, 3);

// En caso que se llame como función, se debe pasar el objeto de manera explicíta, como se ve en la siguiente función, donde el primer argumento es un objeto llamado circle
calcArea(circle, 2);
```

**Encadenamiento de métodos**  
Ya que los métodos retornan objetos, se pueden usar estos valores de retorno como valores de entrada para la subsecuente invocación:

```js
new Square().x(100).y(100).size(50).outline('red').fill('blue').draw();
```

Cuando se escriben métodos que no retornan un valor por si mismos, considerar que el método retorne `this`.

**Uso de this**  
`this`es una palabra clave, no una variable. JavaScript no nos permite asignarle un valor a `this`. `This` no tiene el mismo ámbito que las variables tienen dentro de una función. Si una función aninada es invocada como método, el valor de `this` será el objeto desde donde fue invocada. Si una función anidada es invocada como función, el valor de `this` será o el objeto global (sin strinc mode) o undefined (en strict mode).

Es un error común asumir que las funciones anidadas definidas dentro de un método e invocadas como funciones pueden usar `this` para obtener el contexto de invocación del método.

```js
let o = {
    m: function () {
        let self = this;

        // Verdadero, this se refiere al objeto o
        this === o;
        f();

        function f() {
            // Falso. This es global o undefined ya que esta función anidada es llamada como función no como método, por lo que pierde el contexto de invocación.
            this === o;

            // Verdadero, self almacena el valor de this de la función contenedora
            self === o;
        }
    }
};

o.m();
```

Si convertimos la función anidada `f()` a una función flecha, esta heredará el valor de `this` del contexto de donde fue definida:

```js
let o = {
    m: function () {
        let self = this;

        // Verdadero, this se refiere al objeto o
        this === o;
        f();

        const f = () => {
            // Verdadero, una función flecha hereda el valor de this desde donde es definida
            this === o;
        }
    }
};

o.m();
```

Otra manera de lograr que una función anidada invocada como función herede el valor de `this` es invocar el método `bind()`

```js
const f = (function() {
    this === o // true, since we bound this function to the outer this
}).bind(this);
```

### Invocación como constructores

Si una invocación de una función o método es precedido por la palabra clave `new`, entonces se trata de una invocación de un constructor.

La invocación de funciones como constructores difiere de las invocaciones como méotod o funciones en el manejo de argumentos, contexto de invocación y valor de retorno.

Es posible omitir los parentesis de la invocación si no se pasan agumentos. Las siguientes invocaciones son equivalentes:

```js
const o = new Object();
const p = new Object;
```

Una invocación de un constructor crea un nuevo objeto vacío que hereda del objeto especificado por la propiedad `prototype` del constructor. Este nuevo objeto vacío utilizará como contexto de invocación a su constructor, así `this` apuntará a su función constructora, incluso si es una invocación como método:

_pruebas del siguiente código_:

```js
const o = {
    m: function Person(name, age) {
        return this.name;
    }
};

new o.m('Camila', 22);
```

Las funciones constructoras no usan normalmente la palabra reservada `return`, ellas tipicamente inicializan un nuevo objeto y retornan este nuevo objeto implicitamente cuando encuentran el final de su cuerpo. Si el constructor usa un `return` sin valor o con un valor primitivo, entonces será ignorado, retornando el nuevo objeto.

### Invocación indirecta de funciones

Las funciones al ser objetos, tienen métodos, dos de estos métodos, `call()` y `apply()` invocan la función directamente, permitiendo especificar el valor de `this` para la invocación. Lo que significa que podemos invocar cualquier función como un método de cualquier objeto, incluso de no es un médoto de ese objeto.

`call()` usa su propia lista de argumentos como argumentos de la función, mientras que `apply()` espera un array con valores para ser usados como argumentos.

### Invocación implicita de funcicones

Las propiedades del lenguaje pueden invocar funciones de manera implicita, como los siguientes casos:

- Si un objeto tiene `getters` o `setters`, entonces obtener o configurar el valor de las propiedades asociadas llamaria a estos respectivos métodos.
- Cuando un objeto es usado en un contexto de un string, su método `toString()` es llamado
- Cuando se itera sobre objetos iterables, hay varias llamadas a métodos que ocurren para cumplir con el protocolo de iteración.

---

## Argumentos y parámetros de funciones

Los parámetros de una función son aquellos identificadores en la definición de la función, mientras que nos referimos a los argumentos como aquellos valores que son entregados a la función cuando esta es invocada.

La definición de funciones en JavaScript no nos permite especificar el tipo de datos de los parámetros esperados por la función ni tampoco podemos chequear el número de argumentos que fueron pasados.

### Parametros opcionales y por defecto

Cuando se pasan menos argumentos que los declarados como parámetros, los parámetros adicionales son configurados a sus valor por defecto que normalmente es `undefined`.

```js
function getPropertyNames(o, a) {
    // Si no se pasa el parámetro para a, se configura un array vacio
    if(a === undefined) a = [];
    for (let property in o) a.push(property);
    return a;
}

let o = { x: 1 }, p = { y: 2, z: 3 };
let a = getPropertyNames(o);
getPropertyNames(p, a);
```

**Parámetros opcionales**  
Cuando diseñamos funciones con argumentos opcionales, debemos asegurarnos que estos esten al final de la lista de argumentos, ya que los primeros no pueden ser omitidos, si los ubicamos al comienzo, y deseamos omitirlos, deberíamos asignarles explicitamente un valor de `undefined`.

**Parámetros por defecto**  
El valor para parámetros por defecto es asgnado directamente en la lista de parámetros de la función.

```js
// Función con parametros por defecto
function getPropertyNames(o, a = []) {
    for(let property in o) a.push(property);
    return a;
}
```

Las expresiones asignadas a los parámetros por defecto son evaludas cuando las funciones son llamadas, no cuando son definidas, así en el ejemplo anterior, cada vez que la función es llamada se creará un array vacio.

Es posible usar variables, funciones o cualquier valor a computar como valor de los parámetros por defecto, también es posible usar el valor del paramétro previo para definir el valor de los parámetros por defecto.

```js
// Se usua el valor del primer parámetro para calcular el segundo
const rectange = (width, height=width*2)
```

### Resto de parámetros y variable length en la lista de argumentos

Resto de parámetros nos permite crear funciones que se puedan invocar con un número arbitrario de argumentos mayor a los parametros declarados. Para esto usamos la notación de tres puntos seguida del nombre del identificador al que se le asignarán los parametros variables.

```js
function max(fist=-Infinity, ...rest) {
    let maxValue = firts;
    for (let n of rest) {
        if (n > maxValue) { maxValue = n; }
    }
    return maxValue;
}

max(1, 10, 110, 2, 3, 1000, 4, 12);
```

El parametro con argumentos variables debe ser definido como el último de la lista. Los primeros argumentos se irán asignando a los primeros parámetros hasta que sean pasados más argumentos de los parámetros definidos; los argumentos restantes serán almacenadoso en un array, que será el valor del parámetro que expera un numero variable de argumentos.

Dentro del cuerpo de la función, el parámetro que almacena el número variable de argumentos siempre será un array, el array podría encontrarse vacío, pero nunca tendrá un valor de `undefined`.

Las funciones de este tipo son llamadas `variadic function`, `variable arity functions`, o `vararg funtions`. Se prefiere `vararg` coloquialmente.

No confundir `...` cuando se usa como `spread operator` que cuanod se usa para indicar parámetros variables en una definición de función.

### El objeto argumentos

`ES6` introdujo los parametros variables, anttes las funciones que recibian parametros variables debian usar el `Arguments Objetct.

Dentro del cuerpo de la función el identificador `arguments` se refiere al objeto de argumentos para esa invocación. Este objeto es un `array-like` que nos permite pasar valores a una función y recibirlos por números en lugar de por nombre.

```js
function max (x) {
    let maxValue = -Infinity;
    for (let i = 0; i < arguments.length; i++){
        if(arguments[i] > maxValue) maxValue = arguments[i];
    }
    return maxValue;
}

max(1, 10, 1000, 2, 3, 300, 49);
```

Este objeto data de los primeros tiempos de JavaScript y ya no debería ser usado.

### Spread operator en las llamadas a funciones

`Spread operator` no es un operador en realidad en el sentido que no puede evaluar operandos para producir un valor. 

Cuando usamos la sintaxis de tres puntos `...` en la definición de funciones obtenemos que los valores de los argumentos se estructuren dentro de una array, efecto opuesto que cuando hacemos la invocación en donde los elementos se dispersan como argumentos individuales en la llamada a la función.

```js
let numbers = [2, 4, 5, 6, 10, -1, 100, 101];

// Spread operator produce que los elementos del array sean entregados como argumentos individuales en la llamada a la función.
let min = Math.min(...numbers)

// En la definición de la función todos los argumentos pasados serán dispuestos dentro de un array.
function max (...nums) { return Math.max(nums) }
```

### Destructurar argumentos de funciones en parámetros

La destructuración consiste en declarar una función preparada para recibir un array u objeto, y luego poder usar los elememtos de estas estructuras dentro del cuerpo de la función como variables individuales.

**Destructuración de arrays**  
Si se declara una función que tiene los nombres de los parámetros entre corchetes, le estamos diciendo a la función que se espera recibir un array por cada par de corchetes. Los elementos del array serán desempaquetados en cada nombre de parámetro individualmente. Por ejemplo:

```js
// La función espera recibir 2 arrays
function vectorAdd([x1, y1], [x2,y2]) {
    // Cada elemento de los arrays se puede usar como variable individual dentro del cuerpo de la función
    return [x1 + x2, y1 + y2];
}

vectorAdd([1,2], [3,4])
```

**Destructuración de objetos**  
Si se define una función que espera un objeto, es posible destructurar las propiedades de ese objeto encerrando los nombres de los parametros de la función entre llaves:

```js
function vectorMultiply({x, y}, scalar) {
    return { x: x*scalar, y: y*scalar };
}

vectorMultiply({x: 1, y: 2}, 2);
```

La sintaxis puede ser más verbosa cuando se necesita destructurar propiedades que tienen un nombre en parametros con un nombre diferente:

```js
function vectorAdd( { x: x1, y: y1 }, { x: x2, y: y2 } ) {
    return { x: x1 + x2, y: y1 + y2 };
}

vectorAdd({ x: 1, y: 2 }, { x: 3, y: 4 });
```

En desestructuraciones como `{ x: x1, y: y1 }`, los nombres de las variables van siempre a la izquierda, mientras que el valor a la derecha. Al invocar la función los valores de los argumentos serán asignados a los parámetros cuyos nombres coincidan.

Cuando los parámetros no tienen un nombre definido, las asignaciones de la destructuración se realizan por posición.

Tambien es posible definir parametros por defecto en conjunto con paramtros desectructurados:

```js
// {x, y} espera un objeto a destructurar mientras z usa un valor por defecto
function vectorMultiply({ x, y, z=0 }, scalar) {
    return { x: x*scalar, y: y*scalar, z: z*scalar };
}

vectorMultiply({x: 1, y: 2}, 2);
```

**¿Paso de parametros por nombre del modo `name=value`?**  
Algunos lenguajes como Python permiten llamar a funciones invocandolas con argumentos especificados como `name=value`. JavaScript no permite esto, pero podemos aproximarnos con la destructuración de un objeto en los parámetros de una función.

```js
function arraycopy({from, to=from, n=from, fromIndex=0, toIndex=0}) {
    let valuesToCopy = from.slice(fromIndex, fromIndex + n);
    to.splice(toIndex, 0, ...valuesToCopy);
    return to;
}

let a = [1,2,3,4,5], b = [9,8,7,6,5];
arraycopy({from: a, n: 3, to: b, toIndex: 4});
```

**Destructuración de arrays y parametro `rest`**  
Cuando se desestructura un array, es posible definir un parámetro `rest` para los valores extra dentro de la array que estan siendo desenpaquedados, pero que no son usados por la destructuración.

```js
function f([x, y, ...coords], ...rest) {
    return [x+y, ...rest, ...coords];
}

// Devuelve [3,5,6,3,4], ya que suma los dos primeros valores, luego son usados los valores fuera de la destructuración y finalmente se usan los valores restantes que participan en la destructuración.
f([1,2,3,4], 5,6);
```

**Destructuración de objetos y parámetro `rest`**  
Desde `ES2018` es posible usar un parámetro `rest` cuando se destructura un objeto. El valor del parámetro `rest` será un objeto que tiene cualquier propiedad que no fue usada por la destructuración.

```js
// Multiplica el vector {x,y} o {x,y,z} por un valor escalar y retiene las propiedades
function vectorMultiply({ x, y, z=0, ...props }, scalar) {
    return { x: x*scalar,  y: y*scalar, z: z*scalar, ...props};
} 

let result = vectorMultiply({ x: 1, y: 2, w: -1 }, 2)
console.log(result);
```

**Destructuring complejo**  
También es posible desestructurar arrays de ojetos, objetos que tengan arrays como propiedades, objetos que tengan objetos como propiedades; escencialmente cualquier profundidad.

```js
function drawCircle({ x, y, radius, color: [r, g, b]}) {
    // Implementar
}
```

Se debe tener en cuenta, que aunque puedan hacerse destructuraciones complejas, el código simple de comprender es más fácil de mantener.

### Tipos de argumentos

JavaScript no cuenta con un método para comprobar los tipos de datos que son pasados a una función. Es mejor para nuestro programa que una función falle inmediatamente y predeciblemente cuando le pasamos tipos que no espera, que ejecutar la función y esta falle despés con un mensaje de error que no es claro.

```js
function sum(a) {
    let total = 0;
    for (let element in a) {
        if (typeof element !== 'number') {
            throw new TypeError("sum(): elements must be numbers");
        }
        total += element;
    }
    return total;
}
```

En el ejemplo anterior, la función comprueba al inicio el tipo de datos para un mejor manejo de errores.