import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AppHeader } from "./AppHeader";

export default {
  title: "AppHeader",
  component: AppHeader,
} as ComponentMeta<typeof AppHeader>;

const Tempalate: ComponentStory<typeof AppHeader> = (args) => (
  <AppHeader {...args} />
);

export const Default = Tempalate.bind({});
