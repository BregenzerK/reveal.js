class HelloWorldShadowCustomElement extends HelloWorldCustomElement{

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(this._content);
    }
}

// Registers <lth-shadow-dom-hello-world> as a custom element
window.customElements.define('lth-shadow-dom-hello-world', HelloWorldShadowCustomElement);