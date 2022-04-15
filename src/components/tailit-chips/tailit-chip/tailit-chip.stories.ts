import { html } from 'lit';
import { tailitElementProperties } from '../../tailit-element/tailit-element'; 

export const Chip = (args: any) => html`
    <tailit-chip coloring=${args.coloring} ?filled=${args.filled}
      >${args.slot}</tailit-chip
    >
  `;

export default {
  title: 'Components/Chip',
  component: 'tailit-chip',
  argTypes: {
    slot: {
      control: { type: 'text' },
      defaultValue: 'Slot-Content',
    },
    coloring: {
      control: { type: 'select' },
      options: tailitElementProperties.colorings,
      defaultValue: tailitElementProperties.colorings[0],
    },
    filled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};
