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

## Prototypes

Casi todos los objetos en JavaScript tienen un segundo objeto relacionado, este segundo objeto es conocido como prototipo, y el primero hereda de este último.

Los objetos literales tienen el mismo prototipo, `Object.prototype`. Los objetos creados con la palabra clave `new` usan el protitipo de la función constructura como el suyo.

Casi todos los objetos tienen un prototipo, pero una pequeña cantidad de objetos tienen la propiedad `prototype`, quienes la tienen son quinees definen los prototipos para todo el resto de objetos.

La mayoria de los `built-in` constructors y aquellos definidos por el usuario tienen un prototipo que hereda desde `Object.protype`.

## Consultando y configurando propiedades

Para obtener una propidad podemos usar el operador punto `(.)`  o los parentesis cuadrados `[]`. En la izquieda debemos tener una expresión cuyo valor sea un objeto, mientras que si usamos el operador punto, a la derecha debemos tener un identificador simple y si usamos parentesis cuadrados, debe ser una expresión que evalue a un string con el nombre de la propiedad que se busca:

```js
let autor = book.autor;
let nombre = autor.nombre;
let titulo = book["titulo principal"];
```

Para crear o configurar una propiedad:

```js
book.edicion = 7;
book["titulo principal"] = "ECMAScript";
```

### Objetos como arrays asociativos

Usando la notación con llaves, el nonmbre de las propiedades de los objetos es expresada como un string y podemos manipularla en tiempo de ejecución, lo que no podemos hacer con la sintaxis de punto.

```js
    let direccion = "";
    for (let i = 0; i < 4; i++){
        direccion += cliente[`direccion${i}`] + "\n";
    }
```

En el ejemplo anterior el resultado seria: direccion0, direccion1, direccion2, direccion3.

### Herencia

Se dice que las propiedades pertenecen a un objeto si estas no son heredadas desde su objeto prototipo. Si consultamos por propiedades, si estas no son encontradas en el objeto, entonces se buscaran subiendo por la cadena de prototipos.

Si se asinga una propiedad a un objeto y esta propiedad no existe, entonces el objeto tendrá una nueva propiedad no heredada, pero si la propiedad ya existe en la cadena de herencia de prototipos, entonces el valor heredado es ocultado, predominando el valor asignado al objeto. Si el objeto hereda una propiedad x la cual es de solo lectura, no se podrá asignar un nuevo valor.

```js
// Definimos un objeto
let unitcircle = { r: 1 };

// Creamos un objeto que hereda desde initcircle
let c = Object.create(unitcircle);

// El objeto c define atributos propios x e y
c.x = 1; c.y = 1;

// El objeto c sobreescribe el valor de r
c.r = 2;

// El valor de r del objeto unitcircle no se altera por la reasgnación de c
unitcircle.r 
```

### Errores en acceso a propiedades

- Si una propiedad no es encontrada esto arroja `undefined`
- `null` y `undefined` no tienen propiedades, intentar acceder a sus propiedadaes arrojará error.
- Acceder a propiedades de un objeto que evalua a `null` o `undefined` causas un `TypeError`.
- En `strict mode` ocurre un `TypeError` cuando un intento de asignación falla.
- Las asignaciones fallarán si:
  - El objeto tiene su propia propiedad y es de solo lectura.
  - el objeto ha heredado la propiedad y es de solo lectura.
  - El objeto no tiene la propiedad ni la ha heredado, y además el objeto no es extendible.

## Borrar propiedades de los objetos

Para borrar propiedades usamos el operador `delete` el cual remuve propiedades de los objetos. El operador `delete` no opera en los valores de los objetos, opera en la propiedad en si misma.

```js
let persona = {
    nombre: 'Luna',
    pais: 'Serbia',
    edad: 24
}

// Se borra propiedad nombre de objeto persona
delete persona.nombre;
```

El operador `delete` opera sobre las propiedades pertenecientes al objeto en si, no sobre propiedades heredadas. Para borrar propiedades heredades, se deben borrar donde fueron definidas.

El operador `delete` no puede removar propiedades con el atributo `configurable` en false, como lo son propiedades del objeto global creadas por declaración de variables y funciones. En strict mode esto causa TypeError.

```js
// False. La propiedad no es configurable (atributo configurable es false)
delete Object.prototype

// Se declara una variable global
var x = 1;

// False. No se puede borrar esta propiedad
delete globalThis.x

// Declaración de una función
function f() {}

// False. No se puede borrar 
delete globalThis.f
```

## Testing de propiedades

Se puede usar:

- El operador `in`
- Función `hasOwnProperty()`
- Función `propertyIsEnumerable()`
- Simplemente preguntando la propiedad

**Operador in**
Se indica la propiedad en el lado izquierdo y el objeto en el derecho:

```js
let o = { x: 1 };
"x" in o
"y" in o
"toString" in o
```

**hasOwnProperty**
Solo comprueba propiedades no heredadas

```js
let o = { x: 1 };
o.hasOwnProperty("x");
o.haOwnProperty("y");
o.hasOwnProperty("toString");
```

**propertyIsEnumerable()**
Retorna verdadero si las propiedades son propias del objeto y el atributo de la propiedad _enumerable_ es true.

```js
let o = { x: 1 };

// Verdadero: propiedad es enumerable
o.propertyIsEnumerable("x");

// False: Propiedad heredada
o.propertyIsEnumrable("toString");

// False: Propiedad no enumerable
o.prototype.propertyIsEnumerable("toString");
```

**Consultar la propiedad**
En lugar de usar el operador `in` podemos consultar la propiedad, consultando si esta no es `undefined`:

```js
let o = { x: 1 };

// False, la propiedad está definida
o.x !== undefined;

// True, la propiedad no está definida
o.y !== undefined;

// False, la propiedad es heredada
o.toString !== undefined;
```

La diferenia entre esto último y usar el operador `in` es que con el operador `in` podemos distinguir aquella propiedades que existan, pero cuyo valor sea `undefined`.

```js
let o = { x: undefined };

// False, la propiedad existe, pero es definida a undefined
o.x !== undefined;

// True, la propiedad existe en el objeto
"x" in o
```

## Enumerar propiedades

Para enumerar propiedades se usa comunmente el `for/in` loop el cual asignará el nombre nombre de la propiedad a la variable del bucle en cada iteración. Se debe tener en cuenta que los métodos `built-in` heredados no son enumerables.

```js
const ciudades = { 
    Filipinas: "Manila", 
    Malasia: "Kuala Lumpur",
    Tailandia: "Bangkok",
    Vietnam: "Hanoi" 
};

for (const pais in cuidades) {
    console.log(pais);
}
```

Existe la alternativa de obtener un array de los nombres de las propiedades y luego itererar con `for/of`. Podemos obtener un array con los nombres de las propiedades con:

- `Object.keys`: Retorna una array con los nombres de las propiedades enumerables y no heredadas del objeto.
- `Object.getOwnPropertyNames`: Igual que `Object.keys`, pero incluye propiedades no enumerables.
- `Object.getOwnPropertysymbols`: Retorna los nombres de las propieades no heredadas cuyos nombres son símbolos, sean o no propiedades enumerables.
- `Reflect.ownKeys`: Retorna todas las propiedades, sean o no enumerables y sean strings o símbolos.

Orden de enumeración

- Primero se enumeran todos los nombres que son enteros no negativos de menor a mayor.
- Luego todas las propiedades restantes, tipo string, números negativos o flotantes son enumerados en el orden que fueron agregados al objeto. En objetos literales, estos se enumeran en la manera que aparecen en el objeto.
- Finalmente se enumera las propiedades que son símbolos.
- Luego se enumeran propiedades heredadas. Si ya existe una propiedad con el mismo nombre que ya fue enumerada, la propiedad heredada no será enumerada.

## Extendiendo objetos

Extender un objeto es copiar las propiedades de un objeto a otro. Para esto existe el método `Object.assign()`, el cual como primer argumento recibe un objeto llamado objeto objetivo y luego puede recibir consecutivos objetos los cuales son objetos fuente. Las propiedades de los objetos fuentes, se copiarán en el objeto objetivo.

Las propiedades con el mismo nombre se irán sobreescribiendo, así las propiedades que aparecen al después sobreescribirán las anteriores.

```js
let a = { x: 1, y: 2 };
let b = { s: 3, j: 4 };
let c = { p: 4, q: 6 };

Object.assign(a, b, c);
console.log('a:', a);
```

Podemos crear un nuevo objeto copiando las propiedades de la siguiente manera:

```js
let g = { x: 1, y: 2 };
let h = { s: 3, j: 4 };
let i = { p: 4, q: 6 };

let n = Object.assign({}, g, h, i);
console.log('n:', n);
```

Lo anterior también se puede conseguir con `spread operator` que se verá más adelante.

## Serializando objetos

La serializaciíon de objetos es el proceso de convertir el estado de un objeto a un string, desde el cual podremos recuperarlo posteriormente. Para esto tenemos las funciones `JSON.stringify()` y `JSON.parse()`, estas funciones usa el fofrmato `JSON`.

```js
let o = { 
    x: 1, 
    y: { z: [false, null, ""]}
}

let s = JSON.stringify(o);
let q = JSON.parse(s);
```

