import { Meta, StoryObj } from "@storybook/react-vite";
import { DateTime } from "luxon";
import React from "react";
import { DateTimePicker } from "src/custom/DateTimePicker";

function DateTimePickerDemo() {
    const [date, setDate] = React.useState(DateTime.now())
  return (
   <DateTimePicker date={date} setDate={setDate} id="" ></DateTimePicker>
  );
}


const meta: Meta<typeof DateTimePickerDemo> = {
  component: DateTimePickerDemo,
};

export default meta;

export const Default: StoryObj<typeof DateTimePickerDemo> = {
  args: {},
};
