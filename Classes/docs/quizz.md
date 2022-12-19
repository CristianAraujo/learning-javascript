# Classes

1. ¿Qué son las clases?
2. ¿Que es una instancia de clase?
3. ¿En que se basan las clases en JavaScript?
4. ¿Si dos objetos heredan del mismo prototypo, significa que siempre que fueron creados por la misma función constructora? Explicar.
5. ¿JavaScript maneja de la misma manera la herencia que otros lenguajes orientados a objetos?

## Clases y prototypos

1. ¿Qué hace el método `Object.create()`?
2. ¿Además de la creación de un objeto, que suele requerirse? Explicar.
3. ¿En que consiste la técnica `factory function`? Dar un ejemplo y explicar.
4. ¿Cómo se reaciona clase y un prototypo?

## Clases y constructores

1. ¿Que es una función constructor y para que sirve?
2. ¿Cómo se invoca una función constructora?
3. ¿Qué hace la palabra reservada `new`? Explicar
4. ¿Cómo se relacion la función constructora con el prototypo del nuevo objeto al crear objetos con la invocación de prototypos? Explicar
5. ¿Todos los objetos que son creados con la misma función constructora tienen la misma clase?
6. ¿Cual es la diferencia entre instanciar objetos mediante una función constructora y la técnica `factory function`?
7. ¿Es posible crear objetos sin la invocación de una función constructora?
8. Dar un ejemplo de código de la creación de objetos mediante una función constructora y explicarlo detalladamente.
9. ¿Cuál es la convención por con la cual se deben nombrar las funciones constructoras?
10. ¿Una invocación de constructor necesita hacer uso de `Object.create() dentro de la función constructora para instanciar objetos? Explicar.
11. ¿Las funciones constructoras escritas para ser invocadas con la palabra reservada `new` pueden ser invocadas como funciones normales y comportarse correctamente?
12. ¿Es posible crear funciones constructoras con funciones flecha? Explicar.
13. ¿Es posible crear métodos con funciones flecha? Explicar

### Constructores, identidad de clase e instanceof

1. ¿Cuando consideramos a dos objetos como parte de la misma clase?
2. ¿Dos objetos creados a partir de diferentes funciones constructoras puede ser parte de la misma clase?
3. ¿Cómo se considera la función constructora para una clase?
4. ¿Qué es y qué hace el operador `instanceof`? Explicar su funcionamiento.
5. ¿`instanceof` verifica el uso de la función constructora con la que los objetos fueron creados?
6. ¿Por qué `instanceof` usa la función constructora como operando de la derecha?
7. Si se crean objetos sin una función constructora, ¿Cómo podemos comprobar si ambos son miembros de la misma clase?
8. ¿Qué hace el método `isPrototypeOf()`?

### La propiedad constructor

1. Como la técnica de `function factory`, ¿Se necesita siempre crear una función y un objeto prototypo aparte para craear una nueva instancia de clase?
2. ¿Las funciones simepre tienen la propiedad prototype?
3. Explicar la relcación entre el `objeto function`, la propiedad prototype, el valor de la propiedad prototype, `constructor prototype`, el valor de la propiedad `constructor`.
4. ¿Es posible agregar el valor de la propiedad `constructor` al objeto prototypo?
5. Dar un ejemplo de la técnica que se usaba para añadir métodos a clases en JavaScript antiguo. Explicar.

## Clases con la sintaxis Class

1. ¿Qué es `class`?
2. ¿Cuándo fue introducida la sintaxis `class`?
3. ¿La nueva sintaxis de clase afecta fundamentalmente la naturaleza con la que se crean las clases en JavaScript?
4. Dar un ejemplo de la creación de una clase con la nueva sintaxis usando `class`
5. ¿Qué incluse el cuerpo de una clase?
6. ¿Qué es el método constructor de una clase y que hace?
7. ¿Cómo se crea internamente el método constructor de una classe?
8. ¿Es posible omitir la creación de un método constructor? ¿Cuando?
9. ¿Los métodos dentro de una clase con la sintaxis de `class` deben llevar la palabra `function`?
10. ¿Qué sucede si se omite el método constructor?
11. ¿Qué es una subclase?
12. ¿Qué es extender de una clase?
13. ¿Cómo pueden definirse las subclases?
14. Dar un ejemplo de cómo extender de una clase?
15. Mencionar las maneras en que una clase puede ser definida, dar ejemplos.
16. ¿Una clase definida de manera expresada, puede ser anónima?
17. Dar ejemplo de como definir una clase expresa
18. ¿Si se le asisgna un nombre a una clase expresada, el valor del nombre que ámbito tiene?
19. ¿La creación de clases expresadas es tan comun como las funciones expresadas?
20. Dar ejemplos de donde podrían usarsarse realmente clases expresadas
21. El código dentro del cuerpo de las clases, ¿Está en modo estricto?
22. ¿La declaración de clases sufre `hoisting` como las funciones?
23. ¿Es posible usar clases antes de que estas fueran declaradas?

### Static Methods

1. ¿Qué es un método estático?
2. ¿Cómo definir métodos estáticos en JavaScript?
3. ¿Cual es la diferencia de los métodos estáticos con los métodos de instancia?
4. ¿De qué otra manera se les conoce a los métodos estáticos?
5. ¿Por qué los métodos estáticos son definidos como propiedades de la función constructora y no como propiedades del objeto prototype?
6. Los métodos estáticos, deben invocarse a través del constructor, por lo que ¿Si se tiene una clase que no fue creada a través de un constructor, como lo sería con `Object.create(), aun esta clase puede tener métodos estáticos? Dar ejemplo.
7. ¿Es posible usar `this` en método estáticos?

### Getters, Setters y otras fomas de métodos

1. ¿Qué son los métodos setters y getters?
2. ¿Cual es la diferencia de definir setters y getters en clases y en objetos literales?
3. Dar ejemplos de métodos setters y getters y explicar el código.

### Campos públicos, privados y estáticos

1. ¿A qué se le conoce como campo en programación orientada a objetos?
2. ¿Un campo solo puede ser definido dentro del constructor de la clase?
3. Un campo en una clase de javaScript ¿Puede ser definido directamente en el cuerpo de la clase o necesita siempre estar dentro de un método? Explicar.
4. ¿Los métodos estáticos deben ser siempre definidos fuera de la clase? Explicar.
5. ¿Cuál es la diferencia entre escribir los campos dentro del constructor y fuera del constructor?
6. Al declarar campos, ¿Siempre debemos usar `this`? Explicar.
7. ¿Siempre estamos obligados a inicializar los campos que declaramos dándoles un valor?
8. ¿Qué pasa si no inicializamos los campos que se declaran?
9. ¿Qué es un campo público?
10. ¿Que es un campo privado?
11. ¿Cómo declarar un campo privado en una clase?
12. ¿Es posible declarar campos privados directamente en el cuerpo de una función?
13. Dar ejemplo de declaración de campos privados
14. ¿Es posible crear un campo privado y estático? Dar ejemplo.
15. ¿Que pasa si se crea un campo privado y estático?
16. Dar un ejemplo de una clase que utilice todos los modificadors de acceso de campos y métodos

## Añadir métodos a clases existentes

1. ¿Por qué es posible añadir métodos a clases existentes? Dar un ejemplo de como añadir un método a una clase existente
2. ¿Es posible añadir métodos a clases built-in? Dar ejemplo y explicar.
3. ¿Es bueno añadir método a clases built-in?
4. ¿Para que sirve Object.defineProperty()?
5. Nombrar algunos efectos colaterales de añadir método a clases built-in
6. ¿Qué sucede si añadimos método a `Object.prototype`?

## Subclases

1. ¿Qué es una subclase?
2. ¿Cómo podemos crear subclases en ES6?
3. ¿Que sucede cuando una clase hereda de otra?
4. ¿Qué es una superclase o clase base?
5. ¿Qué sucede si una subclase implementa un método con el mismo nombre de la super clase?

### Subclases y prototipos

1. ¿Cómo se creaban subclases antes de ES6? Dar ejemplo y explicar.
2. ¿Que debe permitirnos un buen mecanismo de herencia?

### Subclases con extends y super

1. ¿Cómo se crean subclases desde ES6?
2. Dar ejemplo de creación de subclase con la sintaxis ES6.
3. ¿Es posible crear subclases desde clases built-in?
4. Dar ejemplo de creación de subclase desde una clase built-in.
5. Al extender desde funciones built-in, ¿Los métodos estáticos son hererados?
6. Cuando se extiende desde una super clase. En realidad lo que sucede es que la subclase es una función cuyo prototype es la función de la cual esta heredando. ¿Verdadero o falso? Fundamentar.
7. Dar un ejemplo de una clase que extienda la clase Map(). (Como el ejemplo 9.6 de JavaScript Definitive Guide - pág. 239)
8. ¿Es obligatorio usar `super()` cuando se hereda desde alguna clase en JavaScript?
9. ¿`super()` debe invocarse desde el constructor de la clase solamente?
10. ¿Que sudece si se invoca `super()` fuera del constructor de la subclase? ¿La clase base es instanciada correctamente?
11. ¿Que sucede si no se define un constructor en la subclase?
12. ¿Cómo se inicializa la superclase si no se define un constructor en la subclase?
13. ¿Por qué se recomienza primero llamar `super()` antes de usar `this` en la subclase?
14. ¿Cómo desde una superclase se podría conocer que subclase esta heredando de ella cuando es invocada con `super()`? Explicar.
15. ¿Es posible utilizar `this` en una subclase antes de inicializar la superclase? ¿Es recomendable?

### Delegación en lugar de herencia

1. ¿Qué es la delegación?
2. ¿De que otra manera es conocida la delegación?
3. ¿Qué deberia preferirse, delegación o herencia? Fundamentar.
4. Escribir un ejemplo de delegación de la clase Map. (Ejemplo 9-7 de JavaScript Definitive Guide - pág. 242)
