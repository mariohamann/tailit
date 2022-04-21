export declare const Button: (args: any) => import("lit").TemplateResult<1>;
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
      options: readonly ["primary", "secondary", "neutral"];
      defaultValue: "primary";
    };
    variant: {
      control: {
        type: string;
      };
      options: readonly ["primary", "secondary", "tertiary"];
      defaultValue: "secondary";
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
