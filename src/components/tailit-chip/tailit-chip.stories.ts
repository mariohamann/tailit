import { html } from 'lit';
import '../../index';
import { properties } from './tailit-chip';

export const Chip = (args: any) =>
  html`
  <tailit-chip
    color=${args.color}
    ?filled=${args.filled}
  >${args.slot}</tailit-chip>
`;

export default {
  title: 'Components/Chip',
  component: "tailit-chip",
  argTypes: {
    slot: {
      control: { type: 'text' },
      defaultValue: 'Slot-Content',
    },
    color: {
      control: { type: 'select' },
      options: properties.colors,
      defaultValue: properties.colors[0],
    },
    filled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  }
}; 
