import { LitElement } from 'lit';
export declare const properties: {
    colors: readonly ["primary", "secondary", "gray"];
};
/**
 * @since 0.1
 * @status beta
 *
 * @slot - The badge's content.
 *
 * Inspired by:
 * - https://m3.material.io/components/chips/overview
 * - https://material.io/components/chips
 * - https://tailwindui.com/components/application-ui/elements/badges
 *
 */
export default class TailitChip extends LitElement {
    /** The badge's color. */
    color: typeof properties.colors[number];
    /** Changes the buttons style. This is especially useful for filter-styles. */
    filled: boolean;
    as: string;
    role: string;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<2 | 1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'tailit-chip': TailitChip;
    }
}
