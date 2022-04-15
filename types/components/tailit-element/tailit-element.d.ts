import { LitElement } from 'lit';
declare type Constructor<T> = new (...args: any[]) => T;
export declare const tailitProperties: {
    tints: readonly ["primary", "secondary", "neutral"];
};
export declare class TailitElementInterface {
    tint: typeof tailitProperties.tints[number];
    getTintClass(): 'var-primary' | 'var-secondary' | 'var-neutral';
}
export declare const TailitElement: <T extends Constructor<LitElement>>(superClass: T) => Constructor<TailitElementInterface> & T;
export {};
