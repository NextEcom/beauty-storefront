import { AvailableLocale, HeroBannerType } from "@/types";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useRouter } from "next/router";
import { getMockHeroBannerData } from "testUtils/mocks/api/heroBanners";
import { mockProductsByCollection } from "testUtils/mocks/api/products";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { IndexPage } from "./IndexPage";

export default {
  title: "Page Stories/Index",
  component: IndexPage,
} as ComponentMeta<typeof IndexPage>;

const Template: ComponentStory<typeof IndexPage> = (args) => {
  const { locale } = useRouter();

  const heroBannerData = getMockHeroBannerData(
    locale as AvailableLocale,
    args.heroBannerData?.type || HeroBannerType.ImageSlider
  );

  return (
    <DefaultLayout>
      <IndexPage
        {...args}
        heroBannerData={heroBannerData}
        productsByCollection={
          mockProductsByCollection[locale as AvailableLocale]
        }
      />
    </DefaultLayout>
  );
};

export const IndexPageSimpleBanner = Template.bind({});
IndexPageSimpleBanner.args = {
  heroBannerData: {
    type: HeroBannerType.Simple,
    data: {},
  },
};

export const IndexPageImageSliderBanner = Template.bind({});
IndexPageImageSliderBanner.args = {
  heroBannerData: {
    type: HeroBannerType.ImageSlider,
    data: [],
  },
};
