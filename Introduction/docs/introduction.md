# Introducción a JavaScript

javaScript es un lenguaje de programación de alto nivel, dinámico, interpretado, en el cual puede usar muy bien paradigmas funcionales y la orientación a objetos. Es un lenguaje debilmente tipado.

El núcleo de JavaScript define una API mínima para trabajar con números, texto, arrays, sets, maps, y otras más, pero no incluye funcionalidad de entrada o salida. Entradas o salidas, como también características más sofisticadas son responsabilidad de entorno que aloja el lenguaje.

El entorno original de JavaScript es el navegador, pero desde el 2010, Node ha entregado a JavaScript acceso entero al sistema operativo.

## Explorando JavaScript

La manera más secilla de probar JavaScript es abrir el navegador y utilizar la pestaña de consola dentro de las herramienta de desarrollador, o también es posible instalar Node.

## Hola Mundo

Podemos usar las herramientas para desarrollador de nuestro navegador o utilizar node. Creamos un archivo en nuestro editor y lo guardamos con la extensión `.js`. Para mostrar un texto y otros valores en la terminal o en la pestaña de consola, usamos la función `console.log()`.

```js
console.log("Hola Mundo");
```

Con node ppodemos ejecutar nuestro archivo JavaScript con el comando `node nombre_archivo.js`. Si deseamos verlo en la consola del naveagdor, podemos crear un archivo HTML y llamar al nuestro script de JavaScript con la siguiente linea de código:

```html
<script src="hola.js"></script>

```

## Un tour por JavaScript

En el siguiente ejemplo se muestran algunas características de JavaScript.

```js
// Todos lo presedido por doble barras es un comentario
// Los comentarios explican el código JavaScript

// Una variable es un nombre simbolíco para un valor
// Las variables son declaradas con la palabra clave let
let x;              // Declara una variable llamada x.

// Valores pueden ser asignados a variables con un signo =
x = 0;              // La variable x tiene el valor 0
x                   // => 0: Una variable evalua a a su valor

// JavaScript soporta varios tipos de valores
x = 1;              // Números
x = 0.01;           // Números pueden ser enteros o reales
x = "Hello World";  // Cadenas de texto
x = 'JavaScript';   // Cadenas de texto en comillas simples
x = true;           // Valor boleano
x = false;          // Valor boleano
x = null;           // Valor especial que significa "Sin valor"
x = undefined       // Otro valor especial como null
```

**Expresiones y sentencias**  
Una expresión es una frase de JavaScript que puede ser evaluada para producir un valor.

Si las expresiones son como frases, entonces las sentencias en JavaScript son como oraciones completas. Mientras que las expresiones evaluan a algún valor, estas no hacen nada más. Por otro lado, las sentencias no tienen un valor, pero ellas alteran el estado del programa.

Podemos decir que es posible agrupar las sentencias, en sentencias se asignación, y las estructuras de control: condicionales, y bucles.

**Funciones**  
Una función es un bloque de código el cual es parametrizado y recibe un nombre. Las funciones son definas una vez y pueden ser ejecutadas múltiples veces. Un ejemplo de función es el siguiente:

```js
let y = 3;
function plus1(x) {
    return x + 1;
}
plus1(y);

let square = function(x) {
    return x * x*;
};
```

En ES6 se integra una nueva sintaxis para definir funciones, conocidas como funciones flecha, las que son comunes cuando se pasa a una función anónima como argumento a otra función.

```js
const plus1 = x => x + 1;
const square = x => x * x;
```

**Orientación a objetos**  
JavaScript soporta la orientación a objetos, per es significativamente diferente a la forma clásica de los lenguajes de programación orientados a objetos. Aquí un ejemplo de una clase que representa un punto en el plano cartesiano:

```js
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance() {
        return Math.sqrt(
            this.x * this.x + this.y * this.y;
        );
    }
}

let p = new Point(1, 1);
p.distance();
```
