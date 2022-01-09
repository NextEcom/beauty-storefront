import { mockHeaderBannerData } from "testUtils/mocks/cms";

export type HeroBannerData = {
  heading: string;
  subHeading: string;
  text: string;
  link: string;
  linkText: string;
  backgroundImage: string;
};

export async function getHomepageHeroBanner(
  locale = "en"
): Promise<HeroBannerData> {
  if (locale == "ru") {
    return mockHeaderBannerData["ru"];
  }

  return mockHeaderBannerData["en"];
}
