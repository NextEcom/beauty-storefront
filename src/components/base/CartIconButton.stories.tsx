import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CartIconButton } from "./CartIconButton";

export default {
  title: "CartIconButton",
  component: CartIconButton,
} as ComponentMeta<typeof CartIconButton>;

const Template: ComponentStory<typeof CartIconButton> = (args) => (
  <CartIconButton {...args} />
);

export const ZeroItems: ComponentStory<typeof CartIconButton> = Template.bind(
  {}
);

ZeroItems.args = {
  onClick: () => {},
  count: 0,
};

export const OneItem: ComponentStory<typeof CartIconButton> = Template.bind({});
OneItem.args = {
  onClick: () => {},
  count: 1,
};

export const NintyNineItems: ComponentStory<typeof CartIconButton> =
  Template.bind({});
NintyNineItems.args = {
  onClick: () => {},
  count: 99,
};

export const HundredPlusItems: ComponentStory<typeof CartIconButton> =
  Template.bind({});
HundredPlusItems.args = {
  onClick: () => {},
  count: 120,
};
