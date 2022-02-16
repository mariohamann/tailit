import { html } from 'lit';
import '../../index';
import { properties } from './tailit-chip';

export const Default = (args: any) =>
  html`
  <tailit-chip
    color=${args.color}
    ?filled=${args.filled}
  >${args.slot}</tailit-chip>
`;

Default.args = {
  color: 'primary',
  filled: false,
  slot: 'Title',
};

export default {
  title: 'Components/Chip',
  argTypes: {
    color: {
      control: { type: 'select' },
      options: properties.colors,
    },
    filled: {
      control: { type: 'boolean' }
    },
    slot: {
      control: { type: 'text' }
    },
  },
}; 
