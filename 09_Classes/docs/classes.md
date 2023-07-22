# Clases

Las clases son un modelo para crear objetos, cada objeto creado a partir de una clase se dice que es una instancia de esta. Las instancias de una clase tienen sus propias propiedades para manejar su estado y tambien sus propios métodos para definir su comportamiento. Estos métodos son definidos por la clase y compartidos por todas las instancias.

En JavaScript las clases tienen `herencia basada en prototipos`. Si dos objetos heredan propiedades del mismo prototipo, entonces decimos que esos objetos son instancias de la misma clase.

Si dos objetos heredan del mismo prototipo, esto no necesariamente significa que fueron creados e inicializados por la misma función constructora o `factory function`.

Las clases en JavaScript y el mecanismo de herecia basado en prototipos son sustanciamente diferetes de el mecanisimo tradicional de herencia basada en clases de otros lenguajes como Java o C++.

## Clases y prototipos

Una clase es un conjunto de objetos que heredan propiedades desde el mismo prototipo. Si definimos un objeto prototipo y luego usamos `Oject.create()` para crear objetos que hereden de este, hemos definido una clase. Usualmente las instancias de una clase requiere ademas de su creación, ser inicializadas,  es comun definir una función que cree e inicialice los nuevos objetos.

Por ejemplo. Una clase simple en JavaScript seria:

```js
function range(from, to) {
    let r = Object.create(range.methos);
    r.from = from;
    r.to = to;

    return r;
}


// Se crea un objeto que sirva de prototipo
range.methods = {
    includes(x) { return this.from <= x && x <= this.to; },

    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },

    toString() { return "(" + this.from + "..." + this.to + ")"; }
};

let r = range(1, 3);
r.includes(2);
r.toString();
[...r];

```

Algunas cosas a tener en cuenta del ejemplo anterior:

- Define una `función fábrica` range.
- La función `range()` define las propiedades from y to en cada objeto.
- El objeto `range.methods` usa la sintaxis de ES6 para definir los métodos.
- Los métodos heredados desde el objeto `range.methods` todos pueden hacer uso de las propiedades que se inicializan en la función fábrica `range()`. El uso de `this` es una carácteristica fundamental de los métodos en cualquier clase.

## Clases y constructores

Las invicaciones de constructores con usando `new` automaticamente crean un nuevo objeto, asi el constructor en si mismo no necesita inicializar el estado del nuevo objeto. La carácterística crítica de la invocación de constructores es que la propiedad prototype del constructor es usada como prototipo del nuevo objeto (recordar que casi todos los objetos tienen prototypo, pero solo unos pocos tienen la propiedad prototype). Por esto, **todos los objetos creados con la misma función constructora heredan del mismo objeto y son además miembros de la misma clase.**

El siguiente ejemplo reescribe el ejemplo anterior y muestra como usar una función constructora en lugar de una clase.

```js
function Range(from, to) {
    this.from = from;
    this.to = to;
}

Range.prototype = {
    includes: function(x) { return this.from <= x &&  x <= this.to; },

    [Symbol.iterator]: function*() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield xM
    },

    toString: function() { return "(" + this.from + "..." + this.to + ")"; }

}

let r = new Range(1,3);
r.includes(2);
r.toStrinig();
[...r];
```

En el ejemplo anterior, podemos notar que, las funciones constructoras por convención comienzan su nombre con la primera letra en mayúsculas.

Debido a que la función constructora se invoca con `new` este crea automaticamente el nuevo objeto, por lo cual no es necesario usar `Object.create()`. Con el operador `new` el objeto es creado antes que el constructor sea llamado y es accesible mediante `this`, asi la función constructora solo debe inicializarlo.

La invocación del constructor automaticamente crea un nuevo objeto, invoca el constructor como un método del nuevo objeto y retorna el nuevo objeto.

Los constructores son escritos de forma que deben invocarse con la palabra clave `new`, las funciones constructoras no trabajan  bien sin son invocadas como funciones.

**Nombre del objeto prototipo creando clases con constructores**  
Cuando usamos una función constructora, en lugar de una función fabrica, debemos nombrar al objeto prototipo con el nombre de la función constructora. Como en el ejemplo anterior:

```js
// La función constructora es Range
function Range() { }

// El objeto prototipo debe ser nombrado:
Range.prototype = { }
```

Esto es obligatorio. Una invocación del constructor Range() automaticamente usara `Range.prototype` como prototipo de un nuevo objeto `Range`.

**Funciones constructoras y funciones flecha**  
Debemos recordar que las `arrow functions` no tienen una propiedad prototype, por lo que no pueden ser usadas como funciones constructoras. Por otro lado, las funciones flecha heredan el contexto `this` desde donde son definidas en lugar desdee donde son invocadas, por lo que esto las hace inútiles para métodos ya que la carácteriscas de los métodos es que deben usar `this` para referirse a la instancia del objeto en el cual fueron invocados. ES6 no permite crear métodos con `arrow functions`.

### Constructores identidad de clase e instanceof

Dos objetos son intancias de la misma clase si y solo si heredan desde el mismo objeto prototypo. A la vez, dos funciones constructoras pueden tener la misma propiedad prototype que apunte al mismo objeto prototype, entonces, ambas funciones constructoras pueden usarse para crear instancias de la misma clase.

Podemos usar el operadoro `instanceof`. La expresión `o instanceof C` evalua a true si `o` hereda desde `C.prototype`. La herencia no necesita ser directa, si `o` hereda desde un objeto que a su vez hereda de otro objeto que hereda de `C.prototype`, la expresión aun evalua a true.

Por ejemplo:

```js
function Strange() {}
Strange.prototype = Range.prototype;

// Esto evalua a verdadero
new Strange() instanceof Range;
```

Podriamos definir una clase sin una función constructora, así no habria manera que `instanceof` con esa clase. En su lugar, podemos comprobar si un objeto es miembro de una clase sin constructor con el método `isPrototypeOf()`. Por ejemplo:

```js
range.methods.isPrototypeOf(r);
```

### La propiedad constructor

Cada función regular en JavaScript automaticamente tiene una `propiedad prototype`. El valor de esa propiedad es un objeto el cual tiene una sola, no enumerable, `propiedad constructor`. El valor de la `propiedad constructor` es el objeto de la función. Así:

```js
// Definimos una función vacia que se asigna a la variable F. Recordemos que las funciones son objetos de funciones, por lo que F contendrá el objeto función.
let F = function() {}

// Guardamos en la variable p el valor de la propiedad prototype del objeto de la función definida anteriormente.
let p = F.prototype;

// Luego se tiene que en la variable p se cuentra guardado un objeto que solo almacena la propiedad constructor, la cual se almacena en la variable c.
let c = p.constructor;

// Finalmente se compara el valor de la variable se, es decir el valor de la propiedad constructor y se tiene que este valor es el mismo que el objeto funcion.
console.log(c === F);
```

Lo anterior quiere decir que los objetos tipicamente heredan una propiedad constructor que referencia a su constructor. Esta propiedad constructor nos entrega la clase de un objeto:

```js
let o = new F();
o.constructor === F;
```

Cuando un objeto no tiene la `propiedad constructor`, podemos definirla explicitamente:

```js
Range.prototype = {
    constructor: Range;
}
```

Otra técnica antigua fue usar un objeto prototype predefinido con su `propiedad constructor` y añadirle métodos:

```js
Range.prototype.includes = function(x) {
    return this.from <= x && x <= this.to;
};

Range.prototype.toStringg = function() {
    return "(" + this.from + "..." + this.to + ")"; 
};
```

## Clases con la palabra clave Class

ES6 introdujo la palabra clave `class`. Si se reescribe la clase range con la palabra clave `class` tenemos:

```js
class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    includes(x) { return this.from <= x && x <== this.to; }

    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }

    toString() { return `(${this.from}...${this.to})`; }
}

let r = new Range(1,3);
r.includes(2);
r.toString();
[...r];
```

La instroducción de la palabra clave `class` no altera la naturalezaz fundamental de las clases de JavaScript basadas en prototipos. La nueva sintaxis solo es más clara y conveniente.

Debemos considerar alguans coass sobre la sintaxis con la palabra clave `class`:

- Luego de la palabra clave `class` debe continuar el nombre de la clase, seguida por las llaves del cuerpo de esta.
- El cuerpo de la clase incluye la definición de métodos que se escriben usando `shorhand`. Los métodos no van separados por comas.
- Si la clase no necesita inicialización, es posible omitir el constructor, pero se generará un contructor vacío implicitamente.

**Definir subclases**  
Para definir subclases, se puede usar la palabra reservada `extends` en conjunto con la palabra reservada `class`.

```js
class Span extends Range {
    constructor(star, length) {
        if (length > 0) { super(start, start + length); }
        else { super(start + length, start); }
    }
}
```

**Declaración de clasess**
Como las funciones, las clases pueden ser declaradas de manera expresada o en como bloque:

```js
// Declaramos una clase de forma expresada
let Square = class { constructor(x) { this.area = x*; } }

// Se usa la clase anterior consultando su propiedad area.
new Square(3).area
```

La definición de clases expresadas pueden incluir opcionalmente un nombre. Si se provee un nombre, ese nombre será solo definido dentro del cuerpo de la clase en si mismo.

Se deben mencionar un par de cosas importantes sobre la declaración de clases con la palabra clave `class`:

- Todo el código dentro del cuerpo de clase se encuentra en `strict mode`.
- La definición de clases no es elevada como las funciones `hoisting`. Por lo que no es posible instanciar una clase antes de definirla.

### Métodos estáticos

Es posible definir métodos estaticos dentro del cuerpo de la clase poniendo un prefijo a la declaración del método con la palabra clave `static`. Los métodos estáticos son definidos como propiedades de la función constructora en lugar que como propiedades del objeto prototype.

Por ejemplo:

```js
class Rage {
    static parse(s) {
        let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
        if(!matches) {
            throw new TypeError(`Cannot parse Range from "${s}"`);
        }
        return new Range(parseInt(matches[1]), parseInt(matchess[2]));
    }
}

// El método parse se invoca sobre el constructor, no sobre una instancia.
let r = Range.parse('(1...10)');

// Si invocamos el método directamente como método de instancia obtendremos un error.
r.parse('(1...10)');
```

El método del ejemplo anterior es `Range.parse()`, no `Range.prototype.parse()` y se debe invocar a través del constructor,  on de una instancia.

Debido a que los métodos estáticos son invocados en el constructor, en lugar de en una instancia en particular, casi nunca tendrá sentido usar `this` en un método estático.

### Getters, Setters y otras formas de métodos

Dentro del cuerpo de una clase, es posible definir `métodos setters` y `métodos getters`, como se hace en los objetos literales. En general, toda sintaxis `shorhand` permitida en los objetos literales para definición de métodos, es permitida en el cuerpo de la clase.

### Campos públicos, privados y estáticos

Si se desea definir un campo, lo que en programación orientada a objetos es sinónimo de una propiedad para una instancia de clase, se debe hacer en el constructor o en uno de los métodos.

**Definición de campos estáticos**  
Si se decia definir campos estáticos, se puede hacer fuera del cuerpo de la clase, después de que la clase fuera definida o dentro del cuerpo.

La siguiente manera es la forma en la que se define un campo estático de sintaxis sugerida, agregando la palabra clave `static` antes del nombre del campo.

```js
class MyClass {
  static staticField = 'static field';
}
```

Si se añade `static` a un campo público o privado, esos campos serán creados como propiedades del constructor en lugar depropiedades de instancia.

```js
static integerRangePattern = /^\((\d+)\.\.\.(\d+)\)$/;
static parse(s) {
    let matches = s.match(Range.integerRangePattern);
    if (!matches) {
        throw new TypeError(`Cannot parse Range from "${s}".`)
    }
    return new Range(parseInt(matches[1]), matches[2]);
}
```

**Sintaxis nueva de campos públicos**  
La nueva sintaxis para camppos publicos de instancia nos permite hacer lo siguiente:

```js
class Buffer {
    constructor() {
        this.size = 0;
        this.capacity = 4096;
        this.buffer = new Uint8Array(this.capacity);
    }
}

// Se reescribe la clase anterior con nueva sintaxis
class Buffer {
    size = 0;
    capacity = 4096;
    buffer = new Uint8Array(this.capacity);
}
```

Los campos se han movido afuera del constructor y ahora aparecen directamente en el cuerpo de la clase.

El `this` que aparecia a la izquierda no es necesario, aun se debe agregar el `this` para referisnos a los campos de la clase, como se ve en la asignación del campo `buffer` del ejemplo anterior.

Es posible declarar los campos sin asignarles un valor, solo escribiendo el nombre, si se hace esto, el valor del campo será `undefined`. Es mejor siempre entrgar un valor inicial explícito a los campos.

**Definición de campos privados**  
Tambiés es posible definir campos privados de instacia comenzando el nombre del campo con un `#`. Este campo podrá ser usado dentro del cuerpo de la clase con el prefijo `#`, el campo será invisible, inaccesible y además inmutable para cualquier código fuera del cuerpo de la clase.

```js
// Se crea una clase Buffer que contiene un campo privado, y se define un método getter que devuelve el valor del campo privado.
class Buffer {
    #size = 0;
    get size() { return this.#size; }
}
```

Los campos privados deben ser declarados antes de que sean usados. No es posible solo escribir `this.#size = 0` en el constructo de una clase a menos que se haya incluido la declaración del campo directamente en el cuerpo de la clase.

**Campos privados estáticos**  
Si se desea un campo estático, que solo sea accesible por la clase, podemos usar la notación hash `#` acompañada de la palabra clave `static`.

>El siguiente ejemplo fue obtenido a través de GTPchat:

```js
class MyClass {
  static #privateStaticField = 'private static field';

  static staticMethod() {
    console.log(MyClass.#privateStaticField);
  }
}

MyClass.staticMethod(); // "private static field"
```

En este ejemplo, se ha definido un campo privado estático `#privateStaticField` en la clase `MyClass`. Luego se ha definido un método estático staticMethod que accede y utiliza el campo privado estático.

Cuando se llama al método estático `staticMethod` a través de la clase `MyClass`, se imprime en la consola el valor del campo privado estático `#privateStaticField`.

Es importante tener en cuenta que los campos privados estáticos sólo pueden ser accedidos y utilizados por métodos estáticos de la clase. Los métodos estáticos son métodos de la clase en sí y no se asignan a cada instancia de la clase. En su lugar, se pueden acceder directamente a través de la clase y no se pueden acceder a través de una instancia de la clase.

### Ejemplo de clase: Número complejo

La siguiente clase define un número complejo.

```js
class complex {
    constructor(real, imaginary) {
        this.r = real;
        this.i = imaginary;
    }

    plus(that) {
        return new Complex(this.r + that.r, this.i + that.i);
    }

    times(that) {
        return new Complex(
            this.r * that.r - this.i * this.i,
            this.r * that.i + this.i * that.r
        );
    }

    static sum(c, d) { return c.plus(d); }
    static produc(c, d) { return c.times(d); }

    get real() { return this.r; }
    get imaginary() { return this.i; }
    get magnitude() { return  Math.hypot(this.r, this.i); }

    toString() { return `{${this.r}, ${this.i}}`; }

    equals(that) {
        return that instanceof Complex &&
            this.r === that.r &&
            this.i === that.i;
    }
}

// Se definen campos que actuan como campos estáticos fuera del cuerpo de la clase
Complex.ZERO = new Complex(0,0);
Complex.ONE = new Complex(1,0);
Complex.I = new Complex(0,1);

// Una vez creada la clase, podremos usar su constructor para instanciar de la siguiente manera
let c = new Complex(2, 3);
let d = new Complex(c.i, c.r);
c.plus(d).toString();
c.magnitude;
Complex.product(c, d);
Complex.ZERO.toString();
```

## Añadir métodos a clases existentes

Un objeto hereda propiedades desde su prototipo, incluso si las propiedades del prototipo cambian después de que el objeto es creado. Esto significa que podemos aumentar las clases solo agregando nuevos métodos a su objeto prototipo. Por ejemplo, agregar un método a la clase creada anteriormente sería de la siguiente manera:

```js
Complex.prototype.conj = function() { return new Complex(this.r, -this.i); };
```

También podemos agregar métodos a los objetos prototipo de las clases built-in de JavaScript, lo cual significa que podemos añadir métodos a `numbers`, `strings`, `arrays`, `functions`, y así. Esto es útil para implementar nuevas características del lenguaje en versiones antiguas. Sin embargo, añadir métodos a los prototipos de los tipos `built-in` es generalmente considerado una mala idea, ya que podría causar confusión e incompatibilidad en el futuro.

```js
// Invoca la función f tantas veces como se lo indiquemos
Number.prototype.times = function(f, context) {
    let n = this.valueOf();
    for (let i = 0; i < n; i++) {
        f.call(context, i);
    }
};
```

Es incluso posible añadir métodos a `Object.prototype` haciendolos disponibles para todos los objetos. Pero esto nunca es algo bueno, ya que añadir algo a `Object.prototype` sería visible por bucles `for/in` causando confusión. Podria evitarse que nuevas propiedades fuesen visibles usando `Object.defineProperty()`, para hacer propiedades no enumerables.

## Subclases

En programación orientada a objetos, una clase B puede extender otra clase A. Decimos que A es superclase de B y que B es subclase de A. Instancias de B heredan métodos de A. La clase B podría definir sus propios métodos, algunos de los cuales podrían sobreescribir métodos con el mismo nombre heredados desde la clase A.

### Subclases y prototipos

Supongmos que se define una subclase `Span`de la clase `Range`. Una instancia de `Span` también sería una instancia de la super clase `Range`.

Un instancia de `Span` heredará métodos desde `Span.prototype`, pero tambien de `Range.prototype`.

```js
function Span(start, span) {
    if (span >= 0) {
        this.from = start;
        this.to = start + span;
    } else {
        this.to = start;
        this.from = start + span;
    }
}

// Nos aseguramos que Span prototype herede de Range prototype
Span.prototype = Object.create(Range.prototype);

// No deseamos heredar Range.prototpe.constructor, entonces definimos un constructor.
Span.prototype.constructor = Span;

// Se define un método toString() que sobre escribe el método heredado
Span.prototype.toString = function() {
    return `(${this.from}...+${this.to - this.from})`;
};

```

La linea clave del ejemplo anterior es la siguiente:

```js
Span.prototype = Object.create(Range.prototype);
```

**Invocación de métodos en superclase**  
Un robusto mecanismo de herencia necesita permitirnos invocar métodos de la superclase, pero antes de ES6, JavaScript no tenia una manera simple de hacerlo. Afortunadamente desde ES6 este problema se ha resuelto conn la incorporación de la palabra clave `super`.

### Subclases con extends y super

En ES6 y posterior, es posible crear superclases simplemente añadiendo la clausula `extends` en la declaración de una clase. Es posible incluso heredear con este mecanismo de clases `built-in`.

```js
// Se crea una clase que extiende de la clase built-in Array
// el método fist retorna el primer elemento del array
// el método last retorna el último elemento del array
class EZArray extends Array {
    get firts() { return this[0]; }
    get last() { return this[this.length - 1]; }
}

// Se crea una instancia de la clase EZArray
let a = new EZArray();

// Se comprueba que a sea instancia de EZArray
a instance of EZArray;

// Se comprueba que a es instancia de Array. lo que es verdadero
// ya que Array.prototype se encuentra en la cadena de herencia
a instance of Array;

// Es posible usar métodos heredados de la clase Array
a.push(1,2,3,4,5);
a.pop();

// Es posible usar métodos propios de la clase EZArray
a.last;

// Es posible manipular los elementos como se hace con elementos
// de la clase array
a[1];

// Es posible usar métodos estaticos de la clase Array, los cuales
// También son heredados.
Array.isArray(a);
```

como se ve en el ejemplo anterior, tanto métodos estáticos como métodos de clase son heredados. Esto nos permite `extends`. EZArray() en realidad es una función, pero hereda de Array().

EZArray hereda los métodos de instancia ya que EZArray.prototype hereda desde Array.prototype.

```js
// Lo siguiente da como resultado verdadero
Array.prototype.isPrototypeOf(EZArray.prototype)
```

EZArray hereda los métodos estáticos y propiedades estáticas porque hereda desde Array. Esta es una especial característica de la palabra clave `extends` y no era posible antes de ES6.

```js
// Lo siguiente da como resultado verdadero
Array.isPrototype(EZArray);
```

El siguiente ejemplo muestra el uso de la palaba clave `super`

```js
class TypedMap extends Map {
    constructor(keyType, valueType, entries) {
        if(entries) {
            for(let [k, v] of entries) {
                if (typeof k !== keyType || typeof v !== valueType) {
                    throw new TypeError("Wrong type for entry [${k}, ${v}]");
                }
            }
        }

        super(entries);

        this.keyType = keyType;
        this.valueType = valueType;
    }

    set(key, value) {
        if (this.keyType && typeof key !== this.keyType) {
            throw new TypeError(`${key} is not type of ${this.keyType}`);
        }
        if (this.valueType && typeof value !== this.valueType) {
            throw new TypeError(`${value} is not type of ${this.valueType}`);
        }
        
        return super.set(key, value);
    }
}
```

Notar que el constructor invoca a la super clase usando la palabra clave `super` como si fuese un nombre de función.

En el ejemplo anterior, decimos que el método `set()` sobre escribe al método `set()` de la clase `Map`. El método `set()` de la subclase no tiene forma de añadir valores a `map` por si mismo, por lo cual usamos el método `set()` de la superclase. Así usamos `super()` para invocar el método `set()` de la super clase, en este contexto, `super()` funciona más como la palabra clave `this`, este se refiere al objeto actual, pero nos permite acceder a los métodos sobreescritos  definidos en la superclase.

> Duda: ¿Cómo se usaría esta clase?

Antes de la introducción de la palabra clave super en JavaScript con ECMAScript 6 (también conocido como ECMAScript 2015), para invocar métodos de la superclase desde una subclase, se podía hacer de la siguiente manera:

```js
function Animal(name, species) {
  this.name = name;
  this.species = species;
}

Animal.prototype.sayHello = function() {
  console.log(`Hola, soy un ${this.species} y mi nombre es ${this.name}`);
}

function Cat(name, breed) {
  Animal.call(this, name, 'gato');
  this.breed = breed;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function() {
  // Invocamos el método sayHello() de la superclase
  Animal.prototype.sayHello.call(this);
  console.log('Miau');
}

const miGato = new Cat('Misifú', 'siames');
// Imprime "Hola, soy un gato y mi nombre es Misifú" y luego "Miau"
miGato.meow(); 
```

En este ejemplo, hemos creado una clase Animal con un método sayHello() y luego una clase Cat que hereda de Animal. Para invocar el método sayHello() de la superclase desde el método meow() de la subclase, usamos la sintaxis SuperClass.prototype.methodName.call(this). Esto nos permite pasar un contexto de this correcto al método de la superclase.

Ten en cuenta que esta sintaxis puede ser un poco verbosa y poco intuitiva, especialmente cuando se trata de invocar varios métodos de la superclase en diferentes lugares de la subclase. Con la introducción de la palabra clave super en ECMAScript 6, se hizo más fácil invocar métodos de la superclase de forma más clara y concisa

**Reglas a considerar para el uso de `super()`**  

- Es conveniente inicializar las superclases primero y luego las subclases.
- Si se define una clase con la palabra clave `extends`, entonces si deseamos llamar al constructor de la super clase debemos usar `super()` para invocarlo.
- Si no se define un constructor en una subclase, será definido uno automaticamente. Lo que significa que este constructor tomará cualesquiera sean los valores que se le pasen al crear una instancia de la subclase y se los pasará a la subclase.
- Se podría no usar `this` dentro del constructr de una subclase hasta despues de haber invocado el constructor de la super clase con `super()`. Esto refuerza la regla que las superclases deben inicializarse antes que las subclases.

### Delegación en lugar de herencia

Es posible crear nuevas clases sin usar herencia, en su lugar envolviendo o componiendo otras clases. Esta aproximación es a menudo llamada composición y es una máxima en la programación orientada a objetos preferir la composición sobre la herencia.

En el siguiente ejemplo se define una clase que tiene la naturaleza de una clase Set, mediante la delegación en lugar de la herencia.

```js
class Histogram {
    constructor() { this.map = new Map(); }

    count(key) { return this.map.get(key) || 0; }

    has(key) { return this.count(key) > 0; }
    
    get size(key) { return this.map.size; }
    
    add(key) { this.map.set(key, this.count(key) + 1); }

    delete(key) {
        let count = this.count(key);
        if (count === 1) { this.map.delete(key); }
        else if (count > 1) { this.map.set(key, count - 1); }
    }

    [Symbol.iterator]() { return this.map.keys(); }

    keys() { return this.map.keys(); }
    values() { return this.map.values(); }
    entries() { return this.map.entries(); }
}
```

En el ejemplo anterior, debido a que se usa la delegación en lugar de la herencia, una instancia de `Histogram` no será instancia de `Set` o `Map`.

### Herencia de clases y clases abstractas

Una clase abstracta es una super clase que define una implementación parcial que todas las subclases heredan y comparten. Las subclases solo deben definir su propio comportamiento implementando los métodos definidos, pero no implementados, de la superclase. **Tener en cuanta que JavaScript no cuenta con alguna definición formal**

> Duda ¿Existe una manera formal de crear clases abstractas en javascript?

Una clase abstracta es una clase que no puede ser instanciada directamente. En su lugar, se espera que se extienda o herede de la clase abstracta y se sobrescriban cualquier método abstracto en la clase hija. Un método abstracto es un método que no tiene una implementación y debe ser sobrescrito en una clase hija.

```js
// Clase AbstractSet define solo un método 
class AbstractSet {
    has(x) { throw new Error("Abtract method"); }
}

class NotSet extends AbstractSet {
    constructor(set) {
        super();
        this.set = set;
    }

    has(x) { return !this.set.has(x); }

    toString() { return `{ x | x e ${this.set.toString()} }`; }
}

class RangeSet extends AbstractSet {
    constructor(from, to) {
        super();
        this.from = from;
        this.to = to;
    }

    has(x) { return x => this.from && x <= this.to; }

    toString() { return `{ x | ${this.from} < x < ${this.to} }`; }
}

// Creando una clase abstracta a través de heredar de otra clase abstracta
class AbstractEnumerableSet extends AbstractSet {
    get size() { throw new Error("Abstract method"); }
    [Symbol.iterator]() { throw new Error("Abstract method"); }

    isEmpty() { return this.size === 0; }
    toString() { return `{${Array.from(this).join(", ")}}`; }
    equals(set) {
        if (!(set instanceof AbstractEnumerableSet)) return false;
        if(this.size !== set.size) return false;

        for (let element of this) {
            if (!set.has(element)) return false;
        }

        return true;
    }
}

// Clase singleton que hereda de AbstractEnumerableSet
class SingletonSet extends AbstractEnumerableSet {
    constructor(member) {
        super();
        this.member = member;
    }
    has(x) { return x === this.member; }
    get size() { return 1;}
    *[Symbol.iterator]() {yield this.member; }
}


class AbstractWritableSet extends AbstractEnumerableSet {
    insert(x) { throw new Error("Abstract method"); }
    remove(x) { throw new Error("Abstract method"); }

    add(set) {
        for (let element of set) {
            this.insert(element);
        }
    }

    subtract(set) {
        for(let element set) {
            this.remove(element);
        }
    }

    intersect(set) {
        for(let element of this) {
            if(!set.has(element)) {
                this.remove(element);
            }
        }
    }
}


class BitSet extends AbstractWritableSet {
    constructor(max) {
        super();
        this.max = max;
        this.n = 0;
        this.numBytes = Math.floor(max / 8) + 1;
        this.data = new Uint8Array(this.numBytes);
    }

    _valid(x) { return Number.isInteger(x) && x >= 0 && x <== this.max; }
    _has(byte, bit) { return (this.data[byte] & BiteSet.bits[bit]) !== 0; }

    has(x) {
        if ( this._valid(x)) {
            let byte = Math.floor(x / 8);
            let bit = x % 8;
            return this._has(byte, bit);
        } else {
            return false;
        }
    }

    insert(x) {
        if (this._valid(x)) {
            let byte = Math.floor(x / 8);
            let bit = x % 8;
            if (!this._has(byte, bit)) {
                this.data[byte] |= BitSet.bits[bit];
                this.n++;
            }
        } else {
            throw new TypeError("Invalid set element: " + x);
        }
    }

    remove(x) {
        if (this._valid(x)) {
            let byte = Math.floor(x / 8);
            let bit = x % 8;
            if (this._has(byte, bit)) {
                this.data[byte] &= BitSet.masks[bit];
                this.n--;
            }
        } else {
            throw new TypeError("Invalid set element: " + x);
        }
    }

    get size() { return this.n; }

    *[Symbol.iterator]() {
        for(let i = 0; i <= this.max; i++) {
            if (this.has(i)) {
                yield i;
            }
        }
    }
}

BitSet.bits = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);
BitSet.masks = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);

```
