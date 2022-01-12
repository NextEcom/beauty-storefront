import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useRouter } from "next/router";
import React from "react";
import { mockHeaderBannerData } from "testUtils/mocks/cms";
import { HeroBanner } from "./HeroBanner";

export default {
  title: "HeroBanner",
  component: HeroBanner,
} as ComponentMeta<typeof HeroBanner>;

export const HeroBannerView: ComponentStory<typeof HeroBanner> = () => {
  const { locale } = useRouter();
  const bannerData = mockHeaderBannerData[locale as "en" | "ru"];
  return <HeroBanner bannerData={bannerData} />;
};
