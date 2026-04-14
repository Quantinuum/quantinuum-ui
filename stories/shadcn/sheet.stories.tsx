import { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentProps } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "../../src";

const Demo = (args: ComponentProps<typeof Sheet>) => {
  return (
    <Sheet {...args}>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

const meta: Meta<typeof Sheet> = {
  component: Demo,
};

export default meta;

export const Default: StoryObj<typeof Sheet> = {
  args: {},
};
