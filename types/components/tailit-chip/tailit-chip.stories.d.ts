import '../../index';
export declare const Default: {
    (args: any): import("lit-html").TemplateResult<1>;
    args: {
        color: string;
        filled: boolean;
        slot: string;
    };
};
declare const _default: {
    title: string;
    argTypes: {
        color: {
            control: {
                type: string;
            };
            options: readonly ["primary", "secondary", "gray"];
        };
        filled: {
            control: {
                type: string;
            };
        };
        slot: {
            control: {
                type: string;
            };
        };
    };
};
export default _default;
