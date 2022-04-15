import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import HeadlessExpandable from '../headless/headless-expandable/headless-expandable';
import { TailitElement } from '../tailit-element/tailit-element';

/**
 * @since 2.0
 * @status stable
 *
 * @dependency sl-icon
 *
 * @slot - The details' content.
 * @slot summary - The details' summary. Alternatively, you can use the summary prop.
 */
@customElement('tailit-accordion')
export default class TailitAccordion extends TailitElement(HeadlessExpandable) {
  /** The summary to show in the details header.
   * If you need to display HTML, use the `summary` slot instead. */
  @property() summary!: string;

  render() {
    return html`
      <div
        part="base"
        class="${this.coloringClass()} rounded-sm overflow-hidden shadow-md"
      >
        ${this.renderHeader(html`
          <div
            class="flex font-medium text-var-600 items-center p-4 select-none cursor-pointer transition-all
            ${this.disabled && 'cursor-not-allowed'}
            ${this.open ? 'bg-var-50 text-var-900' : 'hover:bg-gray-50'}"
          >
            <div id="summary" part="summary" class="flex flex-auto items-center">
              <slot name="summary">${this.summary}</slot>
            </div>
            <span
              class="flex flex-auto flex-grow-0 flex-shrink-0 items-center"
            >
              <span
                class="material-icons var-spacing-7 text-var overflow-hidden transition-all ${this.open && 'rotate-180'}"
                >expand_more</span
              >
            </span>
          </div>
        `)}
        ${this.renderBody(html`
          <div
            class="overflow-hidden transition-all ${this.open ? 'h-auto' : 'h-0 invisible'}"
          >
            <div
              class="p-4"
              role="region"
              aria-labelledby="header"
            >
              <slot></slot>
            </div>
          </div>
        `)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tailit-accordion': TailitAccordion;
  }
}
