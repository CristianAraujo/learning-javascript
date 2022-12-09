# Web Components

Podemos crear nuestros propios elementos HTML mediante clases JavaScript, con sus propios métodos, propiedades, eventos y más.

Hay dos tipos de de elementos personalizados:

- Autonomus custom elements. "All-new", extienden de la clase abstracta `HTMLElement`.
- Customized built-in elements. Extienden de built-in elementos, por ejemplo, un botón personalizado podría extender de la clase `HTMLButtonElement`.

## Autonomus Elements

Para crear este tipo de elementos, se debe extender de la clase `HTMLElement` y implementarla con algunos métodos, los cuales todos son opcionales.

```js
class MyElement extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallBack (){
        // Los navegadores llaman este método cuandoo el elemento es creado
    }

    disconnectedCallback () {
        // Navegadores llaman este método cuando el elemento es removido
    }

    static get observedAttributes () {
        return [/* nombre de los atributos que monitorean cambios */]
    }

    adoptedCallback () {

    }
    
    // Otros métodos o propiedades
}
```

Luego de crear la clase del elemento necesitamos registrarlo:

```js
customElements.define("my-element", MyElement);
```

Todos los elementos personalizados deben tener un guión medio en su nomenclatura para distinguirlo inequivocamante de los elementos built-in. Por lo que un nombre válido sería `<my-element>`, pero no `<myelement>`.

Luego de registrar el componente, podemos usarlo mediante la etiqueta `<my-element>` en nuestro documento HTML.

Por ejemplo un componente personalizado sería [codigo](../examples/js/time-formatted.js):

```js
class TimeFormatted extends HTMLElement { // (1)
        
    connectedCallback() {
      let date = new Date(this.getAttribute('datetime') || Date.now());
  
      this.innerHTML = new Intl.DateTimeFormat("default", {
        year: this.getAttribute('year') || undefined,
        month: this.getAttribute('month') || undefined,
        day: this.getAttribute('day') || undefined,
        hour: this.getAttribute('hour') || undefined,
        minute: this.getAttribute('minute') || undefined,
        second: this.getAttribute('second') || undefined,
        timeZoneName: this.getAttribute('time-zone-name') || undefined,
      }).format(date);
    }
  
}
  
customElements.define("time-formatted", TimeFormatted);
```

Cuando el navegador encuentra elementos personalizados antes que estos sean definidos con `customElements.define` esto no arroja error, aunque el elemento aun es una etiqueta desconocida. Cuando se encuentra el registro del elemento, este es actualizado. Para obtener información sobre elementos tenemos algunos métodos como:

- `customElements.get(name)`: Retorna la clase para el elemento personalizado cuyo nombre fue pasado como parámetro.
- `customElements.whenDefined(name)`: Retorna una promesa que es resuelta cuando el elemento personalizado es definido.

### Observing attributes

En los componentes personalizados, cuando un atributo cambia, no tiene efecto, lo cual no es el comportamiento de los elementos built-in.

Para provocar un efecto al cambiar el valor de los atributos, tenemos el método `observedAttributes()` al cual se le provee una lista con todos los atributos cuyos cambios deben producir algún efecto. Cuando ocurre un cambio en los atributos de la lista, se llama al método `attributeChangedCallback`.

Por ejemplo con la clase anterior, ahora como [TimeFormatedAtte](../examples/js/timeFormattedAttr.js):

```js
class TimeFormattedAttr extends HTMLElement {

    render() {
        let date = new Date(this.getAttribute('datetime') || Date.now());

        this.innerHTML = new Intl.DateTimeFormat("default", {
            year: this.getAttribute('year') || undefined,
            month: this.getAttribute('month') || undefined,
            day: this.getAttribute('day') || undefined,
            hour: this.getAttribute('hour') || undefined,
            minute: this.getAttribute('minute') || undefined,
            second: this.getAttribute('second') || undefined,
            timeZoneName: this.getAttribute('time-zone-name') || undefined,
        }).format(date);
    }

    connectedCallback() {
        if(!this.rendered) {
            this.render();
            this.rendered = true;
        }
    }

    static get observedAttributes() {
        return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
}

customElements.define("time-formatted-attr", TimeFormattedAttr);
```

Mientras que en el HTML encontraríamos:

```html
<body>
    <time-formatted-attr id="elem" hour="numeric" minute="numeric" second="numeric"></time-formatted-attr>

    <script>
        setInterval(() => elem.setAttribute('datetime', new Date()), 1000);
    </script>
    <script src="../js/timeFormattedAttr.js"></script>
</body>
```

### Personalizar built-in elements

Los elementos personalizados como `<elmento-propio>` no tienen ningún tipo de semantica, por lo que estos son desconocidos por los motores de búsqueda.

Para solucionar esto, podemos personalizar los elmentos preexistentes, heredando directamente de sus clases. Por ejemplo, los botones son instancias de `HTMLButtonElement`. Para crear un botón personalizado

Heredamos de `HTMLButtonElement`:

```js
class HelloButton extends HTMLButtonElements { /* Código del componente */ }
```

Definimos el elemento, entregando un tercer argumento:

```js
customElements.define('hello-button', helloButton, {extends: 'button'});
```

Para usar el elemento, insertamos una etiqueda regular `<button>` y añadimos el atributo `is="hello-button"`:

```html
<button is="hello-button">...</button>
```

## Shadow DOM

El shadow DOM nos entrega un mecanismo de encapsulación, este permite que un componente tenga su propio `DOM tree` o arbol de elementos. Esto se ve en algunos elementos HTML built-in, como por ejemplo `<input type="range">`. El DOM de este elemento es normalmente oculto al usuario, lo que significa que no podemos acceder a los elementos del `shadow DOM` por llamadas regulares JavaScript.

### Shadow tree

Podemos decir que los elementos tiene dos tipos de árboles DOM:

1. `light tree`: El DOM regular, hecho por elementos HTML donde se anidan elementos hijos.
2. `Shadow tree`: Un arbol DOM oculto, no reflejado en el documento HTML.

Si un elemento tiene los dos tipos de árboles, el navegador solo renderizará el `shadow tree`. Aunq ue podemos tener algún tipo de composición entre el `light tree` y el `shadow tree`.

El `shadow tree` puede ser usado en elementos personalizados para esconder los detalles de internos de los componentes. Por ejemplo:

```js
customElements.define('show-hello', class extends HTMLElement {
    connectedCallback () {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `<p>Hello, ${this.getAttribute('name')}</p>`;
    }
});
```

En el ejemplo anterior, `elem.attachShadow({mode:...})` crea un `shadow tree`. La opcion `mode` configura el nivel de encapsulación:

- `open`: el `shadow root` es disponible como `elem.shadowRoot`. Se puede acceder al `shadow tree` del elemento.
- `closed`: `elem.shadowRoot` es siempre null.

El `shadow root` es devuelto por el método `attachShadow`, este se comporta como un elemento, y podemos acceder a el usando métodos para el manejo del DOM. El elemento con un `shadow root` es llamado `shadow tree host` y esta disponible como la propiedad host del `shadow root`:

```js
(elem.shadowRoot.host === elem) ? true : false;
```

### Encapsulación

La encapsulación que nos brinda el `shadow DOM` comprende:

- Los elementos del `shadow DOM` no son visibles para el método `querySelector` desde el DOM regular. Los elementos del `shadow DOM` puede tener ids que entren en conflicto con el DOM regular, solo deben ser únicas para el `shadow DOM`.
- El `shadow DOM` tiene su propia hoja de estilos. Los estilos aplicados al DOM regular no son aplicados a sus elementos. Por ejemplo [encapsulation](../examples/html/encapsulation.html):

```html
<style>
  /* document style won't apply to the shadow tree inside #elem (1) */
  p { color: red; }
</style>

<div id="elem"></div>

<script>
  elem.attachShadow({mode: 'open'});
    // shadow tree has its own style (2)
  elem.shadowRoot.innerHTML = `
    <style> p { font-weight: bold; } </style>
    <p>Hello, John!</p>
  `;

  // <p> is only visible from queries inside the shadow tree (3)
  alert(document.querySelectorAll('p').length); // 0
  alert(elem.shadowRoot.querySelectorAll('p').length); // 1
</script>
```

## Template element

El elemento prefabricado `<template>` sirve como un contenedor que almacena marcado HTML, el cual podemos. El navegador ignorará su contenido y solo comprobará que su sintaxis sea válida, esto hasta que el elemento se inserte en el documento.

```html
<template>
    <style>
        p { font-weight: bold; }
    </style>
    <script>
        alert('Hola');
    </script>
</template>
```

En el ejemplo anterior vemos como se crea un fragmento de marcado html el cual es envuelto entre las etiquedas `<template>` y `<template>`.

El navegador considera el contenido, como fuera del documento, por lo que los estilos, scripts y etiquetas `<video autoplay>` no serán aplicadas hasta que el elemento `<template>` se inserte.

### Insertando template

El contenido de un elemento `<template>` esta disponible en su propiedad `content` y es devuelto en forma de `DocumentFragment`.

Podemos tratar a un template como cualquier otro nodo del DOM, excepto que cuando insertamos un template, sus hijos sun insertados en el lugar.

```html
<template id="tmpl">
    <script>
        alert("Hola desde template");
    </script>
    <div class="message">hola desde div tempalte</div>
</template>

<script>
    let elem = document.createElement('div');
    
    // Clonamos el contenido de template
    elem.append(tmpl.content.cloneNode(true));

    document.body.append(elem);

</script>
```

Rescrbiendo el ejemplo anterior que hacia uso de un `shadow DOM` usando `<template>`:

```html
<template id="tmpl">
    <style> p { font-color: blue; } </style>
    <p id="message"></p>
<template>

<div id="elem">Dame click</div>

<script>
    elem.onclick = function () {
        elem.attachShadow( { mode: 'open' } );
        elem.shadowRoot.append(tmpl.content.cloneNode(true));
        elem.shadowRoot.getElementById('message').innerHTML = 'Hola desde las sombras';
    };
</script>
```

En el ejemplo anterior, los elementos `<style>` y `<p>` son insertados dentro del `<div>`con id `elem` y se accede al párrafo mediante la propiedad `shadowRoot`.
