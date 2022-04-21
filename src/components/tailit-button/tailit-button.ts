import { LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import { TailitElement } from '../tailit-element/tailit-element';
import { RenderlessButton } from '../renderless/renderless-button/renderless-button';

export const tailitButtonProperties = {
  variants: ['primary', 'secondary', 'tertiary'] as const,
};

@customElement('tailit-button')
export default class TailitButton extends TailitElement(RenderlessButton(LitElement)) {
  @property({ reflect: true }) variant: typeof tailitButtonProperties.variants[number] = 'secondary';

  private readonly variantClass = {
    primary: 'text-white bg-var-600 border border-var-600 not-disabled:hover:bg-var-800 not-disabled:hover:border-var-800',
    secondary: 'text-var-600 border border-var-600 not-disabled:hover:text-var-800 not-disabled:hover:border-var-800',
    tertiary: 'bg-var-50 text-var-600 border border-var-50 not-disabled:hover:text-var-800'
  };

  render() {
    return this.renderButton(
      html`<slot></slot>`,
      `
        var-${this.color}
        ${this.variantClass[this.variant]}
        text-base inline-flex items-center font-medium rounded-lg whitespace-nowrap text-sm px-5 py-2.5 transition-color
        ${this.focusClasses}
        ${this.disabledClasses}
      `,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tailit-button': TailitButton;
  }
}
