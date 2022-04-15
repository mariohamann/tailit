import '../../index';
export declare const chipAvatar: (args: any) => import("lit-html").TemplateResult<1>;
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
        img: {
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
        checked: {
            control: {
                type: string;
            };
        };
        filled: {
            table: {
                disable: boolean;
            };
        };
        beforeSlot: {
            table: {
                disable: boolean;
            };
        };
        role: {
            table: {
                disable: boolean;
            };
        };
        as: {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
