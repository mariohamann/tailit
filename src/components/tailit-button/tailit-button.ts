import { LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import { TailitElement } from '../tailit-element/tailit-element';
import { HeadlessButton } from '../headless/headless-button/headless-button';

export const tailitButtonProperties = {
  variants: ['primary', 'secondary', 'tertiary'] as const,
};

@customElement('tailit-button')
export default class TailitButton extends TailitElement(HeadlessButton(LitElement)) {
  @property({ reflect: true }) variant: typeof tailitButtonProperties.variants[number] = 'secondary';

  private readonly variantClass = () => {
    switch (this.variant) {
      case 'primary':
        return 'text-white bg-var-600 border border-var-600 not-disabled:hover:bg-var-800 not-disabled:hover:border-var-800';
      case 'secondary':
        return 'bg-var-50 text-var-600 border border-var-600 not-disabled:hover:text-var-800 not-disabled:hover:border-var-800';
      case 'tertiary':
        return 'bg-var-50 text-var-600 border border-var-50 not-disabled:hover:text-var-800';
      default:
        return '';
    }
  };

  render() {
    return this.renderButton(
      html`<slot></slot>`,
      `
        ${this.coloringClass()}
        ${this.variantClass()}
        inline-flex items-center font-medium rounded-lg whitespace-nowrap text-sm px-5 py-2.5 outline-none transition-color
        focus:ring-4 focus:ring-var-300
        disabled:opacity-50 disabled:saturate-75 disabled:cursor-not-allowed
      `,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tailit-button': TailitButton;
  }
}
