"use client";

import * as React from "react";

import { Calendar } from "../../src";

export function CalendarDemo() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(),
  });

  return (
    <Calendar
      mode="range"
      selected={dateRange}
      onSelect={setDateRange}
      className="rounded-md border shadow"
    />
  );
}

import type { Meta } from "@storybook/react-vite";
import { DateRange } from "react-day-picker";

import type { StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof CalendarDemo> = {
  component: CalendarDemo,
};

export default meta;

export const Default: StoryObj<typeof CalendarDemo> = {
  args: {},
};
