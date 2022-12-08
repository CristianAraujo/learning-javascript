// Fecha: 08 de diciembre del 2022

customElements.define('show-hello', class extends HTMLElement {
    connectedCallback () {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `<p>Hello, ${this.getAttribute('name')}</p>`;
    }
});