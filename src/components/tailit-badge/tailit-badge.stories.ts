import { html } from 'lit';
import { tailitElementProperties } from '../tailit-element/tailit-element';
import { tailitBadgeProperties } from './tailit-badge';

export const badge = (args: any) => html`
    <tailit-badge variant=${args.variant} ?ping=${args.ping}>${args.slot}</tailit-badge>
  `;

export default {
  title: 'Components/tailit-badge',
  component: 'tailit-badge',
  argTypes: {
    slot: {
      control: { type: 'text' },
      defaultValue: 'Slot-Content',
    },
    variant: {
      control: { type: 'select' },
      options: tailitBadgeProperties.variants,
      defaultValue: tailitBadgeProperties.variants[1],
    },
    ping: {
      control: { type: 'boolean' },
      default: false,
    },
  },
};
