# Objetos en JavaScript

Son el el tipo de dato más importante en JavaScript. Un valor compuesto que es una colección no ordenada de propiedades, las cuales tienen un nombre y un valor. Podemos decir que en los objetos los nombres se mapean a valores.

Los objetos heredan propiedades de otros objetos conocidos como su prototipo.

Cualquier valor en JavaScript que no sea un string, number, Symbol, true, false, null o undefinded es un objeto. Los objetos son imutables pueden manipularse por referencia. Las cosas más comunes que hacemos con los objetos es crealos y configurar, consultar, borrar, testear y enumerar sus propiedades.

El nombre de una propiedad pude ser un string, incluyendo un string vacío o un Symbolo. Un objeto no puede tener más de una propiedad con el mismo nombre.

Decimos que las propiedades pertenecen a un objeto cuando estas no son heredadas y que estas tienen tres atributos:

- `escritura` cuando una propiedad puede ser configurada.
- `enumerable` cuando una propiedad puedee ser retornada por el bucle `for/in`.
- `configurable` cuando una propiedad puede ser borrada o alterada.

Todas las propiedades de los objetos creados por el usuario son con `escritura`, `enumeables` y `configurables`.

## Creación de objetos

Se tienen 3 maneas de crear objetos: `objetos literables`, `palabra clave new` y function `Object.create()`.

### Objetos literales

Son una lista de valores de tipo `namme: value` separados por coma, encerrados en llaves. los nomnbres pueden ser cualquier identificador válido o strings literals y los valores pueden ser cualquier expresión válida.

```js
let empty = {};  // Objeto vacío
let point = { x: 1, y: 2 }; // objeto con 2 propiedades númericas
let p2 = { x: point.x, y: point.y };
let book = {
    "titulo principal": "JavaScript",
    Subtitulo: "The Definitive Guide",
    for: "Todas las audiencias",
    autor: {
        "primer nombre": "David",
        "apellido": "Flanagan"
    }
};
```

La última propiedad de un objeto también puede tener una coma. Un objeto literal es una expresión que crea e inicializa un nuevo y distinto objeto cada vez que este es evaluado.

### Crear objetos con new

Crear un objeto con la palabra `new` debe ser seguida por la invocacicón de una función, esta función es llamada función constructora.

```js
let o = new Object();
let a = new Array();
let d = new Date();
```

### Object.create()

Crea un nuevo objeto usando su primer argumento como protipo.

```js
let o1 = Object.create({ x: 1, y: 2 });
let sum = o1.x + o1.y;
console.log(sum);
```

Para crear un objeto que no tenga prototipo, podemos pasar como primer parámetro `null`, mientras que para crear un objeto vacío ({}), pasamos como argumento `Object.prototype`:

```js
// Se creea un objeto sin prototipo
let o2 = Object.create(null);

// Se crea un objeto vacío {}
let o3 = Object.create(Object.prototype);
```

`Object.create` también puede recibir un segundo argumento, que describe las propiedades del nuevo objeto. Concepto que se verá en otro capitulo.

Uno de los usos de `Object.create` es poder pasar un objeto a una función para que esta no modifique el objeto original:

```js
let o = { x: "no cambiar este valor:" };
libreria.function(Object.create(o));
```
