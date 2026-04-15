import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "../../src";

const meta: Meta<typeof Progress> = {
  component: Progress,
};

export default meta;

export const Default: StoryObj<typeof Progress> = {
  args: {},
};
