import type { GetStaticPropsContext, NextPage } from "next";
import pick from "lodash.pick";
import { Box } from "@mui/system";

import { getHomepageHeroBanner, getProductsByCollection } from "@/cms";
import HeroBanner, { HeroBannerData } from "@/components/banners/HeroBanner";
import ProductCollectionsTabs from "@/components/product/ProductCollectionsTabs";
import { ProductData } from "@/components/product/ProductView";
import { SignUp } from "@/components/auth/SignUp";
import getMockSignUpFormController from "testUtils/mocks/api";
import { useRouter } from "next/router";

type Props = {
  heroBanner?: HeroBannerData;
  productsByCollection?: { [key: string]: ProductData[] };
};

const Index: NextPage<Props> = ({ heroBanner, productsByCollection }) => {
  const { locale, defaultLocale } = useRouter();
  const signUpFormHandler = getMockSignUpFormController(
    (locale || defaultLocale) as "en" | "ru"
  );
  return (
    <Box>
      <HeroBanner bannerData={heroBanner} />
      {productsByCollection && (
        <ProductCollectionsTabs productsByCollection={productsByCollection} />
      )}
      <SignUp handler={signUpFormHandler} />
    </Box>
  );
};

// pages/index.js
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: pick(
        await import(`i18n/locales/${locale}.json`),
        "Index",
        "SignUp"
      ),
      now: new Date().getTime(),
      heroBanner: await getHomepageHeroBanner(locale),
      productsByCollection: await getProductsByCollection(locale),
    },
  };
}

export default Index;
