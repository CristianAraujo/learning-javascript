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
