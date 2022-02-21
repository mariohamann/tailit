import { LitElement } from 'lit';
/**
 * @since 2.0
 * @status stable
 *
 * @dependency sl-icon
 *
 * @event sl-show - Emitted when the details opens.
 * @event sl-after-show - Emitted after the details opens and all animations are complete.
 * @event sl-hide - Emitted when the details closes.
 * @event sl-after-hide - Emitted after the details closes and all animations are complete.
 */
export default class HeadlessAccordion extends LitElement {
    header: HTMLElement;
    /** Indicates whether or not the details is open. You can use this in lieu of the show/hide methods. */
    open: boolean;
    /** Disables the details so it can't be toggled. */
    disabled: boolean;
    /** Shows the details. */
    show(): Promise<void>;
    /** Hides the details */
    hide(): Promise<void>;
    handleSummaryClick(): void;
    handleSummaryKeyDown(event: KeyboardEvent): void;
    handleOpenChange(): Promise<void>;
    styledHeader: () => import("lit-html").TemplateResult<1>;
    headlessHeader: () => import("lit-html").TemplateResult<1>;
    styledBody: () => import("lit-html").TemplateResult<1>;
    headlessBody: () => import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'headless-accordion': HeadlessAccordion;
    }
}
