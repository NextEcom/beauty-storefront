import { AvailableLocale, HeroBannerData } from "@/types";
import { AppConfig } from "config/app";
import {
  mockHeaderBannerData,
  mockProductsByCollection,
} from "testUtils/mocks/cms";

export async function getHomepageHeroBanner(
  locale: AvailableLocale = AppConfig.defaultLocale
): Promise<HeroBannerData> {
  if (locale == AppConfig.Locale.ru) {
    return mockHeaderBannerData["ru"];
  }

  return mockHeaderBannerData["en"];
}

export async function getProductsByCollection(locale?: AvailableLocale) {
  if (locale == "ru") {
    return mockProductsByCollection["ru"];
  }

  return mockProductsByCollection["en"];
}
