import { html } from 'lit';
import '../../index';
import { tailitProperties } from '../tailit-element/tailit-element'; 

export const Default = (args: any) => html`
    <tailit-accordion
      class="w-full"
      summary="Toggle Me"
      ?open=${args.open}
      ?disabled=${args.disabled}
      coloring=${args.coloring}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </tailit-accordion>
  `;

export default {
  title: 'Components/Accordion',
  component: 'tailit-accordion',
  argTypes: {
    // slot: {
    //   control: { type: 'text' },
    //   defaultValue: 'Slot',
    // },
    coloring: {
      control: { type: 'select' },
      options: tailitProperties.colorings,
      defaultValue: tailitProperties.colorings[0],
    },
    open: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};
