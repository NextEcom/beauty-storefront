import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  mockHeaderBannerData,
  mockProductsByCollection,
} from "testUtils/mocks/cms";
import { IndexPage } from "./IndexPage";

export default {
  title: "Page Stories/Index",
  component: IndexPage,
} as ComponentMeta<typeof IndexPage>;

const Template: ComponentStory<typeof IndexPage> = (args) => (
  <IndexPage {...args} />
);

export const IndexEnglish = Template.bind({});

IndexEnglish.args = {
  heroBanner: mockHeaderBannerData["en"],
  productsByCollection: mockProductsByCollection["en"],
};
