import { LitElement } from 'lit';
declare type Constructor<T> = new (...args: any[]) => T;
export declare const tailitElementProperties: {
  colors: readonly ["primary", "secondary", "neutral"];
};
export declare class TailitElementInterface {
  color: typeof tailitElementProperties.colors[number];
  colorClass(): '$color-primary' | '$color-secondary' | '$color-neutral';
}
export declare const TailitElement: <T extends Constructor<LitElement>>(superClass: T) => Constructor<TailitElementInterface> & T;
export { };
