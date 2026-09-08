import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { FilterChip } from "src";

const meta: Meta<typeof FilterChip> = {
  title: "Custom/FilterChip",
  component: FilterChip,
  args: {
    label: "Username",
    items: ["NexusUser1", "NexusUser2", "Very_very_very_very_very_long_username_that_truncates"],
    variant: "default",
    size: "md",
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

type Story = StoryObj<typeof FilterChip>;

export const Default: Story = {
  render: (args) => {
    const [items, setItems] = useState(args.items);
    if (items.length === 0) {
      return (
        <div className="text-muted-foreground text-sm">
          <h1 className="text-lg font-bold">All filter items were removed</h1>
          <p>This text is part of the story and not of the component</p>
        </div>
      );
    }

    return (
      <FilterChip
        {...args}
        items={items}
        onRemove={(item) =>
          setItems((prev) => prev.filter((i) => i !== item))
        }
      />
    );
  },
};
