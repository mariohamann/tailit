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
      0% { box-shadow: 0 0 0 0 var(--tw-var-color-600); }
      70% { box-shadow: 0 0 0 0.5rem transparent; }
      100% { box-shadow: 0 0 0 0 transparent; }
    }
  `;

  render() {
    return html`
      <link class="var-current" rel="stylesheet" href="src/index.css">
      <span
        part="base"
        class=${classMap({
          'inline-flex bg-var-600 items-center justify-center text-xs font-semibold leading-none rounded whitespace-nowrap py-1 px-2 select-none text-white': true,
          'var-indigo': this.variant === 'primary',
          'var-green': this.variant === 'success',
          'var-gray': this.variant === 'neutral',
          'var-orange': this.variant === 'warning',
          'var-red': this.variant === 'danger',
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
