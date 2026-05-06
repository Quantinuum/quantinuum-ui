import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../../src";

export function BadgeDemo() {
  return (
    <div className="flex flex-col gap-2 w-32">
      <Badge variant="default">Default</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outlined</Badge>
      <Badge variant="secondary">Secondary</Badge>
    </div>
  );
}

const meta: Meta<typeof BadgeDemo> = {
  component: BadgeDemo,
};

export default meta;

export const Default: StoryObj<typeof BadgeDemo> = {
  args: {},
};
