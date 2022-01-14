import { getHomepageHeroBanner, getProductsByCollection } from "@/cms";
import { SignUpForm } from "@/components/auth/SignUp.stories";
import { HeroBanner } from "@/components/banners/HeroBanner";
import ProductCollectionsTabs from "@/components/product/ProductCollectionsTabs";
import { ProductData } from "@/components/product/ProductView";
import { AvailableLocale, HeroBannerData } from "@/types";
import { Box } from "@mui/system";
import { AppConfig } from "config/app";
import type { GetStaticPropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { getMockSignUpFormController } from "testUtils/mocks/api";

type Props = {
  heroBanner?: HeroBannerData;
  productsByCollection?: { [key: string]: ProductData[] };
};

const Index: NextPage<Props> = ({ heroBanner, productsByCollection }) => {
  const { locale } = useRouter();

  return (
    <Box>
      {heroBanner && <HeroBanner bannerData={heroBanner} />}
      {productsByCollection && (
        <ProductCollectionsTabs productsByCollection={productsByCollection} />
      )}
      <SignUpForm
        handler={getMockSignUpFormController(locale as AvailableLocale)}
      />
    </Box>
  );
};

// pages/index.js
export async function getStaticProps({
  locale = AppConfig.defaultLocale,
}: GetStaticPropsContext) {
  const localesJson = (await import(`i18n/locales.json`)).default;
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: localesJson[locale as keyof typeof localesJson],
      now: new Date().getTime(),
      heroBanner: await getHomepageHeroBanner(locale as AvailableLocale),
      productsByCollection: await getProductsByCollection(
        locale as AvailableLocale
      ),
    },
  };
}

export default Index;
