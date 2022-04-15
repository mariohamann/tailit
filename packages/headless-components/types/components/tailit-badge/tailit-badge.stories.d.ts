import '../../index';
export declare const Default: {
    (args: any): import("lit-html").TemplateResult<1>;
    args: {
        variant: string;
        ping: boolean;
        slot: string;
    };
};
declare const _default: {
    title: string;
    argTypes: {
        variant: {
            control: {
                type: string;
            };
            options: readonly ["primary", "success", "neutral", "warning", "danger"];
        };
        ping: {
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
