import type { Meta, StoryObj } from "@storybook/react-vite";

import {
    Button, Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "../../src";

const DialogDemo = (props: {isOpen: boolean, isBottomDialog: boolean, isDismissable: boolean}) => {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <Dialog open={props.isOpen} >
        <DialogContent
          isDismissable={props.isDismissable}
          isBottomDialog={props.isBottomDialog}
        >
          <DialogHeader className="mx-auto">
            <DialogTitle>Privacy Notice</DialogTitle>
            <DialogDescription>
              <div className="flex gap-6 mx-auto">
                <p className="flex-col-3">
                  We use cookies and similar technologies to improve your experience on our site, to analyze our traffic, and to understand where our audience is coming from.
                </p>
                <div className="flex-col-3">
                  <Button className="w-full">Accept</Button>
                  <div className="mt-2 flex">
                    <Button variant="outline" >Decline</Button>
                    <Button variant="outline" className="ml-2">Preferences</Button>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const meta: Meta<typeof DialogDemo> = {
  component: DialogDemo,
  argTypes: {
    isBottomDialog: {
      control: 'boolean',
      description: 'Positions the dialog at the bottom of the screen.',
      defaultValue: false,
  },
  isDismissable: {
      control: 'boolean',
      description: 'Whether the dialog can be dismissed.',
      defaultValue: true,
  },
  isOpen: {
      control: 'boolean',
      description: 'Controls whether the dialog is open or closed.',
      defaultValue: true,
  }
  }
};

export default meta;

export const Default: StoryObj<typeof DialogDemo> = {
  args: {
    isOpen: true,
    isBottomDialog: false,
    isDismissable: true,
  },
};
