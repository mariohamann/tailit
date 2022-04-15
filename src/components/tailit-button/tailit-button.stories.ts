import { html } from 'lit';
import { tailitElementProperties } from '../tailit-element/tailit-element'; 
import { tailitButtonProperties } from './tailit-button'; 

export const Button = (args: any) => html`
    <tailit-button coloring=${args.coloring} variant=${args.variant} ?disabled=${args.disabled}>
      ${args.slot}
    </tailit-button>
  `;

export default {
  title: 'Components/Button',
  component: 'tailit-button',
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
