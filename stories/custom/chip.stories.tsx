import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "../../src";

const meta: Meta<typeof Chip> = {
  title: "Custom/Chip",
  component: Chip,
  args: {
    children: "NexusUser1",
    onRemove: () => {},
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "muted", "primary"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const Matrix: Story = {
  render: () => {
    const variants = ["default", "muted", "primary"] as const;
    const sizes = ["sm", "md", "lg"] as const;

    return (
      <div className="flex flex-col gap-4">
        {sizes.map((size) => (
          <div key={size} className="flex items-center gap-6">
            {variants.map((variant) => (
              <Chip
                key={variant}
                variant={variant}
                size={size}
                onRemove={() => {}}
                removeAriaLabel="Remove NexusUser1"
              >NexusUser1</Chip>
            ))}
          </div>
        ))}
      </div>
    );
  },
};
