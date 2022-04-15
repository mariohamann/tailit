import { LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';
import { tailwind } from '../../index';

type Constructor<T> = new (...args: any[]) => T;

export const tailitElementProperties = {
  colorings: ['primary', 'secondary', 'neutral'] as const,
};

export declare class TailitElementInterface {
  coloring: typeof tailitElementProperties.colorings[number];
  coloringClass(): 'var-primary' | 'var-secondary' | 'var-neutral';
}

export const TailitElement = <T extends Constructor<LitElement>>(superClass: T) => {
  class TailitElement extends superClass {
    @property({ reflect: true }) coloring: typeof tailitElementProperties.colorings[number] = 'primary';

    coloringClass() {
      switch (this.coloring) {
        case 'primary':
          return 'var-primary';
        case 'secondary':
          return 'var-secondary';
        case 'neutral':
          return 'var-neutral';
        default:
          return 'var-primary';
      }
    }

    static styles = [css` ${tailwind} `];
  }
  return TailitElement as Constructor<TailitElementInterface> & T;
};
