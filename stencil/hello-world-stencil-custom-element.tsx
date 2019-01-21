import {Component, Prop} from '@stencil/core';


@Component({
    tag: 'lth-stencil-hello-world', // window.customElements.define(...)
    shadow: true // attachRoot
})
export class HelloWorldStencilCustomElement {

    @Prop() name: string ='World'; //  this.name = this.name || 'World';

    // document.createElement('span');
    render() {
        return (
            <span>   Hello {this.name}</span>
        );
    }
}