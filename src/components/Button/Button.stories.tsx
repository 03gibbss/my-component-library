import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "MyComponentLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Default Button",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Primary Button",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  label: "Success Button",
};

export const DisabledDefault = Template.bind({});
DisabledDefault.args = {
  disabled: true,
  label: "Disabled Button",
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  disabled: true,
  variant: "primary",
  label: "Primary Button",
};

export const SuccessDisabled = Template.bind({});
SuccessDisabled.args = {
  disabled: true,
  variant: "success",
  label: "Success Button",
};
