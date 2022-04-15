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
export default class HeadlessExpandable extends LitElement {
    header: HTMLElement;
    /** Indicates whether or not the details is open.
     * You can use this in lieu of the show/hide methods.
     */
    open: boolean;
    /** Disables the details so it can't be toggled. */
    disabled: boolean;
    /** Makes the header non-tapable – should be used, if you have a button inside the element */
    inherit: boolean;
    /** Shows the details. */
    show(): Promise<void>;
    /** Hides the details */
    hide(): Promise<void>;
    handleSummaryClick(): void;
    handleSummaryKeyDown(event: KeyboardEvent): void;
    handleOpenChange(): Promise<void>;
    renderHeader: (content: unknown) => import("lit").TemplateResult<1>;
    renderBody: (content: unknown) => import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'headless-expandable': HeadlessExpandable;
    }
}
