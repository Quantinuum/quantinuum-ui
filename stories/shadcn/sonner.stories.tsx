import type { Meta, StoryObj } from "@storybook/react-vite";
import * as sonner from 'sonner';
import { Button, SonnerToast } from "../../src";

const SonnerDemo = (props: {defaultStyles: Boolean}) => {
    return props.defaultStyles ? (
      <div>
        <SonnerToast closeButton duration={9000000}/>
        <Button onClick={() => sonner.toast.error('Error!')}>Show Error Toast</Button>
        <Button onClick={() => sonner.toast.success('Success!')}>Show Success Toast</Button>
        <Button onClick={() => sonner.toast.info('Info!')}>Show Info Toast</Button>
        <Button onClick={() => sonner.toast.warning('Warning!')}>Show Warning Toast</Button>
      </div>
    ) : (
      <div>
        <SonnerToast closeButton duration={9000000} toastOptions={{classNames: {toast: 'group-[.toaster]:bg-green-500 group-[.toaster]:border-green-700'}}}/>
        <Button onClick={() => sonner.toast.info('Info: this toast has overriden styles.')}>
          Show Styled Toast
        </Button>
      </div>
    )
}

const SonnerTopLongTextDemo = () => {
  const longDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.';
  return (
    <div>
      <SonnerToast closeButton duration={9000000} position="top-center" />
      <Button onClick={() => sonner.toast.info('Lorem Ipsum', {description: longDescription})}>Show Top Info Toast</Button>
    </div>
  );
};

const meta: Meta<typeof SonnerDemo> = {
  component: SonnerDemo,
};

export default meta;

export const Default: StoryObj<typeof SonnerDemo> = {
  args: {defaultStyles: true},
};

export const TopLongText: StoryObj<typeof SonnerTopLongTextDemo> = {
  render: () => <SonnerTopLongTextDemo />,
};
