import { LitElement } from 'lit';
import { TailitElement } from '../tailit-element/tailit-element';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import { HeadlessButton } from '../headless/headless-button/headless-button';

@customElement('tailit-button')
export default class TailitButton extends TailitElement(HeadlessButton(LitElement)) {

  render() {
    return this.renderButton(html`
      <span class="${this.getColoring()} text-white bg-var-700 hover:bg-var-800 ${this.hasFocus ? 'ring-4 ring-var-300' : ''} font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
        <slot></slot>
      </span>
    `);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tailit-button': TailitButton;
  }
}
