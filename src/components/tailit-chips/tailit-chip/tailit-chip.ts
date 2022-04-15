import { LitElement } from 'lit';
import { customElement, property, eventOptions } from 'lit/decorators.js';
import { html, literal, unsafeStatic } from 'lit/static-html.js';
import { TailitElement } from '../../tailit-element/tailit-element';

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
export default class TailitChip extends TailitElement(LitElement) {
  /** Changes the buttons style. This is especially useful for filter-styles. */
  @property({ type: Boolean, reflect: true }) filled = false

  /** Changes the tag of the chip */
  @property() as = 'span'

  @property() role = ''

  renderChip = (content: unknown) => {
    const tag = literal`${unsafeStatic(this.as)}`;

    const filledClass = this.filled
      ? 'bg-var-100 border-var-100 text-var-900'
      : 'border-var-600 border text-var-600';

    return html`
      <${tag}
        @click=${this._onClick}
        part="base"
        class="${ this.coloringClass() } ${filledClass} text-sm transition-all inline-flex items-center border justify-center rounded-full font-medium leading-none whitespace-nowrap h-7 px-3 select-none" role=${this.role}
      >
        ${content}
      </${tag}>
    `;
  }

  render() {
    return this.renderChip(html`<slot></slot>`);
  }


  @eventOptions({ capture: true })
  _onClick() {
    return;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tailit-chip': TailitChip
  }
}
