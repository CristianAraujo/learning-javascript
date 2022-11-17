# Network Requests

Las Network Requests o peticiones al servidor son solicitudes que se le envian a un servidor desde algún cliente, para solicitar algun tipo de información necesaria para el funcionamiento del programa.

Existen diversas maneras de enviar solicitudes al servidor y obtener información, clasicamente se usaba `XMLHttpRequest`, y actualmente se usa la API `Fetch` una de las maneras más modernas. Debemos considerar que posiblemente este método no sea soportado por navegadores antiguos.

## Fetch API

Fetch API provee una interfaz para solicitar recursos, similar a lo que se solía hacer con `XMLHtppRequest`. Fetch API nos provee su método `fetch()` para hacer peticiones. Cada petición es enviada como un objeto `Request`.

De manera básica podemos crear una petición con el método `fetch` de las siguiente manera:

```js
let respuesta = fetch('https://api.github.com/users/crstnaraujo');
```

El método `fetch()` devuelve una promesa que se resuelve en un objeto `Response` tan pronto como el servidor responda con los headers. La interfaz Fetch, esta compuesta de la siguiente manera:

- fetch() : Es el método `fetch()` usado para solicitar un recurso.
- Header : Representa los headers de una `Requests` o una `Responds`.
- Request : Representa el recurso solicitado.
- Response : Representa la respuesta a la petición.

### El método fetch

El método fetch comienza el proceso de solicitar un recurso y devuelve una promesa que es resuelta en cuando la respuesta esté disponible. Esta promesa se resolverá en un objeto de tipo `Response`.

Una promesa retornada por el método `fetch()` solo será de tipo `rejected` cuando surja algún problema con la conexión o con el permiso al recurso solicitado, pero no cuando surjan problemas como una respuesta HTTP 404. En estos ultimos casos el objeto `Responde` tendrá en sus propiedades `ok: false` y un `status` que no se encuentra en el rango de 200-299.

**Sintaxis**  
El método `fetch()` puede recibir uno o dos parámetros:

```js
fetch(recurso);
fetch(recurso, opciones);
```

- `Recurso`: Es el recurso que deseamos solicitar. Puede ser un `string` o algun otro objeto que se pueda convertir a `string`, también puede ser un objeto de tipo `URL` o de tipo `Request`.
- `Opciones`: Es un objeto en cual podemos pasar opciones personalizadas a la petición. Como opciones podemos tener:
  - `method`: El métodpo por el cual hacemos la petición `GET`, `POST`, `PUT`, etc.
  - `headers`: Cualquier header que se desee añadir a la peticion.
  - `body`: Cualquier body que se desee añadir a la petición.
  - `mode`: El modo en el cual se desea usar la petición, `cors`, `no-cors`, `same-origin`
  - `credentials`
  - `omit`
  - `same-origin`
  - `include`
  - `cache`
  - `redirect`
  - `referrer`
  - `referrerPolicy`
  - `intregrity`
  - `keepalive`
  - `signal`

**Ejemplo de uso**  
En primera instancia se crea una petición sin opciones personalizadas.

```js
const myImage = documet.querySelector('img');
const myRequest = new Request('flowers.jpg');

fetch(myRequest)
    .then((response) => {
        if (response.ok){
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.blob();
    })
    .then((response) => {
        myImage.src = URL.createObjectURL(response);
    });
```

Petición con opciones:

```js
const myImage = document.querySelector('img');
const myRequest = new Request('flowers.jpg');

const myHeaders = new Headers();
myHeaders.append('Accept', 'image/jpeg');

const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
};

fetch(myRequest, myInit)
    .then((responde) => {
        // ...
    })
```

**Headers**  
Los `Headers` o cabeceras son campos en una petición o respuesta `HTTP` que permiten pasar contexto adicional y metadatos en una petición o respuesta. Por ejemplo los headers en una petición podrían indicar el tipo de formato en el que prefieren recibir la respuesta, mientras que los headers en una respuesta podrían indicar el formato en el cual la respuesta es enviada.

Son case-insensitive y comienzan por una nueva linea seguidos de dos puntos `:` y luego el valor de la cabecera.
