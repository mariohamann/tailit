import { LitElement } from 'lit';
declare const TailitChip_base: (new (...args: any[]) => import("../../tailit-element/tailit-element").TailitElementInterface) & typeof LitElement;
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
export default class TailitChip extends TailitChip_base {
    /** Changes the buttons style. This is especially useful for filter-styles. */
    filled: boolean;
    /** Changes the tag of the chip */
    as: string;
    role: string;
    renderChip: (content: unknown) => import("lit").TemplateResult<2 | 1>;
    render(): import("lit").TemplateResult<2 | 1>;
    _onClick(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'tailit-chip': TailitChip;
    }
}
export {};
