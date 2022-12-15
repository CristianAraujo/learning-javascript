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

---

## Funciones como valores

Las funciones no solo son sintaxis para declarar bloques de código ejecutable, también son valores, por lo que podemos tratarlos como tal, pasandolas como parámetros a otras funciones, asignarlas a variables, almacenarlas en propiedades de objetos o como elementos de una array, etc.

Por ejemplo:

```js
// Creación de una función declara una variable y asigna el objeto función a dicha variable
function square (x) { return x*x; }

// Podemos asignar la función a otra variable
let s = square;
square(4);
s(4);

// Es posible tambien asignar funciones como propiedades de objetos
const obj = {
    square: function (x) { return x*x; }
};

let r = obj.square(4);

// Asignación de funciones como elementos de un array
let arr = [1, 2, square];

// Se guarda una función anónima como elemento de un array
let sqr = [x => x*x, 2];

// Se llama a la función almacenada en el primer elemento, y se pasa como argumento el valor almacenado en el segundo elemento.
let res = sqr[0](sqr[1]);
```

Un ejemplo de uso de funciones como valores es `Array.sort()`. Esta función para cualesquiera dos valores pasados, retorna el valor que deberia ubicarse primero en un array ordenado.

**Ejemplo de funciones como valores**  
Un ejemplo de funciones usadas como valores, considerar:

```js
function add(x, y) { retun x + y; }
function substract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function division(x , y) { return x / y; }

// Se define función operate que usa las funciones anteriores como valores
function operate(operator, operand1, operand2) {
    return operator(operand1, operand2);
}

// Invocamos la función para que compute (2+3) + (4*5)
let i = operate(add, operate(add, 2,3), operate(multiply(4,5)));
```

Para el ejemplo anterior también es posible definir las funciones como valores que forman parte de un objeto literal.

```js
let operators = {
    add: (x, y) => x + y,
    substract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    division: (x, y) => x / y,
    pow: (x, y) => Math.pow(x, y)
}

function operate(operation, operand1, operand2)  {
    if (typeof operate[operation] === 'function') {
        return operators[operation](operand1, operand2);
    } else {
        throw "Operador desconocido";
    }
}

operate("pow", 10, 2);
operate("add", "hello", "world");
```

### Definir propiedades propias para funciones

Las funciones no son un tipo primitivo en JavaScript, son un tipo especializado de objetos, por lo que pueden tener propiedades.

**Ejemplo de uso y creación de propiedades de funciones**  
Por ejemplo, si necesitamos que un valor sea estático y persista entre las invocaciones de cada función, podemos crear una propiedad que pertenesca al objeto función en si.

```js
// Definimos una propiedad sobre el objeto uniqueInteger que corresponde a un objeto function
uniqueInteger.counter = 0;

// Hacemos que la función retorne el valor de su propiedad
function uniqueInteger () {
    return uniqueInteger.counter++;
}

uniqueInteger();
uniqueInteger();
```

Otro, ejemplo, considerar la siguiente función `factorial()` que usa una de sus propiedades para almacenar sus resultados parciales.

```js
function factorial(n) {
    if (Number.IsInteger(n) && n > 0) {
        if (!(n in factorial)) {
            factorial[n] = n * factorial(n - 1);
        } 
        return factorial[n];
    } else {
        return NaN;
    }
}

factorial[1] = 1;
factorial(6);
factorial[5];
```

---

## Funciones como Namespaces (Espacio de nombres)

Las variables declaradas dentro de funciones solo son visibles dentro de la función, por lo que su ámbito es el cuerpo de la función. Decimos que la función crea un espacio de nombres propio. Esto es útil cuando usamos un fragmento de código en muchos lugares, podemos poner este código dentro de una función para evitar conflictos de nombres.

```js
function space() {
    // Definición de variables con ámbito de función
}

space();
```

En el ejemplo anterior, la creación de la función define una variable en el programa. Podemos crear una función autoinvocable que no cree ninguna variable:

```js
(function(){
    // Definición de variables con ámbito de función
}());
```

El uso de funciones como espacio de nombres es muy útil cuando se definen funciones que pueden usar este espacio de nombres de su función contenedora.

## Closures

JavaScript usa `lexical scoping`, lo que significa que las funciones son ejecutadas usando el ámbito de variables en cual fueron definidas, no el ámbito de variables en el cual ellas son invocadas. Además, el estado interno del objeto función  no solo contiene el código, sino que también una referencia al ámbito en el cual la función fue definida.

Esta combinación de un objeto función y un ámbito en el cual las variables de la función son resueltas es llamado `closure`.

Los clousores son interesantes cuando son invocacos en un ámbito diferente al cual fueron definidos, esto sucede comunmente cuando un objeto de una función anidada es retornado por la función en el cual esta fue definida.

El primer paso para comprender como funcionan los `closures`, es comprender como se comporta el ambito de variables.

```js
let scope = "global scope";
function checkscope() {
    let scope = "local scope";

    // Función retorna el valor de la variable scope
    function f() { return scope; }

    // Se retorna el objeto función
    return f;
}

let s = checkscope();
```

En el ejemplo anterior, al invocar a la función, esta conserva el ámbito en donde fue definida y no donde es invocada, por lo que el valor de la variable scope será "local scope", que es el valor de la variable interna de la función.

Lo útil de los closures es que capturan el ámbito de la función, las variables locales y parámetros, pudiendolos usar como estados privados respecto a fuera de la función.

```js
let uniqueIdentifier = (function() {
    let counter = 0;
    return function() { return counter++; }
}());

uniqueIdentifier()
uniqueIdentifier()
```

En el ejemplo anterior vemos que el retorno de la función externa es un objeto función, al llamar a la función externa recibimos ese objeto que es asignado a la variable `uniqueInteger`. Para obtener el valor de `counter` debemos invocar el objeto función recibido en `uniqueInteger`, por lo que se agregan los parentesis de invocación. La función anidada tiene acceso al ámbito de variables de la función externa, por lo que podemos usar sin problemas la variable `counter`.

Es perfectamente posible tener dos o más funciones anidadas en una misma función contenedora.

```js
function counter() {
    let n = 0;
    return {
        count: function() { return n; },
        reset: function() { n = 0; },
    };
}

let c = counter(), d = counter();
c.count();
d.count();
c.reset();
c.count();
d.count();
```

En el ejemplo anterior, los dos métodos comparten acceso a la variable privada `n`. Cada invocación de la función `counter` crea un nuevo ámbito de variables independiente de las invocaciones previas, y una nueva variable privada `n` en ese ámbito.

Es posible combinar esta técnica con propiedades `setters` y `getters`. Por ejemplo:

```js
function counter(n) {
    return {
        get count() { return n++; },
        set count(m) { 
            if (m > n) { n = m; }
            else { throw Error("count debe ser mayor"); }
        }
    };
}

let c = counter(1000);
c.count;
c.count;
c.count = 2000;
c.count = 2000;
```

La función anterior define una variabl local n, la cual es un parámetro de la función, pero sabemos que los parámetros son variables locales dentro de la función, por lo cual podemos manipularla. La función retorna un objeto con dos propiedades, cada propiedad contiene como valor una función, las cuales pueden acceder al ámbito donde fueron definidas, es decir al ámbito de la función `counter`.

Veamos el siguiente ejemplo:

```js
function addPrivateProperty(o, name, predicate) {
    // El valor pertenece a la función, esta propiedad no formará parte del objeto.
    let value;

    // Crea una propiedad en el objeto o, que es recibido como argumento, esta propiedad recibe un nombre luego de evaluar la expresión entre [] y almacena una función.
    o[`get${name}`] = function() { return value; };

    // Crea una propiedad en el objeto o, que es recibido como argumento, esta propiedad recibe un nombre luego de evaluar la expresión entre [] y almacena una función, que invocarla recibe un argumento.
    o[`set${name}`] = function(v) {
        if (predicate && !predicate(v)) { 
            throw new TypeError(`set${name}: invalid value ${v}`);
        } else {
            value = v;
        }
    };
}

let a = {};

// Dentro de la función a será el objeto al cual se le agregen las propiedades que almacenan funciones, "Name" evaluará la expresión para los nombres de las propiedades.
addPrivateProperty(a, "Name", x => typeof x === "string");

// Se llama a la función que se ha agregado al objeto, esta función, hará que el valor de la variable de la función sea configurada con el valor pasado como argumento.
a.setName("Loreto");
a.getName();

// Debido a la comprobación, no es posible para esta propiedad, asignarle valores que no sean strings.
a.setName(0);
```

>El ejemplo anterior es interesante. Se encuentra en la página 208 del libro JavaScript Definitive Guide. Como duda al respecto: ¿El argumento `name` se evalua dentro de la función de la segunda propiedad, aunque esta función no haya sido invocada?

Es immportante reconcer cuando los `closures` comparten variables que no deberian compartir de manera inadvertida. Por ejemplo:

```js
// La función constfunc retorna la función flecha () => v
function constfunc(v) { return () => v; } 

// Creamos una array que contendrá funciones
let funcs = [];

for(var i = 0; i < 10; i++) { 
    // cada iteración guardará una función del tipo () => i, por ejemplo () => 2, siempre se retornará una constante
    funcs[i] = constfunc(i);
}

// Al acceder a un elemento del array tendremos una función, en este caso se tendrá la función () => 5. Si agregamos los paréntesis, se invocará la función, devolviendo el valor 5.
funcs[5]();
```

Cuando trabajamos con código como el anterior, creamos múltiples `closures` usando un bucle, es un error común tratar de mover el bucle dentro de la función que define los `closures`.

```js
function constfuncs() {
    let funcs = [];
    for (var i = 0; i < 10; i++) {
        funcs[i] = () => i;
    }
    return funcs;
}

let funcs = constfuncs();

// Su resultado será 10.
funcs[5]();
```

El códido anterior crea 10 `closures` y los almacena dentro de un array. Los `closures` son todos definindos en la misma invocación de la función, por lo que, ellos comparten el acceso a la variable i. Cuando la función `constfuncs` retorna, la variable i tiene el valor de 10, así todos los `closures` comparten ese valor.

Es importante recordar que el ámbito asociado con un closure es vivo. Las funciones anidadas no crean copias privadas de este.  

En el ejemplo anterior, el bucle declara la variable i con `var`, por lo que la variable i se encontrará definida con un ámbito de función en lugar de estar limitada al ámbito del bucle. Si reemplazamos `var` con `let` o `const`, solucionamos el problema, ya que `let` y `const` tienen crean identificadores con ámbito de bloque, por lo que cada iteración crearía un ámbito de bloque nuevo e independiente de los ámbitos de otras iteraciones y cada uno de ellos tendría su independiente valor de i.

## Propiedades de funciones, métodos y constructor

Ya que las funciones son objetos, estas pueden tener propiedades y métodos, como cualquier otro objeto. Hay además, un constructor `Function()` para crear nuevos objetos de tipo function.

### La propiedad length

Entrega el número de parametros declarados en la lista. Si una función derclara un parámetro `rest` (parametros variables), este no es contado para propósitos de la propiedad `length`.

### La propiedad name

Especifica el nombre usado cuando la función fue definida si fue definida con un nombre, o el nombre de la variable o propidad a la cual una función anónima fue asignada.

### La propiedad prototype

Toas las funciones, excepto la funciones flecha, tienen una propiedad prototype que se refiere a un objeto, conocido como `prototype object`. Cada función tiene defetente `prototype object`.

### Los métodos `call()` y `apply()`

`call()` y `apply()` nos permiten invocar indirectamente una función como si esta fuese parte de algún otro objeto. El primer argumento para ambos, es el objeto en el cual la función será invocada, este es el contexto de invocación y será el valor de `this` en el cuerpo de la función.

Para invocar una función que no recive arguementos, como si perterneciera a un objeto `o`, hacemos lo siguiente:

```js
const o = { x: 1, y: 2 };
function f() { return this; }

f.call(o)
f.apply(o);

// El código anterior es similar al siguiente:
o.m = f;
o.m();
delete o.m;
```

Si llamamos alguno de estos métodos en las funciones flecha, el primer parámetro será ignorado, ya que las funciones flecha heredan el contexto desde donde son definidas, el cual no puede ser sobreescrito por `call()` o `apply()`.

**Método call()**  
Cualquier argumento despues del primer serán argumentos que se pasarán a la función invocada (estos argumentos no son ignorados por funciones flecha).

```js
const o = { x: 1, y: 2 };
function f(a, b) { return [this, a, b]; }
f.call(o, a, b);
```

**Método apply()**
Para el método `apply()` los argumentos que se pasarán a la función deben ser entregados como un array:

```js
const o = { x: 1, y: 2 };
function f(a, b) { return [this, a, b]; }
f.call(o, [a, b]);
```

### El método bin()

El método `bin()` une una función a un objeto. Cuando sse invoca el método `bin()` en una función f y se pasa un objeto o, el método `bin()` retorna una nueva función. Invocar a esta nueva función (como función) invocará la función original como método de o. Cualquier argumento pasado a la nueva función serán pasados a la función original.

```js
// Se crea una función f que retorna el valor de una variable x de su contexto más el valor de una variable y recibida como argumento.
function f(y) { return this.x + y; }

// Se define un objeto con una propiedad x
let o = { x: 1 };

// Se aplica el método bin() en la función f, uniendola al objeto o. Esto devuelve una nueva función que al invocarse se invocará como si fuese método del objeto o.
let g = f.bin(o);

// Invocamos la función g, la cual actua cómo método de o
g(2);

// Se define un nuevo objeto p, el cual tiene dos propiedades x y la función g.
let p = { x: 10, g };

// Al llamar a la función g, esta se encuntra aún unida al objeto o, por lo toma este como contexto, siendo en el objeto o el valor de x = 1. El objeto p no actua como contexto de la función.s
p.g(2)
```

El contexto de las funciones flecha no puede ser sobre escrito por el método `bind()`.

El caso de uso más comun del método `bind()` es hacer que las funciones que no son funciones flecha se comporten como funciones flecha.

Cualquier argumento que se le pase al método `bind()` después del primero será entregado al valor de this. Algunas veces esto es llamado `curring`.

Veamos un ejemplo:

```js
// Creo una función que retorna la suma de dos valores que son recibidos como argumentos
let sum = (x, y) => x + y;

// La función sum es unida a null, y su segundo parámetro se unira a su primera propiedad en su valor de this, esto sería a x. 
let succ = sum.bin(null, 1);

// Como el valor de x esta unido a 1 por la aplicación de bin() en la expresión anterior, al llamar a la función con un parámetro esto funcionará ya que solo hace falta el valor para y.
succ(2);

// Se crea una función que necesita unirse a un objeto que tenga una propiedad con nombre x. 
function f(y, z) { return this.x + y + z; }

// La función f es unidad al objeto literal { x: 1 } y el valor 2 será unido como valor de y.
let g = f.bin({ x: 1 }, 2 );

// Se puede llamar a la función solo con un valor ya que los otros parámetros tienen valores unidos por el método bind().
g(3);
```

>Duda respecto al ejemplo anterior. El valor de `this` de la función nueva regresada por `bind()` será el contexto del objeto al cual de unio. Sin embargo, si se pasan más paramétros al método bind(), estos de unen tambien al objeto?

El nombre de la propiedad de una función retornada por el método `bind()` es el nombre de la función en la que el método `bind()` fue llamado, con el prefijo "bound".

### El método toString()

Los objetos funciones tienen el método `toString()` como casi todos los objetos de JavaScript. En la práctica, la mayoria de las veces (no en todas), la implementación de `toString()` en objetos tipo `function` retornan el código completo de la función. El método en funciones `built-in` retorna algo como `"[native code]"`.

### El constructor Function()

El constructor `Function()` se puede usar para crear funciones. Este espera cualquier número de argumentos como string. El último argumento es el texto del cuerpo de la función, este puede ser cualquier arbitaría combinación de sentencias válidas en JavaScript separadas por puntos y coma. Todos los otros argumentos pasados al constructor especifican los nombres de los parámetros de la función.

```js
const f = new Function("x", "y", "return x + y;");

// Lo anterior es equivalente a esto:
const f = function(x, y) { return x + y; };
```

Debido a que no hay argumentos que especifiquen el nombre de la función, el constructor `Function()` crea funciones anónimas.

Hay algunas cosas que debemos tener en cuenta respecto al constructor `Function()`:

- Permitie crear y compilar funciones dinamicamente en tiempo de ejecución.
- El constructor `Function()` parsea el cuerpo de la función y crea un nuevo objeto de función cada vez que es llamado.
- Siempre son compiladas como si fueran `top-level-functions`, lo que quiere decir aunque se creen de manera anidada, son elevadas fuera del ámbito de su función contenedora (recogiendo el objeto global como su contexto?).

```js
let scope = "global";
function constructFunction() {
    let scope = "local";
    return new Function("return scope");
}

// Al llamar a constructFunction, esta nos devuelve la función que se crea en su interior, pero al ser esta última creada con el constructor Function(), es elevada como una 'top-level-function', por lo que su variable scope toma el ámbito global y no el ámbito de función.
constructFunction()();
```

## Programación functional

JavaScript no es un lenguaje puramente funcional como lo son `Lisp` o `Haskell`, pero nos permite manipular funciones como objetos, por lo que podemos usar algunas técnicas de programación funcional en JavaScript.

### Procesar arrays con funciones

Tenemos el siguiente ejemplo. Spongamos que tenemos un array de numeros y queremos  calcular la m edia y la desviación estándar. Podríamos hacer lo siguiente:

```js
let data = [1,1,3,5,5];

// La media es la suma de los elementos divida por el número de elementos
let total = 0;
for (let i = 0; i < data.length; i++) { total += data[i]; }

// Se calcula la media
let mean = total / data.length;

// Para calcular la desviación estandar primero se suman los cuadrados de las desviaciones de cada elemento.

total = 0;
for (let i = 0; i < data.length; i++) {
    // La variable deviation debe ser definida dentro del bucle ya que cada elemento tiene su propia desviación.
    let deviation = data[i] - mean;
    total += deviation * deviation;
}

let stddev = Math.sqrt(total / (data.length - 1));
```

Es posible hacer estos cálculos de manera más concisa usando el estilo funcional con los métodos `map()` y `reduce()`.

```js
const sum = (x, y) => x + y;
const square = x => x * x;

// Usamos las funcioones sum y square para calcular la media y la desviación estándar
let data = [1,1,3,5,5];
let mean = data.reduce(sum) / data.length;
let deviations = data.map(x => x - mean);
let stddev = Math.sqrt(deviations.map(square).reduce(sum) / (data.legth - 1));
console.log(stddev);
```

La versión anterior aún invoca métodos en objetos, por lo que tiene algo de convenciones de la orientación a objetos, se puede aun hacerla más funcional. Se escribiran versiones funcionales de los métodos `map()` y `reduce()`.

```js
const map = function(a, ...args) { return a.map(...args); };
const reduce = function(a, ...args) { return a.reduce(...args); };

const sum = (x, y) => x + y;
const square = x => x * x;

let data = [1,1,3,5,5];
let mean = reduce(data, sum) / data.length;
let deviations = map(data, x => x - mean);
let stddev = Math.sqrt(reduce(map(deviations, square), sum) / (data.length - 1));
console.log(stddev);

```

### Funciones de alto nivel (Higher-order functions)

Una función de alto nivel es una función que opera con funciones, tomando una o más funciones como argumentos y retornando una nueva función. Por ejemplo:

```js
function not(f) {
    return function(...args) {
        let result = f.apply(this, args);
        return !result;
    };
}

const even = x => x % 2 === 0;
const odd = not(even);
[1,1,3,5,5].every(odd);
```

En el siguiente ejemplo, considerar la función `mapper()` que toma una función como argumento, y retorna una nueva función que mapea una array a otro usando esa función:

```js
function mapper(f) {
    return a => map(a, f);
}

const increment = x => x + 1;
const incrementAll = mapper(increment);
incrementAll([1,2,3]);
```

En el siguiente ejemplo, se creará una función que tome dos funciones como argumentos y que retorne uan nueva función que calcule f(g()).

```js
function compose(f, g) {
    return function(...args) {
        return f.call(this, g.apply(this, args));
    };
}

const sum = (x, y) => x + y;
const square = x => x * x;
compose(square, sum) (2, 3);
```

### Aplicaciones parciales de funciones

el método `bind()` aplica parcialmente los argumentos que se le son pasados como argumentos de la función a la izquierda de la lista de argumentos de la función original, pero tambien es posible aplicar los argumentos parcialmente a la derecha:

```js
// Los argumentos pasados a la siguiente función son aplicados parcialmente a la izquierda.
function partialLeft(f, ...outerArgs) {
    return function(...innerArgs) {
        let args = [...outerArgs, ...innerArgs];
        return f.apply(this, args);
    };
}

// Los argumentos para esta función son pasados en la derecha.
function partialRight(f, ...outerArgs) {
    return function(...innerArgs) {
        let args = [...innerArgs, ...outerArgs];
        return f.apply(this.args);
    };
}

// Los argumentos en esta función sirven como una plantilla. Los valores undefined en la lista de argumentos son llenados con valores del set interior.
function partial(f, ...outerArgs) {
    return function(...innerArgs) {
        let args = [...outerArgs];
        let innerIndex = 0;
        for (let i = 0; i < args.length; i++) {
            if (args[i] === undefined) {
                args[i] = innerArgs[innerIndex++];
            }
        }
        args.push(...innerArgs.slice(innerIndex));
        return f.apply(this, args);
    };
}

const f = function(x, y, z) { return x * ( y - z ); };

// Resultado: -2: 2 * (3 - 4)
partialLeft(f, 2)(3, 4);

// Resultado: 6: 3 * (4 - 2)
partialRight(f, 2)(3, 4);

// Resultado: -6: 3 * (2 - 4)
partial(f, undefined, 2)(3, 4);
```

Las últimas aplicaciones parciales de funciones nos permite dedinir interesantes funciones fuera de las que fueron definidas.

```js
const increment = partialLeft(sum, 1);
const cuberoot = partialRight(Math.pow, 1 / 3);
cuberoot(increment(26))
```

Tambien podemos combinar aplicaciones parciales con otras funciones de alto nivel (higher-order functions).

```js
const not = partialLeft(compose, x => !x);
const even = x => x % 2 === 0;
const odd = not(even);;
const isNumber = not(isNaN);

// Resultado: true
odd(3) && isNumberr(2)
```

También podemos usar la composición y las aplicaciones parciales para redefinir los ejemplos previos para el cálculo de la media y la desviación estándar en un estilo funcional extremo.

```js
const product = (x, y) => x * y;
const neg = partial(product, -1);
const sqrt = partial(Math.pow, undefined, 0.5);
const reciprocal = partial(Math.pow, undefined, neg(1));

let data = [1,1,3,5,5]; // Our data
let mean = product(reduce(data, sum), reciprocal(data.length));
let stddev = sqrt(product(reduce(map(data,
             compose(square, partial(sum, neg(mean)))), sum),
             reciprocal(sum(data.length,neg(1)))));

[mean, stddev] // => [3, 2]
```

Este calculo esta completamente hecho con invocación de funciones, no hay operadores envueltos.

### Memoization

Anteriormente se ha definido una función que cacheaba resultados parciales. Esto en programación funcional se llama `memoization`.

Por ejemplo, en el siguente código, la función de alto nivel `memoize()`, acepta una función como su argumento y retorna una versión memoizada de esta:

```js
function memoize(f) {
    const cache = new Map();
     return function(...args) {

        let key = args.length + args.join("+");
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            let result = f.apply(this, args);
            cache.set(key, result);
            return result;
        }
     };
}


function gcd(a, bb) {
    if (a < b){ [a, b] = [b, a]; }
    while(b !== 0){
        [a, b] = [b, a % b];
    }
    return a;
}

const gcdmemo = memoize(gdc);

// Resultado 17
gcdmemo(85, 187);
```

Debemos notar que cuando escribimos una función que será memoizada, tipicamente querremos usar la versión memoizada no la original.

```js
const factorial = memoize(function(n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
});

factorial(5);
```
