import { html } from 'lit';
import { tailitElementProperties } from '../tailit-element/tailit-element';
import { tailitButtonProperties } from './tailit-button';

export const Button = (args: any) => html`
    <tailit-button color=${args.color} variant=${args.variant} ?disabled=${args.disabled}>
      ${args.slot}
    </tailit-button>
  `;

export default {
  title: 'Components/tailit-button',
  component: 'tailit-button',
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
    variant: {
      control: { type: 'select' },
      options: tailitButtonProperties.variants,
      defaultValue: tailitButtonProperties.variants[1],
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};
