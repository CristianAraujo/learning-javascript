# Cuestionario de funciones

## Definición de funciones

1. ¿Qué son las funciones?
2. ¿Cuales son los parámetros de una función y cuales son los argumentos?
3. ¿Las funciones son objetos en JavaScript?
4. Mencionar las maneras que se tienen para crear una función
5. ¿Qué es el identificador de una función y para que sirve?
6. ¿Cómo se comportan los parámetros de una función dentro de su cuerpo?

### Funciones declaradas

1. ¿Cuáles son las funciones declaradas y como se definen?
2. ¿Cuál es la principal particularidad de las funciones declaradas?
3. ¿Qué es es `hoisting`?
4. ¿Qué es la sentencia `return` y para que se usa?
5. ¿Todas las funciones deben tener una sentencia `return`?
6. ¿Qué sucede cuando una función no implementa una sentencia `return`?
7. ¿Qué sucede cuando dentro del cuerpo de una función se encuentra una sentencia `return`?

### Funciones expresadas

1. ¿Qué son las funciones expresadas?
2. ¿Las funciones expresadas deben llevar nombre?
3. ¿Cúal es la diferencia entre una función expresada con nombre y una anónima?
4. ¿Cual es la diferencia entre asignar una función expresada a una variable declarda con let, con const y con var?
5. ¿Cómo es tratado el nombre de una función expreasa cuando está tiene nombre?
6. ¿Las funciones expresadas son elevadas `hoisting` como las ddeclaradas?
7. ¿Es posible llamar a una función expresada antes de que esta sea creada en el código? Explique.
8. ¿Qué son las funciones expresadas autoinvocadas y como se crean?

### Funciones flecha

1. ¿Qué son las funciones flecha?
2. Mencionar y explicar la sintaxis de las funciones flecha
3. Mencionar cuando se puede omitir: parentesis, sentencia return y llaves del cuerpo de la función en una función flecha.
4. ¿Cúando una función flecha debe llebar paréntesis para sus parámetros?
5. ¿Cómo deben ser retornados los objetos literales desde funciones flecha que solo tienen una sentencia?
6. ¿Desde donde heredan la propiedad `this` las funciones flecha y que implicancias tiene esto?
7. ¿Las funciones flecha tienen la propiedad `prototype` y que implicancias tiene esto?

### Anidamiento de funciones

1. ¿Es posible crear funciones (anidar) dentro de otras funciones?
2. ¿Cúal es el ámbito de las funciones anidadas dentro de otras funciones?
3. ¿Cuándo el código de una función es ejecutado?
4. ¿En que consiste la invocación de una función?

## Invocación de funciones

1. ¿Cuales son las maneras en las que las funciones son invocadas en JavaScript?
2. ¿Cúal es la sintaxis con la que se invoca una función como función?
3. ¿Los argumentos en la función pueden ser expresiones? Explicar.
4. ¿Qué retorna una función si no encuentra la sentencia `return`?
5. ¿Qué retorna la función si la sentencia `return` no es seguida por algun valor?

### Invocación como métodos

1. ¿Cuando una función es invocada como método? Dar un ejemplo
2. ¿Cual es el contexto de invocación de una función invocada como método?
3. ¿A que se refiere `this` en funciones invocadas como métodos?
4. ¿Es posible usar notación de corchetes para invocar funciones como métodos?
5. ¿A que se refiere que los métodos reciven el objeto donde son invocados, como parámetro implicíto?
6. ¿Qué es el encadenamiento de métodos?
7. `this` tiene le mismo ámbito que las variables dentro de funciones? Explicar
8. ¿Cual es el valor de `this` dentro de funciones declaradas,anidadas dentro de métodos invocadas como funciones?
9. ¿Cual es el valor de `this` dentro de funciones declaradas, anidadas dentro de métodos e invocadas como méotodos?
10. ¿Cual es el valor de `this` dentro de funciones flecha anidadas dentro de métodos?

### Invocación como constructores

1. ¿Cómo se hace una invocación de una función como constructor?
2. ¿En que carácteristicas difere una invocación como constructor de las otras?
3. ¿Siempre la invocación de un constructor debe llevar parentesis?
4. ¿Qué crea la invocación de una función constructora?
5. ¿Cual será el contexto de invocación de la función constructora?
6. ¿Las funciones constructoras normalmente usan la sentencia `return`?
7. ¿Una función constructora puede retornar un valor primitivo?

### Invocación indirecta

1. ¿Qué es la invocación indirecta?
2. ¿Qué nos permiten `call()` y `apply` respecto al conexto de invocación?

### Invocación implicita de funciones

1. ¿Qué es la invocación implícita de funciones? Dar ejemplos.

## Argumentos y parámetros de funciones

1. ¿Cuales con los parámetros y cuales son los argumentos?
2. ¿Es posible especificar el tipo de dato esperado en los parámetros de una función?
3. ¿Es posible saber el número de argumentos pasados a una función?

### Parametros opcionales y por defecto

1. ¿Qué es un parámetro opcional?
2. ¿Como deben ser declarados los parámetros opcionales?
3. ¿Los parámetros opcionales pueden ubicarse al inicio de la lista de parámetros? Explicar.
4. ¿Qué es un parámetro por defecto?
5. ¿Cómo debe declararse un parámetro por defecto?
6. ¿Los valores de los parametros por defecto solo pueden ser constantes?
7. ¿Cuando se evaluan las expresiones pasadas como valores a los parámetros por defecto?
8. ¿Puedo usar el valor de uno de los parámetros obligatorios para definir una expresión asignada como valor a parámetros por defecto?

### Resto de parámetros y variable length de la lista de argumentos

1. ¿Cual es la sintaxis para crear una función que pueda recibir un número indefinido de argumentos?
2. ¿En que posición debe ser definido de la lista de parámetros debe ser definido el identificador de la variable que recebirá los parametros variables? Explicar.
3. ¿Como son manejados dentro del cuerpo de la función los parametros variabes recibidos? Explicar.
4. ¿Que valor puede tomar dentro de la función la estructura de datos que contiene los parametros variables y cual valor no tenndrá nunca?

### Objeto Argumentos

1. ¿Qué es el objeto argumentos?
2. ¿Como identificamos los argumentos cuando hacemos uso del objeto argumentos?
3. ¿Cómo acceder a los valores del objeto argumentos?
4. ¿Se debería usar el objeto argumentos después de ES6?

### Spread operator en las llamadas a funciones

1. ¿Cómo se comporta la sintaxis de tres puntos `...` en la definición de funciones? Dar ejemplo.
2. ¿Cómo se comporta la sintaxis de tres puntos `...` en la invocación de funciones? Dar ejemplo.

### Destructurar argumentos de funciones en parámetros

1. ¿En que consiste la destructuración `(destructuring)`?
2. ¿Cómo se destructura un array? Dar un ejemplo.
3. ¿Cómo se destructura un objeto? Dar un ejemplo.
4. Dar un ejemplo de una destructuración de un objeto, en donde los nombres de los argumentos sean diferentes a los de los parámetros.
5. ¿Cómo debe ser la colocación de valores y nombres en destructuraciones en las cuales se usa el nombre de las propiedades? (Ej: {x: x1, y: y1})
6. ¿Cómo se asignan los valores cuando se usan los nombres de los parámetros y argumentos?
7. ¿Es posible definir parametros por defecto en conjunto con la destructuración? Dar un ejemplo.
8. ¿Es posible la invocación de funciones con paso de argumentos del modo `name=value` en JavaScript? Si no lo es, ¿Cómo es posible aproximarse?
9. ¿En que consiste al destructuración con el uso conjunto de parametro `rest`? Dar ejemplo.
10. ¿Cómo se usa la destructuración de arrays en conjunto con el parámetro `rest`? Dar ejemplo.
11. ¿Cómo se usa la destructuración de objetos en conjunto con parámetro `rest`? Dar ejemplo.
12. ¿En que consiste la destructuración compleja? Dar un ejemplo.

### Tipos de datos en argumentos

1. ¿Es posible usar datos tipados en argumentos?
2. ¿Cómo es recomendable realizar la comprobación de tipos?

## Funciones como valores

1. ¿Qué nos permite conseguir el tratar las funciones como valores?
2. Crear funciones que calculen áreas para triangulo rectangulo, circulos, rectangulos y cuadrados. Posteriormente crear una función que haga uso de ellas como valores.

### Definir propiedades propias para funciones

1. ¿Qué significa que las funciones tengan propiedades?
2. Nombrar un caso común donde pueda usarse una propiedad de función.
3. Crear una función que calcule el factorial de un número pasado como parámetro y que use una propiedad de función para almacenar resultados parciales como caché.
