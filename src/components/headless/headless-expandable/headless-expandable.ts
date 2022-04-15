import { LitElement, html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { emit, waitForEvent } from '../../../internal/event';
import { watch } from '../../../internal/watch';

/**
 * @since 2.0
 * @status stable
 *
 * @dependency sl-icon
 *
 * @event sl-show - Emitted when the details opens.
 * @event sl-after-show - Emitted after the details opens and all animations are complete.
 * @event sl-hide - Emitted when the details closes.
 * @event sl-after-hide - Emitted after the details closes and all animations are complete.
 */

export default class HeadlessExpandable extends LitElement {
  @query('[part="header"]') header!: HTMLElement

  /** Indicates whether or not the details is open.
   * You can use this in lieu of the show/hide methods.
   */
  @property({ type: Boolean, reflect: true }) open = false

  /** Disables the details so it can't be toggled. */
  @property({ type: Boolean, reflect: true }) disabled = false

  /** Makes the header non-tapable – should be used, if you have a button inside the element */
  @state() inherit = false

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

  renderHeader = (content: unknown) => html`
    <header
      part="header"
      role="button"
      aria-expanded=${this.open ? 'true' : 'false'}
      aria-controls="body"
      aria-disabled=${this.disabled ? 'true' : 'false'}
      tabindex=${this.disabled || this.inherit ? '-1' : '0'}
      @click=${this.handleSummaryClick}
      @keydown=${this.handleSummaryKeyDown}
    >
      ${content}
    </header>
  `

  renderBody = (content: unknown) => html` <div id="body">${content}</div>`
}

declare global {
  interface HTMLElementTagNameMap {
    'headless-expandable': HeadlessExpandable
  }
}
