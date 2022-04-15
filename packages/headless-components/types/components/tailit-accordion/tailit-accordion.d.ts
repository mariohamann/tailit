import HeadlessExpandable from '../headless-expandable/headless-expandable';
/**
 * @since 2.0
 * @status stable
 *
 * @dependency sl-icon
 *
 * @slot - The details' content.
 * @slot summary - The details' summary. Alternatively, you can use the summary prop.
 *
 * @csspart base - The component's base wrapper.
 * @csspart header - The summary header.
 * @csspart summary - The details summary.
 * @csspart summary-icon - The expand/collapse summary icon.
 * @csspart content - The details content.
 */
export default class TailitAccordion extends HeadlessExpandable {
    static styles: import("lit").CSSResult[];
    /** The summary to show in the details header. If you need to display HTML, use the `summary` slot instead. */
    summary: string;
    styledHeader: () => import("lit-html").TemplateResult<1>;
    styledBody: () => import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'tailit-accordion': TailitAccordion;
    }
}
