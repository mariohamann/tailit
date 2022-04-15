import { html } from 'lit';
import { tailitProperties } from '../../tailit-element/tailit-element'; 

export const chipFilter = (args: any) => html`
    <tailit-chip-filter coloring=${args.coloring} ?checked=${args.checked}
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
    coloring: {
      control: { type: 'select' },
      options: tailitProperties.colorings,
      defaultValue: tailitProperties.colorings[0],
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
