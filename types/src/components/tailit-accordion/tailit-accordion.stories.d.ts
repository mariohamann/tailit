import '../../index';
export declare const Default: (args: any) => import("lit").TemplateResult<1>;
declare const _default: {
    title: string;
    component: string;
    argTypes: {
        coloring: {
            control: {
                type: string;
            };
            options: readonly ["primary", "secondary", "neutral"];
            defaultValue: "primary";
        };
        open: {
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
        disabled: {
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
    };
};
export default _default;
