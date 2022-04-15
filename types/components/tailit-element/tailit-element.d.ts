import { LitElement } from 'lit';
declare type Constructor<T> = new (...args: any[]) => T;
export declare const TailitElement: <T extends Constructor<LitElement>>(superClass: T) => T;
export {};
