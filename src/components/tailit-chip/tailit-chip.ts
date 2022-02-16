import { LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { html, literal, unsafeStatic } from 'lit/static-html.js';
import { classMap } from 'lit/directives/class-map.js';
import { tailwind } from '../../index'

export const properties = {
  colors: ['primary', 'secondary', 'gray'] as const,
}

/**
 * @since 0.1
 * @status beta
 *
 * @slot - The badge's content.
 * 
 * Inspired by:
 * - https://m3.material.io/components/chips/overview
 * - https://material.io/components/chips
 * - https://tailwindui.com/components/application-ui/elements/badges
 * 
 */
@customElement('tailit-chip')
export default class TailitChip extends LitElement {
  /** The badge's color. */
  @property({ reflect: true }) color: typeof properties.colors[number] = 'primary';

  /** Changes the buttons style. This is especially useful for filter-styles. */
  @property({ type: Boolean, reflect: true }) filled = false;

  @property() as = 'span';

  @property() role = '';

  static styles = [css`${tailwind}`];

  render() {
    const tag = literal`${unsafeStatic(this.as)}`;

    return html`
      <${tag}
        part="base"
        class=${classMap(
      {
        'inline-flex items-center border justify-center rounded-full text-xs font-medium leading-none rounded-full whitespace-nowrap py-1 px-2.5 select-none': true,
        'var-primary': this.color === 'primary',
        'var-secondary': this.color === 'secondary',
        'var-gray': this.color === 'gray',
        'bg-var-600 border-var-600 text-white': this.filled,
        'bg-var-50 border-var-800 border text-var-900': !this.filled
      }
    )}
        role=${this.role}
      >
        <slot></slot>
      </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tailit-chip': TailitChip;
  }
}
