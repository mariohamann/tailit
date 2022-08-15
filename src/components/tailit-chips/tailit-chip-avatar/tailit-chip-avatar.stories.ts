import { html } from 'lit';
import { tailitElementProperties } from '../../tailit-element/tailit-element';

export const Default = (args: any) => html`
    <tailit-chip-avatar
      img=${args.img}
      color=${args.color}
      ?checked=${args.checked}
      >${args.slot}</tailit-chip-avatar
    >
  `;

const disabled = { table: { disable: true } };

export default {
  title: 'Components/tailit-chip/tailit-chip-avatar',
  component: 'tailit-chip-avatar',
  argTypes: {
    slot: {
      control: { type: 'text' },
      defaultValue: 'Slot',
    },
    img: {
      control: { type: 'text' },
      defaultValue:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
