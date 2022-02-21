import { LitElement, css } from 'lit';
import { customElement, property, eventOptions } from 'lit/decorators.js';
import { html, literal, unsafeStatic } from 'lit/static-html.js';
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

  beforeSlot() {
    return;
  }

  afterSlot() {
    return;
  }

  render() {
    const tag = literal`${unsafeStatic(this.as)}`;

    const colorClass = {
      primary: 'var-primary',
      secondary: 'var-secondary',
      gray: 'var-gray'
    };

    const filledClass = this.filled ? 'bg-var-100 border-var-100 text-black' : 'border-var-900 border text-var-900';

    return html`
      <${tag}
        @click=${this._onClick}
        part="base"
        class="${colorClass[this.color]} ${filledClass} inline-flex items-center border justify-center rounded-full text-sm font-medium leading-none whitespace-nowrap h-7 px-3 select-none"
        role=${this.role}
      >
      ${this.beforeSlot()}<slot></slot>${this.afterSlot()}
      </${tag}>
    `;
  }

  @eventOptions({ capture: true })
  _onClick(e: Event) {
    console.log(e);
    return;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tailit-chip': TailitChip;
  }
}
