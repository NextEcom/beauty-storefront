import { AvailableLocale } from "@/types";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useRouter } from "next/router";
import {
  mockHeaderBannerData,
  mockProductsByCollection,
} from "testUtils/mocks/cms";
import { IndexPage } from "./IndexPage";

export default {
  title: "Page Stories/Index",
  component: IndexPage,
} as ComponentMeta<typeof IndexPage>;

const Template: ComponentStory<typeof IndexPage> = (args) => {
  const { locale } = useRouter();

  return (
    <IndexPage
      {...args}
      heroBanner={mockHeaderBannerData[locale as AvailableLocale]}
      productsByCollection={mockProductsByCollection[locale as AvailableLocale]}
    />
  );
};

export const IndexPageView = Template.bind({});
