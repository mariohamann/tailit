# Tailit

This repo is an experiment with Lit and TailwindCSS. It provides the following stack:
- Lit
- TailwindCSS
- Storybook
- Vite
- ESLint

## Experiments
### Tailwind Vars
There are three main colors: `primary`, `secondary` and `neutral`. Those colors are used in combination with [](https://github.com/mariohamann/tailwindcss-var) to easily build different color styles for `tailit-button` and `tailit-chip`.

### Tailit-Element-Mixin
There is one `tailit-element`-mixin, which includes default-classes for focus- and disabled-states and the default colors, declaring them as a prop.

The mixin includes all TailwindCSS-styles, which are imported in the `index.ts` as a single constructable stylesheet, expecting it to be most performant. (See `index.ts` for further documentation.)


### Storybook + Props + Types
Instead of redeclaring all properties and variants in Storybook, the variants were defined and exported as a const, e. g:

```ts
export const tailitButtonProperties = {
  variants: ['primary', 'secondary', 'tertiary'] as const,
};```

Usage as possible prop values:
```ts
  @property({ reflect: true }) variant: typeof tailitButtonProperties.variants[number] = 'secondary';
```

And re-using them in Storybook:
```ts
  argTypes:{
    variant: {
      control: { type: 'select' },
      options: tailitButtonProperties.variants,
      defaultValue: tailitButtonProperties.variants[1],
    },
  }
```

### Extendable Components
`tailit-chip` is a component which shows the possibilites of simple extendability. Only the base style is defined, while the render-method can be overwritten in Components extending `tailit-chip`.

Examples:
- `tailit-chip-filter` adds the possibility to make the chip clickable, show it filled afterwards and showing a `check` on the left.
- `tailit-chip-avatar` adds the possibility to add an avatar wir a new prop and make the element selectable as well.

### Renderless Components
Having [](https://headlessui.dev/) in mind, there are experiments to abstract recurring behaviours. The API isn't very straightforward at the moment, especially adding Tailwind-Classes isn't very nice.
- `renderless-button` abstracts the functionality of Shoelace's `sl-button` component. Currently it has lot's of copy paste, but should be reduced to mimmick original button behaviour, especially tricking the ShadowDOM regarding forms etc. (`href` etc. shouldn't be part of that component.)
- `renderless-expandable` can be used e. g. for accordions and is used for `tailit-accordion`. It provides fully stylable and accessibile accordion elements.

As said, the API should be improved. One could think about using querys which "upgrade" parts of the element to give them their full behaviour, e. g. something like:
- in `tailit-accordion`: `<renderless-expandable-button class="whatever">Content</renderless-expandable-button>
- `renderless-expandable`-mixin upgrades to: ```html
    <button
      class="whatever"
      part="button"
      aria-expanded=${this.open ? 'true' : 'false'}
      aria-controls="content"
      aria-disabled=${this.disabled ? 'true' : 'false'}
      tabindex=${this.disabled || this.inherit ? '-1' : '0'}
      @click=${this.handleSummaryClick}
      @keydown=${this.handleSummaryKeyDown}
      ?disabled=${this.disabled}
    >
      ${content}
    </button>```
