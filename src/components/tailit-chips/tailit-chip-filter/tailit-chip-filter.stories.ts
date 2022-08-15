import { html } from 'lit';
import { tailitElementProperties } from '../../tailit-element/tailit-element';

export const ChipFilter = (args: any) => html`
    <tailit-chip-filter color=${args.color} ?checked=${args.checked}
      >${args.slot}</tailit-chip-filter
    >
  `;

const disabled = { table: { disable: true } };

export default {
  title: 'Components/tailit-chip/tailit-chip-filter',
  component: 'tailit-chip-filter',
  argTypes: {
    slot: {
      control: { type: 'text' },
      defaultValue: 'Slot',
    },
    color: {
      control: { type: 'select' },
      options: tailitElementProperties.colors,
      defaultValue: tailitElementProperties.colors[0],
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
