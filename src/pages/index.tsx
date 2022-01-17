import { IndexPage, IndexPageProps } from "@/components/pages/IndexPage";
import {
  getHomepageHeroBanner,
  getProductsByCollection,
} from "@/controllers/cms";
import { AvailableLocale } from "@/types";
import { AppConfig } from "config/app";
import type { GetStaticPropsContext, NextPage } from "next";

const Index: NextPage<IndexPageProps> = IndexPage;

// pages/index.js
export async function getStaticProps({
  locale = AppConfig.defaultLocale,
}: GetStaticPropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      now: new Date().getTime(),
      heroBannerData: await getHomepageHeroBanner(locale as AvailableLocale),
      productsByCollection: await getProductsByCollection(
        locale as AvailableLocale
      ),
    },
  };
}

export default Index;
