# Dudas Arrays

* ¿Cuando guardo expresiones en un array de JavavScript, los valores de dichas expresiones son evaluados cuando consulto los elementos del array o cuando los guardo en el array?
* En el siguiente código, ¿Por que `0 in a2` devuelve el valor `true`?

```js
let a1 = [,]; // This array has no elements and length 1
let a2 = [undefined]; // This array has one undefined element
0 in a1 // => false: a1 has no element with index 0
0 in a2 // => true: a2 has the undefined value at index 0
```

* Un objeto iterable permite ser iterado por un bucle `for/of`,pero, ¿Es posible iterar sobre un elemento que no sea un objeto iterable usando el bucle for en JavaScript?

* ¿Que diferencias tienen el bucle `for` tradicional con el `for/of`?
* ¿Cómo funciona el bucle `for/of` a bajo nivel?
  