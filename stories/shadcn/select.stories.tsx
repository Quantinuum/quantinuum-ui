import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { ComponentProps } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../src";

const Demo = (args: ComponentProps<typeof Select>) => {
  const [value, setValue] = React.useState(args.value);
  return (
    <div>
      <Select {...args} value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

const meta: Meta<typeof Demo> = {
  component: Demo,
};

export default meta;

export const Default: StoryObj<typeof Demo> = {
  args: {},
};
