import { html } from 'lit';
import '../../index';

export const Default = (args: any) =>
  html`
  <tailit-accordion class="w-full" summary="Toggle Me">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </tailit-accordion>
`;

export default {
  title: 'Components/Accordion',
  component: "tailit-accordion",
  argTypes: {
    // slot: {
    //   control: { type: 'text' },
    //   defaultValue: 'Slot',
    // },
    // color: {
    //   control: { type: 'select' },
    //   options: properties.colors,
    //   defaultValue: properties.colors[0],
    // },
    // filled: {
    //   control: { type: 'boolean' },
    //   defaultValue: false,
    // },
  }
}; 
