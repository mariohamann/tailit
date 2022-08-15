import { LitElement, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import { TailitElement } from '../tailit-element/tailit-element';
import { classMap } from 'lit/directives/class-map.js';
import { tailwind } from '../../index';

export const tailitBadgeProperties = {
  variants: ['primary', 'secondary', 'success', 'neutral', 'warning', 'danger'] as const,
};

@customElement('tailit-badge')
export default class TailitBadge extends TailitElement(LitElement) {
  @property({ reflect: true }) variant: typeof tailitBadgeProperties.variants[number] = 'secondary';

  /** Makes the badge pulsate to draw attention. */
  @property({ type: Boolean, reflect: true }) ping = false;

  static styles = [
    css`
      ${tailwind}
    `,
    css`
      .ping {
        animation: ping 1.5s infinite;
      }
      @keyframes ping {
        0% {
          box-shadow: 0 0 0 0 var(--tw-var-color-600);
        }
        70% {
          box-shadow: 0 0 0 0.25rem transparent;
        }
        100% {
          box-shadow: 0 0 0 0 transparent;
        }
      }
    `,
  ];

  render() {
    return html`
      <span
        part="base"
        class=${classMap({
      'inline-flex bg-$color-600 items-center justify-center rounded-full text-xs font-semibold leading-none rounded whitespace-nowrap py-1 px-2 select-none text-white':
        true,
      '$color-primary': this.variant === 'primary',
      '$color-secondary': this.variant === 'secondary',
      '$color-green': this.variant === 'success',
      '$color-neutral': this.variant === 'neutral',
      '$color-orange': this.variant === 'warning',
      '$color-red': this.variant === 'danger',
      ping: this.ping,
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
    'tailit-badge': TailitBadge;
  }
}
