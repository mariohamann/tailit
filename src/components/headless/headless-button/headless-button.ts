import { LitElement } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html, literal } from 'lit/static-html.js';
import { emit } from '../../../internal/event';
import { FormSubmitController } from '../../../internal/form';

type Constructor<T> = new (...args: any[]) => T;
export declare class HeadlessButtonInterface {
  disabled: boolean;

  type: 'button' | 'submit';

  name: string;

  value: string;

  href: string;

  form: string;

  hasFocus: boolean;

  formAction: string;

  formMethod: 'get' | 'post';

  formNoValidate: boolean;

  formTarget: '_self' | '_blank' | '_parent' | '_top' | string;

  download: string;

  target: '_blank' | '_parent' | '_self' | '_top';
  renderButton(content: unknown, classes: string): unknown;
}

export const HeadlessButton = <T extends Constructor<LitElement>>(superClass: T) => {
  class HeadlessButtonElement extends superClass {
    @query('[part="base"]') button!: HTMLButtonElement | HTMLLinkElement;

    private readonly formSubmitController = new FormSubmitController(this, {
      form: (input: any) => {
        // Buttons support a form attribute that points to an arbitrary form,
        // so if this attribute it set we need to query
        // the form from the same root using its id
        if (input.hasAttribute('form')) {
          const doc = input.getRootNode() as Document | ShadowRoot;
          const formId = input.getAttribute('form')!;
          return doc.getElementById(formId) as HTMLFormElement;
        }

        // Fall back to the closest containing form
        return input.closest('form');
      },
    });

    @state() hasFocus = false;

    /** Disables the button. */
    @property({ type: Boolean, reflect: true }) disabled = false;

    /**
       * The type of button. When the type is `submit`, the button will
       * submit the surrounding form. Note that the default
       * value is `button` instead of `submit`, which is opposite of how native
       * `<button>` elements behave.
       */
    @property() type: HeadlessButtonInterface['type'] = 'button';

    /** An optional name for the button. Ignored when `href` is set. */
    @property() name?: HeadlessButtonInterface['name'];

    /** An optional value for the button. Ignored when `href` is set. */
    @property() value?: HeadlessButtonInterface['value'];

    /** When set, the underlying button will be rendered as an `<a>`
     * with this `href` instead of a `<button>`. */
    @property() href?: HeadlessButtonInterface['href'];

    /** Tells the browser where to open the link. Only used when `href` is set. */
    @property() target?: HeadlessButtonInterface['target'];

    /** Tells the browser to download the linked file
     * as this filename. Only used when `href` is set. */
    @property() download?: HeadlessButtonInterface['download'];

    /**
       * The "form owner" to associate the button with. If omitted,
       * the closest containing form will be used instead. The
       * value of this attribute must be an id of a form in
       * the same document or shadow root as the button.
       */
    @property() form!: HeadlessButtonInterface['form'];

    /** Used to override the form owner's `action` attribute. */
    @property({ attribute: 'formaction' }) formAction!: HeadlessButtonInterface['formAction'];

    /** Used to override the form owner's `method` attribute.  */
    @property({ attribute: 'formmethod' }) formMethod!: HeadlessButtonInterface['formMethod'];

    /** Used to override the form owner's `novalidate` attribute. */
    @property({ attribute: 'formnovalidate', type: Boolean }) formNoValidate!: HeadlessButtonInterface['formNoValidate'];

    /** Used to override the form owner's `target` attribute. */
    @property({ attribute: 'formtarget' }) formTarget!: HeadlessButtonInterface['formTarget'];

    /** Simulates a click on the button. */
    click() {
      this.button.click();
    }

    /** Sets focus on the button. */
    focus(options?: FocusOptions) {
      this.button.focus(options);
    }

    /** Removes focus from the button. */
    blur() {
      this.button.blur();
    }

    handleBlur() {
      this.hasFocus = false;
      emit(this, 'sl-blur');
    }

    handleFocus() {
      this.hasFocus = true;
      emit(this, 'sl-focus');
    }

    handleClick(event: MouseEvent) {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (this.type === 'submit') {
        this.formSubmitController.submit(this as any);
      }
    }

    renderButton(content: unknown, classes: string) {
      const isLink = !!this.href;
      const tag = isLink ? literal`a` : literal`button`;

      /* eslint-disable lit/binding-positions, lit/no-invalid-html */
      return html`
      <${tag}
        class="${classes}"
        part="base"
        ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
        type=${ifDefined(isLink ? undefined : this.type)}
        name=${ifDefined(isLink ? undefined : this.name)}
        value=${ifDefined(isLink ? undefined : this.value)}
        href=${ifDefined(this.href)}
        target=${ifDefined(this.target)}
        download=${ifDefined(this.download)}
        rel=${ifDefined(this.target ? 'noreferrer noopener' : undefined)}
        role="button"
        aria-disabled=${this.disabled ? 'true' : 'false'}
        tabindex=${this.disabled ? '-1' : '0'}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
      ${content}
      </${tag}>
    `;
    }
  }
  return HeadlessButtonElement as Constructor<HeadlessButtonInterface> & T;
};
