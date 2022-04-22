import { LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';
import WindiCSS from 'vite-plugin-windicss';


type Constructor<T> = new (...args: any[]) => T;

export const tailitElementProperties = {
  colors: ['primary', 'secondary', 'neutral'] as const,
};

export declare class TailitElementInterface {
  color: typeof tailitElementProperties.colors[number];
  focusClasses: unknown;
  disabledClasses: unknown;
}

export const TailitElement = <T extends Constructor<LitElement>>(superClass: T) => {
  class TailitElement extends superClass {
    @property({ reflect: true }) color: typeof tailitElementProperties.colors[number] = 'primary';

    readonly focusClasses = "focus:ring-2 focus:ring-var-400 outline-none";

    readonly disabledClasses = "disabled:opacity-50 disabled:saturate-75 disabled:cursor-not-allowed";

    // static styles = [css` ${tailwind} `];
  }
  return TailitElement as Constructor<TailitElementInterface> & T;
};
