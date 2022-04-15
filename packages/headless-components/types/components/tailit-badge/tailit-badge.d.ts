import { LitElement } from 'lit';
export declare const properties: {
    variants: readonly ["primary", "success", "neutral", "warning", "danger"];
};
/**
 * @since 0.1
 * @status beta
 *
 * @slot - The badge's content.
 */
export default class SlBadge extends LitElement {
    /** The badge's variant. */
    variant: typeof properties.variants[number];
    /** Makes the badge pulsate to draw attention. */
    ping: boolean;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-badge': SlBadge;
    }
}
