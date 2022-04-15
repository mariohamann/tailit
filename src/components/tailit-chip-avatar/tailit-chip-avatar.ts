import { customElement, property, eventOptions } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import TailitChip from '../tailit-chip/tailit-chip';

export const properties = {
  colors: ['primary', 'secondary', 'gray'] as const,
};

/**
 * @since 0.1
 * @status beta
 *
 * @slot - The chip's content.
 *
 * Inspired by:
 * - https://m3.material.io/components/chips/overview
 * - https://material.io/components/chips
 * - https://tailwindui.com/components/application-ui/elements/badges
 *
 */
@customElement('tailit-chip-avatar')
export default class TailitChipAvatar extends TailitChip {
  /** Overwrites default of TailitChip */
  @property() as = 'button'

  @property() img = ''

  /* Changes the buttons style. This is especially useful for filter-styles. */
  @property({ type: Boolean, reflect: true, attribute: 'checked' }) filled =
    false

  beforeSlot = () => (this.img
    ? html`<img
          src="${this.img}"
          class="w-6 h-6 rounded-full -ml-2.5 mr-2 object-cover overflow-hidden transition-all"
        />`
    : html`<span
          class="material-icons var-spacing-7 text-gray-400 text-var -ml-3 mr-1.5 overflow-hidden transition-all"
          >account_circle</span
        >`)

  @eventOptions({ capture: true })
  _onClick() {
    this.filled = !this.filled;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tailit-chip-avatar': TailitChipAvatar
  }
}
