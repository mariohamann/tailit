import { LitElement } from 'lit';
declare type Constructor<T> = new (...args: any[]) => T;
export declare class HeadlessButtonInterface {
    disabled: boolean;
    type: 'button' | 'submit';
    name: string;
    value: string;
    href: string;
    form: string;
    hasFocus: boolean;
    formAction: string;
    formMethod: 'get' | 'post';
    formNoValidate: boolean;
    formTarget: '_self' | '_blank' | '_parent' | '_top' | string;
    download: string;
    target: '_blank' | '_parent' | '_self' | '_top';
    renderButton(content: unknown): unknown;
}
export declare const HeadlessButton: <T extends Constructor<LitElement>>(superClass: T) => Constructor<HeadlessButtonInterface> & T;
export {};
