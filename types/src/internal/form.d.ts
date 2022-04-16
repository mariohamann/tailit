import './formdata-event-polyfill';
import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type ConnectaButton from '../components/tailit-button/tailit-button';
export interface FormSubmitControllerOptions {
    /** A function that returns the form containing the form control. */
    form: (input: unknown) => HTMLFormElement | null;
    /** A function that returns the form control's name,
     * which will be submitted with the form data. */
    name: (input: unknown) => string;
    /** A function that returns the form control's current value. */
    value: (input: unknown) => unknown | unknown[];
    /** A function that returns the form control's current disabled state.
     * If disabled, the value won't be submitted. */
    disabled: (input: unknown) => boolean;
    /**
     * A function that maps to the form control's reportValidity() function.
     * When the control is invalid, this will
     * prevent submission and trigger the browser's constraint violation warning.
     */
    reportValidity: (input: unknown) => boolean;
}
export declare class FormSubmitController implements ReactiveController {
    host?: ReactiveControllerHost & Element;
    form?: HTMLFormElement | null;
    options: FormSubmitControllerOptions;
    constructor(host: ReactiveControllerHost & Element, options?: Partial<FormSubmitControllerOptions>);
    hostConnected(): void;
    hostDisconnected(): void;
    handleFormData(event: FormDataEvent): void;
    handleFormSubmit(event: Event): void;
    submit(submitter?: HTMLInputElement | ConnectaButton): void;
}
