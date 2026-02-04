import type {Meta, StoryObj} from "@storybook/react-vite";
import {
  Button,
  ExactMatchIcon,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "src";
import {useState} from "react";

const ExactMatch = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsActive(!isActive)}
            className={`p-0 rounded-none hover:cursor-pointer text-muted-foreground [&_svg]:size-6 size-6 ${isActive ? "[&_svg]:hover:fill-muted-foreground/70 dark:[&_svg]:hover:fill-foreground/70" : ""}`}
          >
            <ExactMatchIcon className={isActive ? "fill-muted-foreground text-background dark:fill-foreground" : ""}/>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Exact Match
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  );
}
const meta: Meta<typeof InputGroup> = {
  component: () => <InputGroup>
    <InputGroupInput placeholder="Search..."/>
    <InputGroupAddon align="inline-end">
      <ExactMatch/>
    </InputGroupAddon>
  </InputGroup>,
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Default: StoryObj<typeof InputGroup> = {
  args: {},
};
