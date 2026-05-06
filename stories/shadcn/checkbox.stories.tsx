import type { Meta } from "@storybook/react-vite";
import { Checkbox } from "../../src";

const CheckboxDemo = () => {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

import type { StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof CheckboxDemo> = {
  component: CheckboxDemo,
};

export default meta;

export const Default: StoryObj<typeof CheckboxDemo> = {
  args: {},
};
