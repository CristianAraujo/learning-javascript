# Iterables, iteradores y generadores

La iteración es la ejecución de una porción de código repetidamente en el tiempo. Para esto, en JavaScript, se debe implementar el `protocolo iterator`. Un protocolo, son reglas de implementación más una interfaz que las usa. En este caso, el `protocolo iterator` conecta dos grupos de entidades en JavaScript:

- Fuentes de datos: diferentes estructuras de datos como: arrays, maps, sets, etc.
- Consumidores de datos: Algoritmos que necesitan acceder a los valores en las estructuras de datos de manera secuencial. Como por ejemplo un bucle for..of.

El `protocolo iterator` conecta estas entidades por medio de la interfaz `iterable`:

![Interfaz iterable](https://exploringjs.com/impatient-js/img-book/sync-iteration/iterable-implementers-clients.svg)

Por lo que la iteración funciona debido a que las fuentes de datos implementan la `interfaz iterable` mientras que los consumidores, la consumen haciendo uso de ella.

## Roles en la iteración

La iteración realmente se forma por tres componentes, tres interfaces distintas que hacen la hacen posible. El `objeto iterable`, el `iterator` y el `iteratorResult`. Sin embargo solo los dos primeros forman el núcleo de la iteración.

![Núcleo de la iteración](https://exploringjs.com/impatient-js/img-book/sync-iteration/iteration-protocol.svg)

El objeto iterable, siempre implementa el método `[Symbol.iterator]()`, que devuelve un `iterator`, el cual contiene el método `next()`.

**El objeto iterable**  
Un `objeto iterable` tiene la capacidad de permitirnos recorrer sus valores de manera secuencial. Es aquella estructura de datos que implementa el `protocolo iterable`. Dicho protocolo se basa en la implementación del método iterator o `[Symbol.iterator]` el cual debe devolver un objeto de tipo `iterator` (se definirá posteriormente).

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
El `objeto iterator` es el puntero que se usa para recorrer el objeto iterable, este es un `objeto iterable` en si mismo. Para que una estructura de datos se pueda considerar `objeto iterable` debe implementar el `protocolo iterator` el cual define la manera estandar para producir una secuencia de valores.

Para implementar el `protocolo iterator` el objeto iterator debe implementar el método `next()` el cual debe devolver un objeto que a su vez implemente la interfaz `IteratorResult`.

El método `next()` puede recibir cero o un argumento. El valor pasado en el método `next()` de un `generador` será recibido mediante la expresión `yield` dentro del cuerpo del generador, haciendo disponible el valor pasado en `next()` dentro del cuerpo del generador.

El `objeto iterator` opcionalmente puede también los métodos `return(value)` y `throw(exception)`.

El método `return(value)` acepta cero o más argumentos y retorna un  objeto que implementa la interface `IteratorResult`. Llamar a este método le indica al iterador que no se podrán hacer nuevas llamadas al método `next()` y se desarrollan tareas de limpieza.

El método `throw()` acepta cero o más argumentos, retorna un objeto que implementa la interface `IteratorResult`, llamar a este método le indica al iterador que se ha detectado un error.

**Objeto IteratorResult**  
Un objeto Iterator Result implementa la interfaz `IteratorResult`, la cual debe tener las siguientes propiedades:

`done`: Toma un valor booleano, es false si el iterador puede producir otro valor en la secuencia. Toma el valor true cuando el iterador ya a producido todos los valores en la secuencia. En este caso puede implementar un método `return`.

`value`: Corresponde al valor retornado por el iterador, puede ser cualquier tipo permitido por JavaScript. Puede ser omitido si `done` es true.
