import { RocketIcon } from "@radix-ui/react-icons";
import { Meta } from "@storybook/react-vite";

import type { StoryObj } from "@storybook/react-vite";
import { Alert, AlertDescription, AlertTitle } from "../../src";

export function AlertDemo() {
  return (
    <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}

const meta: Meta<typeof AlertDemo> = {
  component: AlertDemo,
};

export default meta;

export const Default: StoryObj<typeof AlertDemo> = {
  args: {},
};
