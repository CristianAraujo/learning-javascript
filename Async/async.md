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

**¿Qué son las promesas?**  
Una promesa en un objeto que representa el resultado de una operación asíncrona. Pero en realidad tenemos dos maneras de ver las promesas:

- Como un contenedor de un resultado que será entregado posteriormente. Imaginemos una caja vacía, que espera que guardemos algo dentro.
- También podemos ver las promesas como un objeto donde podemos regitrar listener. En la misma caja vacia, podemos poner instrucciones de que se hará cuando se reciva el objeto.

Puede crearse mediante su constructor, como se mmuestra en el siguiente ejemplo.

```js
let promesa = new Promise(function(resolve, rejected) {
  // Códido de la función ejectura.
});
```

**Función ejecutora y sus parámetros**  
El constructor de una promesa recive como argumento una función la cual es llamada función ejectura (executor), y es la que se encarga de definir las tareas que deben ser realizadas por la promesa, el constructor de una promesa llama imediatamente a esta función al crear la promesa. Esta función a su vez recibe dos callbacks como argumentos, `resolve` y `rejected`. Si la promesa es procesada con éxito, se llamará automáticamente a `resolve` mientras que si la promesa devuelve un error, se llamará a `rejected`. Estos callbacks son creados automáticamente por JavaScript, por lo cual nosotros solo nos limitaremos a hacer uso de ellos, y son llamados por la función ejecutora cuando se obtiene un resultado.

```js
let promesa = new Promise(function(resolve, rejected){
  // Código de la función ejecutora.

  if (succes) {
    // Si la promesa se resuelve correctamente, llamamos a resolve
    resolve('resultado exitoso');
  } else {
    // Si la primesa se resuelve con errores, se llama a rejected
    rejected('resultado con error');
  }
});
```

**Estados de una promesa**  
Una promesa al ser un objeto, contiene un estado, cuyas propiedades internas varian dependiendo del resultado obtenido, al procesar la promesa y dependiendo si esta ha sido procesada o no. Inicialmente, una promesa se encuentra con `state: pending` y con `result: undefined` lo que indica que la promesa esta pendiente de procesar y que el valor del retorno aun no se obtiene por lo cual se cuenta indefinido.

Cuando una promesa es procesada, si esta se procesa con exito, el estado de la promesa cambiará siendo su nuevo estado: `state: fulfilled` y `result: value`. Y se llamará al callback resolve. En cambio si una promesa se procesa sin éxito, su estado será `state: rejected` y `result: error`.

![Estado de promesas](https://javascript.info/article/promise-basics/promise-resolve-reject.svg)

Una promesa ya procesada que toma un valor `fulfilled` no puede cambiar y tomar un valor `rejected` ni vise versa.  

Cuando una promesa pasa de estar de tener un estado pendiente a un estado resuelto con un valor, ya sera `rejected` o `fulfilled`, se dice que la promesa se encuentra `seattled`.

![Estado de una promesa](https://exploringjs.com/impatient-js/img-book/promises/promise_states_simple.svg)

Las promesas solo pueden tener un resultado, por lo que si llamamos a más de un callback que resuelve el estado de la promesa, entonces las llamadas posteriores a la primera serán ignoradas.

```js
let promesa = new Promise((resolve, rejected) => {
  resolve('Primer llamado a resuelto');
  resolve('Segundo llamado a resuelto');
});
```

En el ejemplo anterior, el segundo llamado a `resolve` sería ignorado.

**Crear una promesa con un estado definido**  
Podemos crear una promesa que ya tenga un estado definido mediante el uso de los métodos estáticos de la clase `Promise` con `Promise.resolve(value)` y `Promise.rejected(value)`. `Promise.resolve(value)` devuelte una promesa que se encuentra con un estado `fulfilled` y con un `result` cuyo valor será el valor del argumento.  

Mientras, `Promise.rejected(value)`, devuelve una promesa con un estado rejected y con `result` cuyo error será el que recibe en su argumento.

```js
let resuelta = Promise.resolve('Correcto');
resuelta.then(
  console.log('Promesa resuelta');
);

let rechazada = Promise.rejected(new Error('Error'));
rechazada.catch(
  err => console.log(`Ha sucedido un error: ${err}`);
);
```

**Manejo de rejected**  
El callback `rejected` puede devolver cualquier tipo de dato al igual que resolve, pero al tratarse de un error, es recomendable que devuelva un objeto de tipo error, de modo que podamos recibir una información detallada del por qué nuestra promesa no logró resolverse de manera exitosa.

```js
let promesa = new Promise ((resolve, rejected) => {
  if(exito){
    resolve('Resultado exitoso');
  } else {
    rejected(new Error('Ocurrió un error'));
  }
});
```

### Consumir una promesa

Las propiedades del estado del objeto de una promesa son internas, por lo que no podemos acceder directamente, para ello, debemos hacer uso de los métodos `then`, `catch` y `finally`.

**El método `then`**  

Para obtener el valor de una promesa cuando su estado se encuentra resuelta usamos el método `then` sobre el objeto de la promesa. Este método recibe dos functiones como callbacks, `onfulfilled` y `onRejected`, la primera será llamada si la promesa se resuelve correctmente y se recibe un valor, mientras que la segunda será llamada si la promesa es rechazada.

```JS
// Usamosos el método then de las promesas, el cual recibe las 
// funciones que maneja que manejarán las respuestas, estas se 
// llamarán automáticamente y en el orden que se ha indicado. 
promise.then(onfulfilled, onRejected);

function onfulfilled (resolve) {
  // código para manejar la función
}
```

También podemos crear los callbacks dentro del método `then()`, como se ve en el siguiente ejemplo.

```JS
promise.then(
  result => { /* codigo que trate el caso fulfilled */ },
  error => { /* código que trate el caso rejected */ }
);
```

También podríamos encadenas el método then a la creación de la promesa

```JS
Promise((resolve, rejected) => {
  if(exito){
    resolve('Mensaje de exito');
  } else {
    rejected('Mensaje de rechazo');
  }
}).then(
  resolve => { /* Manejar un fulfilled */ }
  error => { /* Manejar un error */ }
)
```

Si deseamos solo capturar un error, o solo capturar una resolución exitosa podemos dejar uno de los parámetros como null en el método `then()` y pasarle solo la función que capture el tipo de resolución que deseamos. Debemos tener en cuenta que los parámetros el método `then()` son opcionales.

```JS
promesa.then(null, manejoError);

function manejoError (error) {
  // Código para manejo del error
}

// Para solo manejar resultados exitosos, pasamos un solo 
// parámetro
prom.then(manejoExito);

funcition manejoExito(exito) {
  // Código para manejo del resultado exitoso
}
```

**El método `catch` y manejo de errores**  

El método `catch` nos permite capturar el estado una promesa cuyo resultado fue erróneo. Es equivalente a dejar nulo el primer parámetro de la función `then()`.

```JS
promesa.catch(
  error => { /* Código del error */ }
)
```

Es importante tener en cuenta que **no debemos mezclas rejections asíncronas y errores asíncronos**, de este modo solo debemos enforcarnos en un único mecanismo de manejo de errores. Por lo que, todas nuestras funciones y métodos basados en promesas, no deberían retornar excepciones.

```js
function asynOp(){
  consultarDbAsyn();
  return consultarDbAsyn()
    .then(result => {
      // Código que prosesa resultado
    });  
}
```

En el ejemplo anterior, la función `consultarDBAsync()` podria retornar una excepción, pero no estamos preparados para manejar una excepción, ya que esta deberia manejarse con un bloque `try..catch`, en este caso una exepción no estaría encasulada en un objeto tipo `Promise` por lo que no la podríamos manejar con los métodos `then()` ni `catch()`.

Para solucionar lo anterior, podemos optar por alguna de las siguientes soluciones: envolver el cuerpo de la función en un bloque `try..catch` y retornar una promesa rejected si ocurre una excepcion.

```js
function hacerAsync(){
  try {
    hacerAlgoAsync();
    return hacerAlgoAsync().then(
      result => { /*.. */ } 
    );
  } catch (error) {
    return Promise.reject(error);
  }
}
```

En el ejemplo anterior, estaremos siempre retornando una promesa, por lo que permitiremos el manejo de errores con los métodos del objeto `Promise`. La segunda opción es dejar que el mmétodo `then()` convierta la exepción en una promesa rejected, para esto, llamamos a la función que posiblemente nos entregue una excepción dentro del método `then()` luego de comenzar un encadenamiento con la creación de una promesa.

```js
function hacerAsync(){
  return Promise.resolve().then(() => {
      hacerAlgoAsync();
      return hacerAlgoAsync();    
    }
  ).then(result => {
    //
  });
}
```

En el ejemplo anterior, se encapsula la llamada a la función que puede devolver una excepción dentro del método `then()` y este es quién se encarga de devolver una promesa siempre. La tercera opción es usar el constructor `new Promise`, el cual también siempre nos devuelve una promesa.

```js
function hacerAsync(){
  return new Promise((resolve, rejected) => {
    hacerAlgoAsync();
    resolve(hacerAlgoAsync());
  }).then(result => {
    // Manejar promesa devuelta
  });
}
```

**Método `finally`**  

El método `finally()` se ejecutará siempre independientemente del resultado de la resolución de la promesa, por lo que es útil para realizar con el tareas de limpieza, como cerrar una conexión a una base de datos.

`Finally` no recibe argumentos, es similar a llamar al método `then(null, null)`. Cuando llamamos el método finally, podemos posterior a su llamado llamar tanto al método then() como al método catch() ya que finally no interrumpe el manejo del resultado de las promesas y el objeto de la promesa *pasa a traves* de finally hasta su manejador correspondiente. En el caso de que ocurra un error.

```JS
promise.finally(
  console.log('Conexión cerrada');
);

let resultado = new Promise((succes, error) => {
  if (exito) {
    succes('Exito');
  } else {
    error('error');
  }
});

resultado.finally(
  console.log('Termino de carga');
)
.then(
  exito => console.log('Carga exitosa');
  error => console.log('Error al realizar la carga');
)
```

También debemos tener en cuenta que el método `finally()` no debe retornar nada y si lo hace esto será ignorado.

### Encadenamiento de promesas

Los métodos `then()` y `catch()` siempre retornan una promesa, lo que nos permite crear un encadenamiento de llamadas, pasando las promesas retornadas al siguiente manejador.

```js
function obtenerDatos(num) {
  return new Promise((resolve, rejected) => {
    resolve(num * 1);
  });
}

obtenerDatos(2)
  .then( result => return result * 2; );
  .then( result => return result * 4; );
  .catch( error => console.log('Ha ocurrido un error'));
```

### Funciones combinandoras. API de promesas

Hay 6 métodos estáticos en la clase `Promise` que nos permiten manejar varias promesas a la vez. De cuales los métodos primitivos son los ya vistos: `Promise.resolve()` y `Promise.rejected()`. Los métodos combinadores son `Promise.all()`, `Promise.any()`, `Promise.race()` y `Promise.allSettled()`. Estos últimosos son los que veremos a continuaciación y tienen las siguientes particularidades:

- Su input debe ser un iterable con zero o más promesas.
- Su outup es una sola promesa.

**El método `Promise.all()`**  
Este método toma un iterable, usualmente una array de promesas, y retorna una promesa que contiene uno de los dos siguientes estados:

- `Fulfilled` si todas las promesas del array se encuentran `Fulfilled`. Su valor será un array con todos los valores `fulfilled` de las promesas del array recibido.
- `Rejected` si al menos una de las promesas que contine el array se encuentra `rejected`. Su valor será el valor `rejected` de las promesas que se encuentren en estado `rejected`.

> *¿En el caso que más de una promesa en el array se encuentre rejected, solo se devuelve el valor rejected de una sola promesa, o se devuelve una array con todos los valores rejected?*  
> *¿Se espera a que todas las promesas estén seattled?*
