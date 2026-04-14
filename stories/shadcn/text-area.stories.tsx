import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "../../src";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  args: {
    placeholder: "Type your message here.",
  },
};

export default meta;


export const Default: StoryObj<typeof Textarea> = {
  args: {},
};
