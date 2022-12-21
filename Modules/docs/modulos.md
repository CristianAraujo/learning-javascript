# Modulos

La modularidad es mayormente sobre encapsular o esconder los detalles de la implementación y mantener un espacio de nombres global ordenado, de este modo los modulos no puede modificar variables, funciones y clases definidas por otros módulos.

JavaScript no tenía soporte nativo para módulos, y los programadores se las ingeniaban para emular modularidad a través de clases, objetos y closures.

**Modularidad basada en Closures**  
Permite una práctica forma de modularidad basada en la función `require()` la cual fue adoptada por `node` posteriormente.

## Modulos con clases objetos y closures

Los métodos de una clase son independientes de los métodos de otras debido a que estos son definidos como propiedades de distintos objetos prototypo. La rzón por la cual las clases son modulares es debido a que los objetos son modulares, definir una propiedad en un objeto es similar a definir una variable, pero las propiedades de los objetos no afectan el ámbito global ni las propiedades de otros objetos.

En los ejemplos de cápitulos anteriores, escribiamos clases y métdos abstractos. En estos casos es conveninente mantener esos detalless de la implementación ocultos.

Otra manera de encapsulamiento es mediante variables y funciones anidadas declaradas dentro de una función contenedora. Podemos usar una función autoinvocada para lograr algún tipo de modularidad manteniendo los detalles ocultos.

Por ejemplo:

```js
const BitSet = (function() {
    function isValid(set, n) { /* Implementación */ }
    function has(set, byte, bit) { /* Implementación */ }
    const BIT = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);
    const MASKS = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);

    return class BitSet extends AbstractWritableSet {
        // ... implementación
    }
})
```

Esta aproximación se vuelve un poco más interesante  uando los módulos tienen más de un item en el, por ejemplo:

```js
const stast = (function() {
    const sum = (x, y) => x + y;
    const square = x => x * x;
    
    function mean(data) {
        return data.reduce(sum) /data.length;
    }

    function stddev(data) {
        let m = mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum)/(data.length - 1)
        );
    }

    return { mean, stddev };
}());
```

## Modularidad automatica basada en closures

Lo necesario para convertir un archivo de código en un módulo es añadir algunas instrucciones al inicio y al final. Todo lo necesario es una convención para indicar cuales valores son exportados y cuales no.

Imagina una herramienta que tome un conjunto de archivos, envuelva el contenido de los archivos en una función autoinvocada y maneje los valores retornados por cada función, concatenando todo en un archivo mayor.

Ejemplo:

```js
const modules = {};
function require(moduleName) {  return modules[moduleName]; }

modules["sets.js"] = (function() {
    const exports = {};

    // Contenido de sets.js aquí
    exports.BitSet = class BitSet { };

    return exports;
}());

modules.["stats.js"] = (function() {
    const exports = {};

    // El contenido de stats.js aqui
    const sum = (x, y) => x + y;
    const square = x => x * x;
    exports.mean = function(data) { };
    exports.stddev = function(data) { };

    return exports;
}());
```

Para hacer uso de los módulos creados en el ejemplo anterior, se escribiría código como el siguiente:

```js
const stats = requiere('stats.js');
const BitSet = requiere('sets.js').BitSet;

let s = new BitSet(100);
s.insert(10);
s.insert(20);
s.insert(30);
let avereage = stats.mean([...s]);
```

## Modulos en Node

Los módulos en Node importan otros módulos con la función `require()` y los exportan con su `API` pública configurante el `objeto exports` o reemplazadno el objeto `module.exports` enteramente.

### Node exports

Node define un objeto global `exports` que siempre se encuentra definido. Es posible asignarle las propiedades que deseamos exportar.

```js
const sum = (x, y) => x + y;
const square = x => x * y;

exports.mean = data => data.reduce(sum) / data.length;
exports.stddev = function(d) {
    let m = exports.mean(d);
    return Math.sqrt(d.map(x => x -  m).map(square).reduce(sum) / (d.lenth  - 1);
};
```

En ocaciones se desea definir un módulo que solo exporta una sola función o una sola clase en lugar de un objeto completo de funciones o clases. Para hacer esto, simplemente puedes asignar el único valor que se desea exportar a `module.exports`.

```js
module.exports = class BitSet extends AbstractWritableSet {
   // Implementación 
};
```

El valor por defecto de `module.exports` es el mismo objeto que `exports` del ejemplo anterior. Otra aproximación con esta técnica es exportar un solo objeto al final del módulo en lugar de exportar funciones una a una.

```js
const sum = (x, y) => x + y
const square = x => x * x;

const mean = data => data.reduce(sum)/data.length;
const stddev = d => {
let m = mean(d);
    return Math.sqrt(d.map(x => x - m).map(square).reduce(sum)/(d.length-1));
};

// Now export only the public ones
module.exports = { mean, stddev };
```

### Node imports

Un módulo en node importa a otro llamando la función `require()`. Si se desea importar un sistema creado en Node, o un módulo que se ha instalado en el sistema via un administrador de paquetes, entonces se debe usasr el nombre del módulo sin `'/'`.

```js
const fs = requiere('fs');
const http = require('http');
const express = require('express');
```

Cuando se desea importar un módulo propio, el nombre del módulo debería ser la ruta del archivo que contiene el código, relativa al archivo actual. Aunque también se aceptan rutas absolutas.

```js
const stats = requiere('./stats.js');
const BitSet = requiere('./utils/bitset.js');
```

En el ejemplo anterior también es posible omitir la extensión del archivo, pero es común verlo explícitamente.

Cuando un mótulo exporta solo una función o una clase, todo lo que se debe hacer es requerirlo. Cuando un módulo exporta un objeto, con multiples propiedades, es posible importar el objeto entero o solo propiedades específicas usando asignación por destructuración.

```js
// Se importa el objeto completo
const stats = requiere('./stats.js');

// Podemos usar las funciones del objeto stats 
let average = stats.mean(data);

// Alternativamente es posible usar asignación por destructuración para importar exactamente las funciones que deseamos directamente en el espacio de nombres local
const { stddev } = require('./stats.js');

// La asignación por destructuración es buena aunque se pierde algo de contexto si el prefijo del objeto cuando usamos sus funciones.
let sd = stddev(data);
```

### Módulos tipo Node en la web

Los modulos con un `Export object` y la función `requiere()` son `built-in` en Node, pero también se usaron ampliamente fuera este. Por ejemplo, con webpack.

## Módulos en ES6

Conceptualmente, cada archivo es su propio módulo, y constantes, variabls, funciones, y clases definidas dentro del archivo son privadas a ese módulo a menos que sean exportadas explícitamente. Los valores que son exportados desde un módulo están disponibles para el uso de otros módulos que explícitamente los importen.

En los scripts regulares, las declaraciones de variables, funciones y clases en el nível superior se adhieren al contexto global y se comparten por todos los scripts. Con los módulos, cada archivo tiene su propio contexto privado y puede usar las sentencia `import` y `export`.

El código dentro de los módulos `ES6` se encuentra inmediatamente en `strict mode`. Los módulos `ES6` son incluso un poco más estrictos ya que `this` es `undefined` incluso de la declaración de la función se encuentra en el `top-level`, por contraste, scripts en navegadores y en Node, `this` se refiere al objeto global.

**Módulos ES6 en Node**  
Cuando se usa nativamente modulos ES6 estos son añadidos en el HTML con una sintaxis espcial:

```html
<script type="module">
```

### ES6 Exports

Para exportar una constante, variable, o clase en un módulo ES6, simplemente se añade la palabra clave `export` antes de la declaración:

```js
export const PI = Math.PI;
export function degreesToRadians(d) { return d * PI / 180; }
export class Circle {
    constructor(r) { this.r = r; }
    area() { return PI * this.r * this.r; }
}

```

**Una única sentencia export**  
Otra aproximación es escribir una única sentencia `export` que declare exactamente que será exportado en un único lugar. Por ejemplo.

```js
export { Circle, degreesToRadians, PI };
```

La sintaxis anterior parece mucho ser una sentencia `export` seguida por un objeto literal, pero no es el caso, las llaves no definen en realidad un objeto literal.

**Exportación por defecto**  
Es común escribir módulos que exporten un solo valor, es estos casos es común usar la sentencia `export default` en lugar de `export`.

```js
export default class BitSet {
    // Implementacion
}
```

Exportaciones regulares con `export` pueden solo ser hechas con declaraciones que tengan un nombre. Las exportaciones por defecto con `export default` puede exportar cualquier expresion, incluyendo funciones anónimas, y clases anónimas. En diferencia a los `export` si se ven llaves luego de un `export default` en este caso si se está exportando un objeto literal.

Es permitido que un módulo tenga aun conjunto de exportaciones con `export` y un `export default` aunque poco común. **Si un módulo tiene un `export default`, solo puede haber uno**.

**Lugares desde donde es posible exportar**  
No es posible exportar desde dentro de una clase, función, bucle, o condicional. Siempre debe hacerse desde el nivel superior del módulo. Esto es una caraterística de los módulos de ES6 y nos asegura que siempre los módulos exporten lo mismo.

### ES6 Imports

Es posible impoprtar valores que fueron exportados por otro módulo con la palabra clase `import`.

```js
import BitSet from './bitset.js';
```

En el ejemplo anterior, la palabra clave `import` es seguida por un identificador, seguida por la palabra clave `from` y seguida por una cadena literal que es el nombre cuya exportación por defecto se está importando.

El identificador con el cual se está importando un valor es asignado a una constante. Los `imports` solo pueden aparecer en el nivel superior de un módulo y no está permitido declararlos dentro de una clase, función, bucle, o condicional. Por casi convención universal, las importaciones necesarias por un módulo son localizadas al comienzo de este. Sin embargo esto no es obligatorio ya que las importaciones, al igual que las funciones, son elevadas `hoisted` al comienzo y todos los valores importados se encontrarán disponibles para todo el módulo.

El módulo desde el cual un valor es importado es especificado como una constante tipo `string literal` en comillas simples o dobles. Un `string` especificador de un módulo debe ser una ruta absoluta al módulo, una ruta relativa o una `URL` completa con un protocolo y hostname.

Si se desea importar un módulo desde el mismo directorio actual, se debe añador `'./'` antes del nombre del módulo. Esto ya que no se permite importaciones con nombres como `utils.js` ya que podrían generar ambiguedades con módulos del sistema.

**Importación desde módulo con múltiples exportaciones**  
Para importar valores desde un módulo que exporta múltiples valores usamos:

```js
import { mean, stddev } from './stats.js';
```

Recordar que las exportaciones por defecto no necesitan tener un nombre en el archivo que las define. En su lugar, debemos proveer un nombre local cuando las importamos. Para importaciones que no son por defecto y tienen un nombre, podemos hacer referencia a su nombre cuando las importamos.

**Importar todo desde un módulo**  
Es posible importar todos los valores exportados desde un módulo de la siguiente manera:

```js
import * as stats from './stats.js';
```

Una sentencia `import` como el ejemplo anterior crea un objeto y lo asigna una constante con el nombre dado (en el caso anterior stats). Cada exportación no por defecto del módulo que está siendo importando se convierte en una propiedad de este objeto.

**Importacion conjunta de exportaciones por defecto y normales**  
Cuando un módulo tiene una exportación por defecto y exportaciones que no lo son, es posible importar ambas con una sentencia `import` como la siguiente.

```js
import Histogram, { mean, stddev } from './histogram-stats.js';
```

El valor por defecto se asignará a la constante `Histogram` en el ejemplo anterior, los otros valores importados serán asignados mediante destructuración.

**Importación desde módulos sin exportación**  
Cuando un módulo no tiene exportaciones, podemos incluirse en nuestro programa simplemente usando la palabra clave `import` con el especificador del módulo.

```js
import './analytics.js';
```

En estos casos, una importación que incorpore un módulo que no tiene exportaciones solo es útil si el módulo importado ejecuta alguna tarea. El módulo importado es ejecutado la primera vez que es llamado.

### Imports y exports con renombramiento

Si dos módulos exportan diferentes valores con el mismo nombre, es necesario renombrar uno o ambos al importarlos. Es posible usar la palabra clave `as` junto al nombre del `import` para renombrarlo:

```js
import { render as renderImage } from './imageutils.js';
import { render as renderUI } from './ui.js';
```

**Importar default con renombramiento**  
Importar valores exportados normalmente y por defecto, renombrandolos en el módulo que los importa podemos conseguirlo de la siguiente forma.

```js
import { default as Histogram, mean, stddev } from './histogram-stats.js';
```

En este caso, la palabra clave `default` sirve como placeholder y nos permite indicar que querimoms importar y proveer un nombre al valor exportado por defecto.

**Renombrar valores al exportar**  
Es también posible renombrar valores al exportarlos, haciendo uso de llaves en la sentencia de exportación.

```js
export {
    layout as calculateLayout,
    render as renderLayout
};
```

Debemos recordar que la sintaxis en el ejemplo anterior aunque paresca un objeto literal no lo es. La palabra clave `export` espera un solo identificador antes de `as` no una expresión. Esto significa que lo siguiente no sería válido:

```js
// Código no válido, exportaciones deben ser un identificador no una expresión
export { Math.sin as sin, Math.cos as cos };
```

### Reexportaciones

Las reexportaciones nos pemiten exportar valores que no estan presentes en el módulo en el cual se realiza la exportación. Esto nos da una manera de unir en un solo archivo implementaciones que están en archivos separados:

```js
import { mean } from './stats/mean.js';
import { stddev } from './stats/stddev.js';
export { mean, stddev };
```

Incluso es posible combinar el `import` y el `export` es una sola sentencia de `re-export` que usa la palabra clave `export` y `from`:

```js
export { mean } from './stats/mean.js';
export { stddev } from './stats/stddev.js';
```

Si simplemente deseamos exportar todos los valores nombrados desde otro módulo, podemos usar (widcard):

```js
export * from './stats/mean.js';
export * from './stats/stddev.js';
```

**Re-exportar y renombrar**  
Re-exportar nos permite renombrar los valores mediante el uso de `as`:

```js
export { mean, mean as avereage } from './stats/mean.js';
export { stddev } from './stats/stddev.js';
```

**Re-exportación por defecto renombrada**  
Es posible re-exportar valores anónimos exportados por defecto con un nombre definido:

```js
export { default as mean } from './stats/mean.js';
export { default as stddev } from './stats/stddev.js';
```

Si se desea hacer lo contrario, y exportar un valor con nombre como un valor por defecto desde este nuevo módulo se puede hacer lo siguiente:

```js
export { mean as default } from './stats.js';
```

Para re-exportar un valor por defecto, también como valor por defecto, aunque no es muy útil.

```js
export { default } from './stats/mean.js';
```

### Módulos JavaScript en la Web

Si se desea usar nativamente la sentencia `import` en el navegador, se debe indicar en el HTML con la siguiente etiqueta:

```html
<script type='module'>
```

Cada módulo tiene un conjunto estatico de importaciones, por lo que dado un módulo de entrada, el navegador puede cargar todos los módulos importados por el primero. Usar la etiqueta `<script>` como punto de entrada puede ser:

```html
<script type='module'>import './main.js';</script>
```

**Modo de carga de módulos**  
Los scripts con el atributo `type=module` son cargados y ejecutados como scripts con el atributo `defer`. La carga del código comienza tan pronto como el HTML encuentre la etiqueta `<script>`, pero la ejecución no comienza hasta que el `HTML Parsing` este completo. Una vez que el `HTML parsing` se haya completado, se ejecuta el código en el orden en el cual apareció en el HTML.

Es posible modificar el tiempo de ejecución de los módulos con el atributo `async`. Un módulo con atributo `async` será ejecutado tan pronto como el códigoo sea cargado, incluso sii el `HTML parsing` no está completado e incluso si esto cambia el orden relativo de los scripts.

**Atributos module y nomodule**  
Los navegadores que soportan el atributo `module` también soportan el atributo `nomodule`. Los navegadoroes que soportan estos atributos ignorarán los scripts con el atributo `nomodule` y no lo ejecutarán. Los navegadores que no soportan módulos, no reconocerán el atributo entonces lo ignorarán y ejecutarán el script.

**Fuentes de carga de módulos**  
Los módulos solo pueden ser cargados desde el mismo origen que contiene el documento HTML, o cuando la propoiedad `CORS` en los headers está configurada para permitir la carga `cross-origin`.

**Extensión mjs**  
Algunos programadores usan la extensión `.mjs` para distinguir entre los archivos regulares de JavaScript y los módulos. El soporte de Node para módulos ES6 usa este tipo de extensión como una manera.

### Importación dinamica con import()

Es comun para las aplicaciones web inicialmente cargar solo lo suficiente para que se renderice la primera página al usuario. Después, una vez que el usuario ya dispone del contenido preliminar se carga el resto del código necesario. Los navegadores hacen esto más sencillo con la carga dinámica del código usando la `API DOM` para inyectar un nuevo `<script>` dentro del documento HTML.

Es posible pasar un módulo a la función `import()` la cual retornará un objeto promesa el que representará el proceso de carga asíncronica y ejecutará el módulo especificado. Caundo la importación dinamica esté completa, la primesa será `fulfilled` y producirá un objeto como el que se recibiría cuaando se realiza una importación normal con `import * as`.

```js
// En lugar de hacer esto
import * as stats from './stats.js';

// Importación dinamica 
import('./stats.js').then(stats => {
    let average = stats.mean(data);
})
```

También es posible hacerlo dentro de una función asíncrona.

```js
async analyzeData(data) {
    let stats = await import('.stats.js');
    return {
        average: stats.mean(data),
        stddev: stats.stddev(dada)
    };
}
```

El argumento para `import()` debe ser el identificador de un módulo, pero también acepta cualquier expresión que evalue a un string que defina un identificador de módulo válido.

`import()` parece una invocación de una función, pero no lo es, es un operador y los parentesis son parte de su sintaxis.

Finalmente, la importación dinamica con `import()` no es solo para los navegadores. Las herramientas de empaquetamiento como `Webpack` tambien pueden hacer uso de este tipo de importación.

### import.meta.url

La sintaxis especial `import.meta` nos refiere a un objeto que contiene metadados sobre el módulo que se encuentra en ejecución. La propiedad `url` de este objeto es la `URL` desde la cual el módulo fué cargado (en Node, esta será la ruta a un archivo).

El primer caso de uso de `import.meta.url` es permitirnos referirnos a imágenes, archivos, u otro recurso que es almacenado en el mismo directorio o relativo al módulo.

```js
function localStringsURL(locale) {
    return new URL(`l10n/${locale}.json`, import.meta.url);
}
```
