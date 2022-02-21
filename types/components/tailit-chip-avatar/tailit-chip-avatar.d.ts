import TailitChip from '../tailit-chip/tailit-chip';
export declare const properties: {
    colors: readonly ["primary", "secondary", "gray"];
};
/**
 * @since 0.1
 * @status beta
 *
 * @slot - The chip's content.
 *
 * Inspired by:
 * - https://m3.material.io/components/chips/overview
 * - https://material.io/components/chips
 * - https://tailwindui.com/components/application-ui/elements/badges
 *
 */
export default class TailitChipAvatar extends TailitChip {
    /** Overwrites default of TailitChip */
    as: string;
    img: string;
    blackAndWhite: boolean;
    filled: boolean;
    beforeSlot: () => import("lit-html").TemplateResult<2 | 1>;
    _onClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'tailit-chip-avatar': TailitChipAvatar;
    }
}
