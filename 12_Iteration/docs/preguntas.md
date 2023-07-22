# Preguntas y respuestas

1. ¿Cual es la diferencia entre un `objeto generador` y un `objeto iterador`? ¿Cuál es la diferencia entre generadores e iteradores?
2. ¿Cuando usar `iterables` o `iterators` directamente?
3. ¿Como funciona el método `throw(value)` en los iterators?
4. ¿Por qué en el siguiente código, no puedo consumir el generador mediante llamados al método `next()`?

```js
function iterGenerator(from, to) {
    return {
        *[Symbol.iterator]() {
            for (let num = from; num <= to; num++) {
                yield num;
            }
        }
    };
}

let numbers = iterGenerator(1, 4);
console.log(numbers.next());
```
