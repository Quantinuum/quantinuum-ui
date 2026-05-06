"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../src";

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Folder } from "lucide-react";

const DropdownDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Folder className="text-muted-foreground" />
          <span>With Icon</span>
        </DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const meta: Meta<typeof DropdownDemo> = {
  component: DropdownDemo,
};

export default meta;

export const Default: StoryObj<typeof DropdownDemo> = {
  args: {},
};
