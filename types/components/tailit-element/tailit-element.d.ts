import { LitElement } from 'lit';
declare type Constructor<T> = new (...args: any[]) => T;
export declare const tailitElementProperties: {
    colorings: readonly ["primary", "secondary", "neutral"];
};
export declare class TailitElementInterface {
    coloring: typeof tailitElementProperties.colorings[number];
    coloringClass(): 'var-primary' | 'var-secondary' | 'var-neutral';
}
export declare const TailitElement: <T extends Constructor<LitElement>>(superClass: T) => Constructor<TailitElementInterface> & T;
export {};
