import { LitElement, css } from 'lit';
import { tailwind } from '../../index';

type Constructor<T> = new (...args: any[]) => T;

export const TailitElement =
  <T extends Constructor<LitElement>>(superClass: T) => {
    class TailitElement extends superClass {
      static styles = [ css` ${tailwind} `, ]
    }
    return TailitElement as T;
  }
