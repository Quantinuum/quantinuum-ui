import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../../src";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Placeholder text",
  },
};
export const Number: Story = {
  args: {
    type: "number",
  },
};
export const File: Story = {
  args: {
    type: "file",
  },
};


export const Default: StoryObj<typeof Input> = {
  args: {},
};
