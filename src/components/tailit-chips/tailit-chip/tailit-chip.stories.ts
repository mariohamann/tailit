import { html } from 'lit';
import { tailitProperties } from '../../tailit-element/tailit-element'; 

export const Chip = (args: any) => html`
    <tailit-chip tint=${args.tint} ?filled=${args.filled}
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
    tint: {
      control: { type: 'select' },
      options: tailitProperties.tints,
      defaultValue: tailitProperties.tints[0],
    },
    filled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};
