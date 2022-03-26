// Generated with util/create-component.js
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NewComponent from "./NewComponent";

export default {
  title: "MyComponentLibrary/NewComponent",
  component: NewComponent,
} as ComponentMeta<typeof NewComponent>;

const Template: ComponentStory<typeof NewComponent> = (args) => <NewComponent {...args} />;

export const WithBar = Template.bind({});
WithBar.args = {
    foo: "bar"
}
