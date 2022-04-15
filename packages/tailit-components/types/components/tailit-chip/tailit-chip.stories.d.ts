import '../../index';
export declare const Chip: (args: any) => import("lit-html").TemplateResult<1>;
declare const _default: {
    title: string;
    component: string;
    argTypes: {
        slot: {
            control: {
                type: string;
            };
            defaultValue: string;
        };
        color: {
            control: {
                type: string;
            };
            options: readonly ["primary", "secondary", "gray"];
            defaultValue: "primary";
        };
        filled: {
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
    };
};
export default _default;
