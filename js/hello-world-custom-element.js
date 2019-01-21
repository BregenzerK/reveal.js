class HelloWorldCustomElement extends HTMLElement{

    // Store properties as attributes so they work both ways.
    get name() {
        return this.getAttribute('name');
    }

    set name(name) {
        this.setAttribute('name', name);
    }


    constructor() {
        super();
        this._content = document.createElement('span');
        this.name = this.name || 'World';
        this._content.innerText = 'Hello ' + this.name;
        this.appendChild(this._content);
    }
}

// Registers <lth-hello-world> as a custom element
window.customElements.define('lth-hello-world', HelloWorldCustomElement);