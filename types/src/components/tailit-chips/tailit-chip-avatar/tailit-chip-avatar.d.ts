import TailitChip from '../tailit-chip/tailit-chip';
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
    filled: boolean;
    renderAvatar(): import("lit").TemplateResult<2 | 1>;
    render(): import("lit").TemplateResult<2 | 1>;
    onClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'tailit-chip-avatar': TailitChipAvatar;
    }
}
