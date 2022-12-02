# Generadores

## ¿Qué es un generador?

Son funciones y métodos especiales que siempre retornan un objeto `generator`, el cual a su vez es un objeto `iterator` que es tambien `iterable`.

## Definición de funciones generadoras

Las funciones o métodos generadores se definen agregando un asterísco `*` depués del la palabra clave `function` o antes del nombre de la función:

```js
// Definición de un generador
function* gen() { /* code */ }

// Generadores expresados
let gen = function* () { /* code */ }

// Métodos generadores en objetos literales
const obj = {
    *gen() {
        // code
    }
};

// Métodos generadores en clases
class MyClass {
    *gen() {
        // code
    }
}
```

**No es posible definir funciones o métodos generadores mediante la notación de flecha.**

## Comportamiento de funciones generadoras

Las funciones generadores se comportan diferente a las funciones normales, al invocarlas, estás no ejecutan el cuerpo de la función, sino que retornan un objeto `generator`.

```js
function* generador () {
    yield 1;
    yield 2;
    yield 3;
}

let objetoGenerator = generador();
console.log(objetoGenerator);
```

El `objeto generador` retornado por la función o método generador debe ser consumido mediante el método `next()` ya que este es en realidad un `objeto iterator`, y al ser consumido por el método `next()`, se devuelve un objeto que implementa la interfaz `iteratorResult`.

```js
let gen = function* () {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

let objetoGenerador = gen();
console.log(objetoGenerador.next());
console.log(objetoGenerador.next());
console.log(objetoGenerador.next());
console.log(objetoGenerador.next());
```

Cuando se llama al método `next()` se ejecuta el cuerpo de la función hasta la siguiente sentencia `yield`, pausando la ejecución de la función y retornando el valor de la sentencia `yield`. 

## Consumir un generador

Los `objetos generadores` son `objetos iteradores` por lo que pueden ser consumidos por todos los algoritmos que sepan como interactuar con la interfaz `iterator`. Por ejemplo para consumir un generador con el bucle `for..of`:

```js
function* gen () {
    yield 1;
    yield 2;
    return 3;
}

let generador = gen();

for (let valor of generador) {
    console.log(valor);
}
```

En el ejemplo anterior, solo se imprimirán los números 1 y 2, ya que cuando se retorna el número 3, con la sentencia `return` el generador se encuentra con su propiedad `done: true`, por lo que este valor será ignorado. Para evitar esto, se debería cambiar la sentencia `return` por una sentencia `yield`.

## Uso de generadores en lugar de iterables

Los `objetos generadores` también son `iterators` por lo que podemos usarlos en el lugar de los iteradores. Por ejemplo, en el iterable, `Range` podemos devolver un generador en lugar de un iterador:

```js
const Range = {
    from = 1,
    to = 5,

    *[Symbol.iterator]() {
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};

console.log([...Range]);
```

_¿Por qué en el ejemplo anterior no es necesario implementar el método next()?_

## Composición de generadores

Es una característica espcial que permite embeber generadores dentro de otros. Por ejemplo, supongamos que tenemos una función generadora para obtener una secuencia de números entre un inicio y un final predefinido:

```js
function* randomNumbers(from, until) {
    for (let i = from; i <= until; +++) {
        yield i;
    }
}
```

Si se quisiera usar la función anterior para producir carácteres mediante su código `ASCII`, podriamos usar dicha función generadora dentro de otra:

```js
function* generatePassword() {
    yield* randomNumbers(48, 57);
    yield* randomNumbers(65, 90);
    yield* randomNumbers(97, 122);
}

let str = '';
for (let code of generatePassword()) {
    str += String.fromCharCode(code);
}
```

En el ejemplo anterior, la sentencia `yield*` delega la ejecución al generador que se está llamando hasta que este devuelva un valor.

## Paso de valores a través del médoto next()

Hasta el momento los generadores se han mostrado similares a los iteradores, pero son mucho más poderosos y flexibles. Podemos pasar valores al interior de los generadores mediante como argumentos del método `next()`, y recibiendolos dentro del generaador con sentencia `yield`. Por ejemplo:

```js
function* gen() {
    let res1 = yield '2 + 2 = ?';
    console.log(res1);

    let res2 = yield '3 * 3 = ?';
    console.log(res2);
}

let generador = gen();
console.log(generador.next());
console.log(generador.next(4).value);
console.log(generador.next(9).done);

```

La ejecución del ejemplo anterior:

- El primer llamado al método `next()` se inicia la ejecución del cuerpo de la función, pausandose en el primer `yield` y retornando un `string` con el valor `2 + 2 = ?`.
- En el segundo llamado al método `next(4)`, primero se entrega el argumento `4` a la sentencia `yield` donde se encuentra pausada la ejecución de la función, posteriormente se reanuda la ejecución, ejecutandose el siguiente `console.log()`. Luego se encuentra el segundo `yield` el cual devuelve un `string` fuera de la función y pausa la ejecución de la misma.
- En el tercer llamado del método `next(9)`, primero se entrega el argumento `9` a la sentencia `yield` dentro de la función y se reanuda la ejecucicón de la misma.

## Pasar un error con `generator.throw()`

Al igual que la sentencia `yield` puede recibir otros valores, también puede recibir datos de tipo `error` mediante el método `throw()`. En estos casos el error será lanzado en la misma línea de código en donde la sentencia `yield` lo recibe.

```js
function* gen() {
    try {
        let result = yield '2 + 2 = ?';
    } catch (e) {
        console.log(e);
    }
}

let generador = gen();
let pregunta = generador.next().value;
generador.throw(new Error("La respuesta no es encontrada"));
```

## Finalizar la ejecución con `generator.return()`

El método `generator.return(value)` finaliza la ejecución del generador y devuelve el valor pasado como parámetro en `value`.

```js
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

g.next(); // {value: 1, done: false}
g.return('Terminado'); // {value: 'Terminado', done: true}
g.next(); // {value: undefined, done: true}
```

Esto no es muy frecuentemente usado, pero pude ser útil cuando necesitemos terminar la ejecución de un generador con un determinado estado.

