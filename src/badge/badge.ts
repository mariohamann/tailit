import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

/**
 * @since 2.0
 * @status stable
 *
 * @slot - The badge's content.
 *
 * @csspart base - The base wrapper
 */
@customElement('sl-badge')
export default class SlBadge extends LitElement {
  /** The badge's variant. */
  @property({ reflect: true }) variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' = 'primary';

  /** Draws a pill-style badge with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** Makes the badge pulsate to draw attention. */
  @property({ type: Boolean, reflect: true }) ping = false;

  static styles = css`
    .ping {
      animation: ping 1.5s infinite;
    }

    @keyframes ping {
      0% { box-shadow: 0 0 0 0 var(--tw-shadow-color); }
      70% { box-shadow: 0 0 0 0.5rem transparent; }
      100% { box-shadow: 0 0 0 0 transparent; }
    }
  `;

  render() {
    return html`
      <link rel="stylesheet" href="src/index.css">
      <span
        part="base"
        class=${classMap({
      'inline-flex items-center justify-center text-xs font-semibold leading-none rounded whitespace-nowrap py-1 px-2 select-none text-white': true,
      'bg-indigo-600 shadow-indigo-600': this.variant === 'primary',
      'bg-green-600 shadow-green-600': this.variant === 'success',
      'bg-gray-600 shadow-gray-600': this.variant === 'neutral',
      'bg-orange-600 shadow-orange-600': this.variant === 'warning',
      'bg-red-600 shadow-red-600': this.variant === 'danger',
      'rounded-full': this.pill,
      'ping': this.ping
    })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sl-badge': SlBadge;
  }
}
