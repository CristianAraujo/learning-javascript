# Generadores

## ¿Qué es un generador?

Son funciones y métodos especiales que siempre retornan un objeto `generator`, el cual a su vez es un objeto `iterator` que es tambien `iterable`.

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

