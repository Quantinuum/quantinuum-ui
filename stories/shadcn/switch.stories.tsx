import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";

import { Switch } from "../../src";

const meta: Meta<typeof Switch> = {
  component: (args) => {
    const [checked, setChecked] = React.useState<boolean>(
      args.checked ?? false
    );
    return (
      <div>
        <Switch checked={checked} onCheckedChange={setChecked}></Switch>
      </div>
    );
  },
  args: {
    checked: true,
  },
};

export default meta;
export const Default: StoryObj<typeof Switch> = {
  args: {},
};
