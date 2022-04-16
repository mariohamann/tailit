import { LitElement } from 'lit';
export declare const tailitButtonProperties: {
    variants: readonly ["primary", "secondary", "tertiary"];
};
declare const TailitButton_base: (new (...args: any[]) => import("../tailit-element/tailit-element").TailitElementInterface) & (new (...args: any[]) => import("../headless/headless-button/headless-button").HeadlessButtonInterface) & typeof LitElement;
export default class TailitButton extends TailitButton_base {
    variant: typeof tailitButtonProperties.variants[number];
    private readonly variantClass;
    render(): unknown;
}
declare global {
    interface HTMLElementTagNameMap {
        'tailit-button': TailitButton;
    }
}
export {};
