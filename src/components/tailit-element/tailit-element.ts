import { LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';
import { tailwind } from '../../index';

type Constructor<T> = new (...args: any[]) => T;

export const tailitProperties = {
  tints: ['primary', 'secondary', 'neutral'] as const,
};

export declare class TailitElementInterface {
  tint: typeof tailitProperties.tints[number];
  getTintClass(): 'var-primary' | 'var-secondary' | 'var-neutral';
}

export const TailitElement =
  <T extends Constructor<LitElement>>(superClass: T) => {
    class TailitElement extends superClass {
      // This will be used as 'var-neutral var-primary var-secondary'
      @property({ type: String, reflect: true}) tint: typeof tailitProperties.tints[number] =
    'primary';

      getTintClass(){
        switch (this.tint) {
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

      static styles = [ css` ${tailwind} ` ];

      
    }
    return TailitElement as Constructor<TailitElementInterface> & T;
  }
