import { html } from 'lit';
import '../../index';
import { properties } from './tailit-chip-filter';

export const chipFilter = (args: any) => html`
    <tailit-chip-filter color=${args.color} ?checked=${args.checked}
      >${args.slot}</tailit-chip-filter
    >
  `;

const disabled = { table: { disable: true } };

export default {
  title: 'Components/Chip',
  component: 'tailit-chip-filter',
  argTypes: {
    slot: {
      control: { type: 'text' },
      defaultValue: 'Slot',
    },
    color: {
      control: { type: 'select' },
      options: properties.colors,
      defaultValue: properties.colors[0],
    },
    checked: {
      control: { type: 'boolean' },
    },
    filled: disabled,
    beforeSlot: disabled,
    role: disabled,
    as: disabled,
  },
};
