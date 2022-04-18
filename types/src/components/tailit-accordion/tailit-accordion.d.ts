declare const TailitAccordion_base: any;
/**
 * @since 2.0
 * @status stable
 *
 * @dependency sl-icon
 *
 * @slot - The details' content.
 * @slot summary - The details' summary. Alternatively, you can use the summary prop.
 */
export default class TailitAccordion extends TailitAccordion_base {
    /** The summary to show in the details header.
     * If you need to display HTML, use the `summary` slot instead. */
    summary: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'tailit-accordion': TailitAccordion;
    }
}
export {};
