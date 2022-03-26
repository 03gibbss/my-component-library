module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ${componentName} from "./${componentName}";

export default {
  title: "MyComponentLibrary/${componentName}",
  component: ${componentName},
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;

export const WithBar = Template.bind({});
WithBar.args = {
    foo: "bar"
}
`,
  extension: `.stories.tsx`,
  type: "stories",
});
