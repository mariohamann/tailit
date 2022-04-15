import { html } from 'lit';
import { tailitProperties } from '../tailit-element/tailit-element'; 

export const Button = (args: any) => html`
    <tailit-button coloring=${args.coloring}>
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
      options: tailitProperties.colorings,
      defaultValue: tailitProperties.colorings[0],
    },
  },
};
