import { html } from 'lit';
import '../../index';
import { properties } from './tailit-chip-filter';

export const Default = (args: any) =>
  html`
  <tailit-chip-filter
    color=${args.color}
    ?checked=${args.checked}
  >${args.slot}</tailit-chip-filter>
`;

Default.args = {
  color: 'primary',
  checked: false,
  slot: 'Title',
};

export default {
  title: 'Components/ChipFilter',
  argTypes: {
    color: {
      control: { type: 'select' },
      options: properties.colors,
    },
    checked: {
      control: { type: 'boolean' }
    },
    slot: {
      control: { type: 'text' }
    },
  },
}; 
