# JavaScript Asíncrono

Podemos entender la asincronía como la capacidad de un lenguaje de programación para ejecutar tareas, que en principio parecen ejecutarse de forma simultanéa, sin bloquear el flujo de la ejecución del programa. Por esto último podemos decir que existen dos tipos de códificación: bloqueando y no bloqueante.

## Código bloqueante

Llamamos código bloqueante a aquel que bloquea el flujo del programa hasta que termine la ejecución de la tarea en aquel momento. Por ejemplo, si tenemos un programa imperativo con una lista de instrucciones, entre las cuales tenemos un bucle muy largo, este consumirá el tiempo que sea necesario hasta completar todas las iteraciones, bloqueando el flujo, y cuando termine, el flujo del programa podrá continuar.

```js
for (let i = 0; i < 10_000_000; i++) {
    console.log(`El valor de i es: ${i}`);
}

let saludo = (nombre) => console.log(`Hola ${nombre}!`);
```

## Código no bloqueante

El código no bloqueante es aquel que permite que el flujo del programa continue sin importar cuanto tarden las tareas a ejecutar. Para lograr esto, JavaScript utiliza el mecanismo conocido como concurrencia y además hace uso de las herramientas disponibles por su entorno de ejecución.

## Tipos de asincronía

### Paralelismo

El paralelismo es cuando las tareas se ejecutan en diferentes hilos de trabajo, como su nombre lo indica, de manera parelela.

### Concurrencia

La concurrencia es cuando las tareas se realizan en el mismo hilo de trabajo, pero de manera intercalada, dando la sensación de que se desarrollan de manera paralela. JavaScript logra la ascronía con mediante la combinación de la concurrencia y la delegación de tareas fuera de su motor, delegandolas a otros hilos dentro de su entorno de desarrollo.

![Concurrencia y paralelismo](https://miro.medium.com/max/4800/1*cFUbDHxooUtT9KiBy-0SXQ.jpeg)

## ¿Cómo funciona JavaScript?

JavaScript logra una ejecución asíncrona mediante la concurrencia y la delegación de tareas a otros hilos dentro de su entorno de ejecución. Primero explicaremos cual es el motor de JavaScript.

Aunque JavaScript sea un lenguaje de un solo hilo, en algunos entornos de ejecución como por ejemplo en NodeJS podemos hacer uso de múltiples hilos usando el módulo llamado worker_threads.

## El motor de JavaScript

El motor de JavaScript solo contiene una pila de llamados y el "Heap" que el espacio en memoria que usa cada contexto creado por la pila de llamados.

Podemos entender la pila de llamados como una estructura FIFO, donde se apilan todos los llamados. Algunos llamados deberán ser procesados por el motor de JavaScript, mientras otros serán procesados fuera de su motor, pero dentro de su entorno de ejecución.

## Entorno de ejecución de JavaScript

Un entorno de ejecución o Runtime Environment es donde el código es ejecutado, en el caso de JavaScript, este puede tener diferentes entornos,  como lo pueden ser el navegador, nodeJS u otros.

El entorno de ejecución además proveerá diferentes herramientas y pilas de llamados para diferentes tareas, quitando la responsabilidad al motor de JavaScript de procesar todo, y así lograr la concurrencia.

El entorno de ejecución contine:

- El motor de JavaScript
  - Espacio en memoria (Heap)
  - Pila de llamados (CallStack)

- Web APIs
- Cola de trabajo (Tasks/jobs queue)
- Cola de tareas (Microtask queue)
- Cola de renderizado (Render queue)

![Runtime de JavaScriot](https://vahid.blog/post/2021-03-21-understanding-the-javascript-runtime-environment-and-dom-nodes/jsRuntimeEnvironment_hufc6622042c18be00aa4535dddfa9305a_166610_1200x1200_fit_q75_lanczos.jpg)

> **¿Es la cola de renderizado exclisiva de un entorno de ejecución de un navegador?**  
> En el diagrama anterior no se observa la cola de renderizado, ya que esta al parecer es exckusiva del Entorno de ejecución de un navegador.

A continuación se explicarán las partes fundamentales del funcionamiento de mostrado en el esquema anterior:

### JS Engine (Motor de JavaScript)

El motor de JavaScript esta fomado por la pila de llamados o Call Stack, en donde se apila cada nuevo llamado a una función y además, por la memoria usada para la generación de los contextos creados con cada llamada, el Memory Heap.

### Web / Browser APIs

Son funcionalidades que forman parte del navegador, pero no de JavaScript, el navegador nos da acceso a estas funcionalidades a través del objeto **window**. Mediante el objeto window se exponen las interfaces como el *DOM*, *Location*, *Local Storage*, etc.

### Cola de trabajo (Tasks Queue)

Es basicamente una estructura FIFO (First-in, First-out) que se encarga de encolar las respuestas obtenidas luego del procesamiento de las web APIs.

### Microtasks

Se encarga de encolar las respuestas luego del procesamiento de *promesas*, *mutation observers*, *queueMicrotasks*. Es la cola de tareas con mayor prioridad y es ejecutada hasta que no queden tareas en ella, por lo que si escribimos un código que ejecute infinitas tareas dentro del Microtasks, bloquearemos el programa ya que este se encontrará indefinidamente intentando completar las tareas presentes en esta cola. (¿Y de eventos del DOM (al parecer) son encolados aquí?).

### Cola de renderizado

Es donde se encolan toda las tareas correspondientes al renderizado de la aplicación. Nos permite ver efectos, redibujados, y animaciones hacendo una reimpresión de la pantalla.

Con todos los elementos podriamos hacer un diagrama del entorno de ejecución de JavaScript de la siguiente manera

![Entorno de JavaScript en el navegador](https://miro.medium.com/max/4800/1*B_bo0vnF9zqNlMMR7OuOJA.png)

El manejo de JavaScript de todo lo anteriormente mencionado se realiza mediante el Event Loop.

## El event Loop

---

El Event Loop es el encargado de hacer funcionar JavaScript de manera asíncrona. El Event Loop se ecarga de revisar el estado de las colas  y cuando hay tareas a la espara en ellas, desencola una por una las tareas y las va apilando en la pila de llamados.

Se debe tener en cuenta que las colas son prioritarias por lo que la cola de microtasks tendrá prioridad sobre las cola de tareas y esta última tendra prioridad sobre la cola de renderizado. En el siguiente esquema se grafica como trabaja el Event Loop.

![Funcionamiento del Event Loop](https://miro.medium.com/max/4800/1*9u26ZCHlCL4nPTNINyv3Mg.png)

## Patrones asíncronos en JavaScript

---

Programaticamente, en JavaScript logramos la asincronia mediante **Callbacks**, **Promesas** y el uso de fuciones asíncronas con **Async y Await**.

## Callbacks

> Para ver ejemplos del uso de Callbacks ver el archivo [callbacks](callbacks.js)

Son la pieza clava para que JavaScript pueda funcionar de manera asincrona. Un callback no es más que una función que se pasa como argumento a otra función y que será invocada dentro de ella para completar alguna acción. Por ejemplo:

```JS

// Se crea el callback
let imprimir = (mensaje) => {
  console.log(mensaje);
}

// Se pasa el callback a función de alto nivel (función principal)
let decir = (llamado, mensaje) => {
  llamado(mensaje);
}
```

Se tienen dos tipos de **Callbacks**, asincrónos y síncronos.

### Callbacks síncronos

Son aquellos que ejecutan un solo proceso de manera simultanea y se ejecutan durante la ejecución de la función de alto nivel que los llama. Se debe tener en cuenta que los callbacks por defecto son síncronos o bloqueantes.

```JS

// Se crea 3 funciones que serán usadas como callbacks
let sumar = (num1, num2) => {
    console.log(`numeros: ${num1}, ${num2}`)
    console.log(num1 + num2);
};

let restar = (num3, num4) => {
    console.log(`numeros: ${num3}, ${num4}`);
    console.log(num3 + num4);
};

let mutiplicar = (num5, num6) => {
    console.log(`numeros: ${num5}, ${num6}`);
    console.log(num5 + num6);
}

// Se crea una función de alto nivel (hight order function) que llamará todos los callbacks que recibe.
let operar = (op1, op2, op3, num1, num2, num3, num4, num5, num6) => {
  op1(num1, num2);
  op2(num3, num4);
  op3(num5, num6);
  console.log(`resultados dados`)
}

operar(sumar, restar, mutiplicar, 4, 5, 6, 10, 12, 15);
```

En el ejemplo anterior, al ejecutar el código todas las llamadas a los **Callbacks** se hacen de manera secuencial, por lo que cada callback debe ser completado para continuar con la ejecución de las llamadas siguientes.

#### **Paso de parámetros a Callbacks**

Para pasar argumentos a callbacks, debemos pasar sus argumentos, como argumentos de la función de alto nivel que hará la llamda del callback. Por ejemplo:

```js

// Se crea callback
let callHola = (nombre) => console.log(`hola ${nombre}`);

// Se crea función de alto nivel, como primer parámetro recibe la
// función callback, como segundo parámetro, recibe el argumento 
// que se le pasará al callback para su funcionamiento.
let saludar = (callback, nombre) => {
  callback(nombre);
}

// Se llama a la función de alto nivel con un primer agumento la 
// la función callback y segundo argumento, el parámetro que 
// utilizará el callback.
saluar(callHola, 'Andrea');
```

Se debe tener en cuenta que no es posible en la zona de parámetros de la función de alto nivel, pasar ahí mismo los parametros del callback. Lo siguiente es incorrecto:

```js
let callAdios = (nombre) => console.log(`Adios ${nombre}`);

// llamada incorrecta, dará error.
let despedir = (callback(nombre));
```

### Callbacks Asíncronos

Los callbacks asíncronos son funciones que se ejecutan después de la ejecución de la función de alto nivel que los llama, si una función debe esperar a que las operaciones de los callbacks se completen, esta continuará ejecutando el resto del código mientras espera.

Para conseguir un comportamiento asíncrono de los callbacks, debemos utilizar métodos asíncronos en su construcción como `setTimeOut`. Esto último hará que se delegue el procesamiento de la función a las Web APIs, despejando la **Pila de llamados** del motor de JavaScript para continuar con la ejecución de manera normal.

```js

// Función que imprime un saludo pasados 5 segundos
function saludarDespues (nombre) {
    setTimeout(() => { 
        console.log(`Hola como estás ${nombre}`);
    }, 5000)
}

saludarDespues('Mariana');

// Función que imprime al suma de dos números después de 4 
// segundos.
let sumando = (num1, num2) => {
    setTimeout(() => console.log(num1 + num2), 4000);
}

sumando(2, 4);

let resta = (num1, num2) => console.log(`resta: ${num1 - num2}`);
function hacerResta (llamarResta, num1, num2) {
    setTimeout(llamarResta, 6000, num1, num2);
}

hacerResta(resta, 4, 2);

```

En el ejemplo anterior, las funciones tienen un comportamiento asíncrono. En el primer ejemplo, la función `sumando` es una función de orden superior que usa como **callback** a `console.log`, mediante `setTimeout` se delega la el cómputo de la función a las Web APIs.

En la función `hacerResta` se recibe como parámetro una la función `resta` que se usa como callback. La función `setTimeout` recibe como primer parámetro el callback, como segundo parámetro el tiempo de retardo cuando se ejecute este callback y a partir del tercer argumento recibe los argumentos que se serán usados por el callback.

## Promesas

> Para ver ejemplos del funcionamiento de las promesas ver este archivo [Promesas](promesas.js)

Una promesa en un objeto que representa el resultado de una operación asíncrona.
