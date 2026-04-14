import { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeSelector, useTheme } from "../../src/custom/theme-selector";
export function ThemeSelectorDemo() {
  const { theme, setMode } = useTheme();
  return <ThemeSelector  theme={theme} setMode={setMode} />;
}

const meta: Meta<typeof ThemeSelectorDemo> = {
  component: ThemeSelectorDemo,
};

export default meta;

export const Default: StoryObj<typeof ThemeSelectorDemo> = {
  args: {},
};
