import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { tailwind } from '../../index'
import { emit, waitForEvent } from '../../internal/event';
import { watch } from '../../internal/watch';

/**
 * @since 2.0
 * @status stable
 *
 * @dependency sl-icon
 *
 * @slot - The details' content.
 * @slot summary - The details' summary. Alternatively, you can use the summary prop.
 *
 * @event sl-show - Emitted when the details opens.
 * @event sl-after-show - Emitted after the details opens and all animations are complete.
 * @event sl-hide - Emitted when the details closes.
 * @event sl-after-hide - Emitted after the details closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart header - The summary header.
 * @csspart summary - The details summary.
 * @csspart summary-icon - The expand/collapse summary icon.
 * @csspart content - The details content.
 *
 * @animation details.show - The animation to use when showing details. You can use `height: auto` with this animation.
 * @animation details.hide - The animation to use when hiding details. You can use `height: auto` with this animation.
 */
@customElement('tailit-accordion')
export default class TailitAccordion extends LitElement {
  static styles = [css`${tailwind}`];

  @query('#details') details: HTMLElement;
  @query('#header') header: HTMLElement;
  @query('#body') body: HTMLElement;

  /** Indicates whether or not the details is open. You can use this in lieu of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open = false;

  /** The summary to show in the details header. If you need to display HTML, use the `summary` slot instead. */
  @property() summary: string;

  /** Disables the details so it can't be toggled. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Shows the details. */
  async show() {
    if (this.open || this.disabled) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'sl-after-show');
  }

  /** Hides the details */
  async hide() {
    if (!this.open || this.disabled) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'sl-after-hide');
  }

  handleSummaryClick() {
    if (!this.disabled) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }

      this.header.focus();
    }
  }

  handleSummaryKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      this.hide();
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      this.show();
    }
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      // Show
      emit(this, 'sl-show');
      emit(this, 'sl-after-show');
    } else {
      // Hide
      emit(this, 'sl-hide');
      emit(this, 'sl-after-hide');
    }
  }

  render() {
    return html`
      <div
        part="base"
        class="var-blue rounded-sm overflow-hidden shadow-md"
      >
        <header
          part="header"
          id="header"
          class="flex font-medium text-var-700 items-center p-4 select-none cursor-pointer transition-all
            ${this.disabled && 'cursor-not-allowed'}
            ${this.open ? 'bg-var-50 text-var-800' : 'hover:bg-gray-50'}"
          role="button"
          aria-expanded=${this.open ? 'true' : 'false'}
          aria-controls="content"
          aria-disabled=${this.disabled ? 'true' : 'false'}
          tabindex=${this.disabled ? '-1' : '0'}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <div id="summary" part="summary" class="flex flex-auto items-center">
            <slot name="summary">${this.summary}</slot>
          </div>

          <span part="summary-icon" class="flex flex-auto flex-grow-0 flex-shrink-0 items-center">
            <span class="material-icons var-spacing-7 text-var overflow-hidden transition-all ${this.open && 'rotate-180'}">expand_more</span>
          </span>
        </header>

        <div id="body" class="overflow-hidden transition-all ${this.open ? 'h-auto' : 'h-0 invisible'}">
          <div part="content" id="content" class="p-4" role="region" aria-labelledby="header">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tailit-accordion': TailitAccordion;
  }
}
