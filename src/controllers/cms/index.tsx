import { AvailableLocale, HeroBannerType, PageHeroBannerData } from "@/types";
import { AppConfig } from "config/app";
import { getMockHeroBannerData } from "testUtils/mocks/api/heroBanners";
import { mockProductsByCollection } from "testUtils/mocks/api/products";

export async function getHomepageHeroBanner(
  locale: AvailableLocale = AppConfig.defaultLocale,
  type: HeroBannerType = HeroBannerType.ImageSlider
): Promise<PageHeroBannerData | undefined> {
  return getMockHeroBannerData(locale, type);
}

export async function getProductsByCollection(locale?: AvailableLocale) {
  if (locale == "ru") {
    return mockProductsByCollection["ru"];
  }

  return mockProductsByCollection["en"];
}
