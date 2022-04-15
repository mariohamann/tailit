import { html } from 'lit';
import '../../index';
import { properties } from './tailit-chip-avatar';

export const chipAvatar = (args: any) => html`
    <tailit-chip-avatar
      img=${args.img}
      color=${args.color}
      ?checked=${args.checked}
      >${args.slot}</tailit-chip-avatar
    >
  `;

const disabled = { table: { disable: true } };

export default {
  title: 'Components/Chip',
  component: 'tailit-chip-avatar',
  argTypes: {
    slot: {
      control: { type: 'text' },
      defaultValue: 'Slot',
    },
    img: {
      control: { type: 'text' },
      defaultValue:
        'https://this-person-does-not-exist.com/img/avatar-6024f78f10fdf60656e15aed72fe871a.jpg',
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
