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
export default class TailitChipFilter extends TailitChip {
  /** Overwrites default of TailitChip */
  as: string;
  filled: boolean;
  renderCheckmark: () => import("lit").TemplateResult<2 | 1>;
  render(): import("lit").TemplateResult<2 | 1>;
  onClick(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    'tailit-chip-filter': TailitChipFilter;
  }
}
