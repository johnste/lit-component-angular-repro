import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('simple-component')
export class SimpleComponent extends LitElement {
  render() {
    return html`<span>hello world</span>`;
  }
}
