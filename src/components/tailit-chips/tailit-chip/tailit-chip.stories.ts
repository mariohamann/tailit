import { html } from 'lit';
import { tailitElementProperties } from '../../tailit-element/tailit-element';

export const Default = (args: any) => html`
    <tailit-chip color=${args.color} ?filled=${args.filled}
      >${args.slot}</tailit-chip
    >
  `;

export default {
  title: 'Components/tailit-chip/tailit-chip',
  component: 'tailit-chip',
  argTypes: {
    slot: {
      control: { type: 'text' },
      defaultValue: 'Slot-Content',
    },
    color: {
      control: { type: 'select' },
      options: tailitElementProperties.colors,
      defaultValue: tailitElementProperties.colors[0],
    },
    filled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};
