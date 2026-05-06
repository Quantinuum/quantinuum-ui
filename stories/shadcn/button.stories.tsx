import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../src";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Default: StoryObj<typeof Button> = {
  args: { children: "Button Text", variant: "destructive" },
};
