import { LitElement } from 'lit';
declare type Constructor<T> = new (...args: any[]) => T;
export declare const tailitProperties: {
    colorings: readonly ["primary", "secondary", "neutral"];
};
export declare class TailitElementInterface {
    coloring: typeof tailitProperties.colorings[number];
    getColoring(): 'var-primary' | 'var-secondary' | 'var-neutral';
}
export declare const TailitElement: <T extends Constructor<LitElement>>(superClass: T) => Constructor<TailitElementInterface> & T;
export {};
