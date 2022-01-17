import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Topbar } from "./Topbar";

export default {
  title: "Topbar",
  component: Topbar,
} as ComponentMeta<typeof Topbar>;

const Template: ComponentStory<typeof Topbar> = (args) => {
  return <Topbar {...args} />;
};

export const Default = Template.bind({});
