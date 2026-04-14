import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "../../src";
  
  import type { Meta, StoryObj } from "@storybook/react-vite";

  

const InputOTPDemo = () => {
  return (
    <InputOTP maxLength={6}>
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTPGroup>
  </InputOTP>
  
  );
};
const meta: Meta<typeof InputOTPDemo> = {
  component: InputOTPDemo,
 
};

export default meta;

export const Default: StoryObj<typeof InputOTPDemo> = {
  args: {},
};
