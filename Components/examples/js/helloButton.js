// Fecha: 08 de diciembre del 2022

class HelloButton extends HTMLButtonElement {
    constructor () {
        super();
        this.addEventListener('click', () => alert('Aquí aprendiendo componentes!'));
    }
}

customElements.define('hello-button', HelloButton, {extends: 'button'});
