import { html } from 'lit';
import './badge';
import { properties } from './badge';

export const Default = (args: any) =>
  html`
  <sl-badge
    variant=${args.variant}
    ?ping=${args.ping}
  >${args.slot}</sl-badge>
`;

Default.args = {
  variant: 'primary',
  ping: false,
  slot: 'Badge Title',
};

export default {
  title: 'Components/Badge',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: properties.variants,
    },
    ping: {
      control: { type: 'boolean' }
    },
    slot: {
      control: { type: 'text' }
    },
  },
}; 
