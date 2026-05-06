import { Meta, StoryObj } from "@storybook/react-vite";
import {
    StatusIconCancelled,
    StatusIconError,
    StatusIconQueued,
    StatusIconRetrying,
    StatusIconSubmitted,
    StatusIconSuccess
} from "../../src";


const StatusIcons = () => {
    return <div className="grid gap-1 grid-cols-3 w-32">
        <StatusIconSuccess/>
        <StatusIconError/>
        <StatusIconCancelled/>
        <StatusIconQueued/>
               <StatusIconSubmitted/>
                      <StatusIconRetrying/>
    </div>
}

const meta: Meta<typeof StatusIcons> = {
  component: StatusIcons,
};

export default meta;

export const Default: StoryObj<typeof StatusIcons> = {
  args: {},
};
