import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tailwind } from '../../index'
import HeadlessAccordion from '../headless-accordion/headless-accordion';

/**
 * @since 2.0
 * @status stable
 *
 * @dependency sl-icon
 *
 * @slot - The details' content.
 * @slot summary - The details' summary. Alternatively, you can use the summary prop.
 *
 * @csspart base - The component's base wrapper.
 * @csspart header - The summary header.
 * @csspart summary - The details summary.
 * @csspart summary-icon - The expand/collapse summary icon.
 * @csspart content - The details content.
 */
@customElement('tailit-accordion')
export default class TailitAccordion extends HeadlessAccordion {
  static styles = [css`${tailwind}`];

  /** The summary to show in the details header. If you need to display HTML, use the `summary` slot instead. */
  @property() summary: string;

  styledHeader = () => html`
    <div
      class="flex font-medium text-var-700 items-center p-4 select-none cursor-pointer transition-all
        ${this.disabled && 'cursor-not-allowed'}
        ${this.open ? 'bg-var-50 text-var-800' : 'hover:bg-gray-50'}">
      <div id="summary" part="summary" class="flex flex-auto items-center">
        <slot name="summary">${this.summary}</slot>
      </div>
      <span part="summary-icon" class="flex flex-auto flex-grow-0 flex-shrink-0 items-center">
        <span class="material-icons var-spacing-7 text-var overflow-hidden transition-all ${this.open && 'rotate-180'}">expand_more</span>
      </span>
    </div>`

  styledBody = () => html`
  <div class="overflow-hidden transition-all ${this.open ? 'h-auto' : 'h-0 invisible'}">
    <div part="content" class="p-4" role="region" aria-labelledby="header">
      <slot></slot>
    </div>
  </div>`

  render() {
    return html`
      <div
        part="base"
        class="var-blue rounded-sm overflow-hidden shadow-md"
      >
        ${this.headlessHeader()}
        ${this.headlessBody()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tailit-accordion': TailitAccordion;
  }
}
