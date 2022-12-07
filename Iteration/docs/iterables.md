# Iterables, iteradores y generadores

## Iteración 

La iteración es la ejecución de una porción de código repetidamente en el tiempo. Para esto, en JavaScript, se debe implementar el `protocolo iterator`. Un protocolo, son reglas de implementación más una interfaz que las usa. En este caso, el `protocolo iterator` conecta dos grupos de entidades en JavaScript:

- Fuentes de datos: diferentes estructuras de datos como: arrays, maps, sets, etc.
- Consumidores de datos: Algoritmos que necesitan acceder a los valores en las estructuras de datos de manera secuencial. Como por ejemplo un bucle for..of.

El `protocolo iterator` conecta estas entidades por medio de la interfaz `iterable`:

![Interfaz iterable](https://exploringjs.com/impatient-js/img-book/sync-iteration/iterable-implementers-clients.svg)

Por lo que la iteración funciona debido a que las fuentes de datos implementan la `interfaz iterable` mientras que los consumidores, la consumen haciendo uso de ella.

## Roles en la iteración

La iteración realmente se forma por tres componentes, objetos que implementan interfaces distintas que hacen la hacen posible. El `objeto iterable`, el `iterator` y el `iteratorResult`. Sin embargo solo los dos primeros forman el núcleo de la iteración.

![Núcleo de la iteración](https://exploringjs.com/impatient-js/img-book/sync-iteration/iteration-protocol.svg)

El objeto iterable, siempre implementa el método `[Symbol.iterator]()`, que devuelve un `objeto iterator`, el cual implementa el método `next()`, este último devuelve un `objeto iteratorResult` que se conforma por las propiedades `{value, done}`.

**El objeto iterable**  
Un `objeto iterable` es aquella estructura de datos que implementa el `protocolo iterable` haciendo públicos sus elementos y permitiendonos recorrer sus valores de manera secuencial. Dicho protocolo se basa en la implementación del método iterator o `[Symbol.iterator]` el cual debe devolver un objeto de tipo `iterator` (se definirá posteriormente).

```js
let range = {
    from: 1,
    to: 10,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return {done: false, value.current++};
        } else {
            return {done: true};;
        }
    }
};
```

**El objeto iterator**  
El `objeto iterator` es el puntero que se usa para recorrer el objeto iterable, debe implementar el `protocolo iterator` el cual define la manera estandar para producir una secuencia de valores. Un `objeto iterator` puede ser a su vez un `objeto iterable` si implementa el `protocolo iterable` junto al `protocolo iterator`.

Para implementar el `protocolo iterator` el objeto iterator debe implementar el método `next()` el cual debe devolver un objeto que a su vez implemente la interfaz `IteratorResult`.

```js
function makeIterator () {
    const arr = [1, 2, 3, 4];
    return {
        next(){
            if (arr.length) {
                return {value: arr.shift(), done: false};
            }
            return {value: undefined, done: true};
        }
    };
}

let iterador = makeIterator();
console.log(iterador.next());
```

El método `next()` puede recibir cero o un argumento, el cual puede usarde en los [generadores](generators.md).

El `objeto iterator` opcionalmente puede también los métodos `return(value)` y `throw(exception)`.

El método `return(value)` acepta cero o más argumentos y retorna un  objeto que implementa la interface `IteratorResult`. Llamar a este método le indica al iterador que no se podrán hacer nuevas llamadas al método `next()` y se desarrollan tareas de limpieza.

```js

```

El método `throw()` acepta cero o más argumentos, retorna un objeto que implementa la interface `IteratorResult`, llamar a este método le indica al iterador que se ha detectado un error.

```js

```

**Objeto IteratorResult**  
Un objeto Iterator Result implementa la interfaz `IteratorResult`, la cual debe tener las siguientes propiedades:

`done`: Toma un valor booleano, es false si el iterador puede producir otro valor en la secuencia. Toma el valor true cuando el iterador ya a producido todos los valores en la secuencia. En este caso puede implementar un método `return`.

`value`: Corresponde al valor retornado por el iterador, puede ser cualquier tipo permitido por JavaScript. Puede ser omitido si `done` es true.

## Iterables asíncronos

Los iterables asincrónos son objetos similares a los iterables sincrónos, la diferencia es que los primeros entregan los valores de manera asíncrona, lo que significa que el estado de las propiedades `value` y `done` no son conocidas al momento en que el método `next()` retorna el objeto `iteratorResult`.

El mecanismo para lograrlo es entregar los valores a través de una secuencia de promesas en lugar de una secuencia de valores.

Para crear un objeto iterable asyncróno, debemos seguir el `protocolo iterator` con algunos cambios.

- Se usa el método [Symbol.asyncIterator] en lugar de [Symbol.iterator]
- El método `next()` debe retornar una promesa, la cual será completada con el siguiente valor).
- Se debe manejar el método `next()` añadiendo `async`.
- Para iterar sobre un `objeto iterator asyncróno` se usa el bucle `for await (let item of iterable)`

```js
const ayncIterable = {
    [Symbol.asyncIterator] () {
        return {
            async next() {
                return {
                    new Promise((resolve, rejected) => {
                        resolve(
                            { value: <value>, done: <done> }
                        )
                    });
                }
            }
        };
    }
};
```

En el fragemento anterior se muestra el esqueleto de un iterador asíncrono en donde se usa `[Symbol.asyncIterator]` y el método `next()` retorna una promesa. El método `next()` no debes ser necesariamente asíncrono `async next()` este puede crearse de manera regular, pero crearlo de forma asíncrona nos permite usar `await` dentro de este método.

**Ejemplo de iterador Asincróno:**

```js
class AsyncSequence {
    constructor (start = 0, end = Infinity,  step = 1) {
        this.start = start;
        this.end = end;
        this.step = step;
    }

    [Symbol.asyncIterator] () {
        let counter = 0;
        let current = this.start;

        next: async () => {
            if (current <= this.end) {
                result = { value: current, done: false }
                current += this.step;
                counter++;

                return new Promise((resolve, rejected) => {
                    setTimeout(() => {
                        resolve(result);
                    }, 1000)
                });  
            }

            return new Promise((resolve, rejected) => {
                setTimeout(() => {
                    resolve({
                        value: counter,
                        done: true
                    });
                }, 1000);
            });
        }
    }
}
```

En el ejemplo anterior se observa que el método `next()` retorna `Promesas` en lugar de valores planos. Estos objetos deben ser consumidos por el bucle `for await of` ya que el blucle `for..of` llamará al método `[Symbol.iterator]` y en los iteradores asíncronos nos se usa, en su lugar se usa `[Symbol.asyncIterator]`. Además, si se consume un objeto iterable asíncrono de manera síncrona, este devolverá todos sus valores con estado `pending`.

Ejemplo de consumo de un iterador asíncrono:

```js

async function useAsyncSequence() {
    for await (const num of new AsyncSequence(1, 10, 2)) {
        console.log(num);
    }
}

useAsyncSequence();
```

En el ejemplo anterior, debemos usar el bucle `for await of` dentro de una función asíncrona, ya que solo dentro de funciones asíncronas podemos hacer uso de la sentencia `await`.

Si se intentan consumir directamente los valores de un iterador asíncrono, sin usar la sentencia `await`, este entregará los objetos con un estado pending.

> Ver siguiente ejemplo en: [asyncObject](../tests/js/t_asyncOject.js)

```js
let asyncObjet = {
    from: 0,
    to: 4,

    [Symbol.asyncIterator] () {
        let current = this.from;
        let end = this.to

        return {
            next() {
                if (current <= end) {
                    result = {value: current, done: false};
                    current++;

                    return new Promise((resolve, rejected) => {
                        setTimeout(() => {
                            resolve (result);
                        }, 1000);
                    });
                }

                return new Promise((resolve, rejected) => {
                    setTimeout(() => {
                        resolve ({value: undefined, done: true});
                    }, 1000)
                });
            }
        };
    }
}

// Consumo correcto de iterable asíncrono
const useAsycObject = async () => {
    for await (const num of asyncObjet) {
        console.log(num);
    }
}

useAsycObject();

// Incorrecta manera de consumir el objeto iterador asíncrono
let objIterator = asyncObjet[Symbol.asyncIterator]();
console.log(objIterator);

// Llamadas al método next() devolverán Promise { <pending> }
// ¿Por qué se imprime un 4 al hacer varias llamadas, es como si
// desde la segunda llamada al método next(), se imprimieran 
// resuldatos
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());
```

Para resumir. Los `iterables síncronos` se caracterizan por:

- Usar `[Symbol.iterator]()`
- Devolver objetos `iteratorResult` con valores planos
- Ser consumidos por el bucle `for..of`

Los `iteradores asíncronos`se caracterizan por:

- Usar `[Symbol.asyncIterator]`
- Devolver promesas que se resuelven con {value, done}
- Ser consumidos por el bucle `for await of`
