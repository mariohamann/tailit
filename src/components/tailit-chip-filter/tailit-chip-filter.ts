import { css } from 'lit';
import { customElement, property, eventOptions } from 'lit/decorators.js';
import { html, literal, unsafeStatic } from 'lit/static-html.js';
import { classMap } from 'lit/directives/class-map.js';
import { tailwind } from '../../index'
import TailitChip from '../tailit-chip/tailit-chip';

export const properties = {
  colors: ['primary', 'secondary', 'gray'] as const,
}

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
@customElement('tailit-chip-filter')
export default class TailitChipFilter extends TailitChip {
  /** Overwrites default of TailitChip */
  @property() as = 'button';

  /* Changes the buttons style. This is especially useful for filter-styles. */
  @property({ type: Boolean, reflect: true, attribute: 'checked' }) filled = false;

  beforeSlot = () => html`<span
    class="${this.filled ? 'w-auto opacity-100 mr-1' : 'invisible w-0 opacity-0 mr-0'}
    material-icons var-spacing-4 text-var overflow-hidden transition-all"
  >check</span>`;

  @eventOptions({ capture: true })
  _onClick() {
    this.filled = !this.filled;
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'tailit-chip-filter': TailitChipFilter;
  }
}
