import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import RenderlessExpandable from '../renderless/renderless-expandable/renderless-expandable';
import { TailitElement } from '../tailit-element/tailit-element';

/**
 * @since 2.0
 * @status stable
 *
 * @slot - The accordions' content.
 */
@customElement('tailit-accordion')
export default class TailitAccordion extends TailitElement(RenderlessExpandable) {
  /** The summary to show in the details header.
   * If you need to display HTML, use the `summary` slot instead. */
  @property() summary!: string;

  render() {
    return html`
      <div
        class="$color-${this.color} text-base rounded-md border border-neutral-300"
      >
        ${this.renderButton(html`
          <div class="flex flex-auto items-center">
            <slot name="summary">${this.summary}</slot>
          </div>
          <span
            class="flex flex-auto flex-grow-0 flex-shrink-0 items-center"
          >
            <span
              class="material-icons $spacing-7 text-var overflow-hidden transition-all ${this.open && 'rotate-180'}"
              >expand_more</span
            >
          </span>
        `, `w-full rounded-md flex font-medium text-$color-600 items-center p-4 select-none cursor-pointer transition-all
            ${this.focusClasses}
            ${this.disabledClasses}
            ${this.open ? 'bg-$color-50 text-$color-900' : 'not-disabled:hover:bg-gray-50'}
        `)}
        ${this.renderContent(html`
          <div class="overflow-hidden transition-all ${this.open ? 'h-auto' : 'h-0 invisible'}" >
            <div class="p-4" >
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
