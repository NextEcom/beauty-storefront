import { HeroBannerData } from "@/types";
import { ProductsDataByCollection } from "@/types/products";
import { Box } from "@mui/material";
import { HeroBanner } from "../widgets/HeroBanner";
import ProductCollectionsTabs from "../widgets/ProductCollectionsTabs";
import { SignUpForm } from "../widgets/SignUp.stories";

export type IndexPageProps = {
  heroBanner?: HeroBannerData;
  productsByCollection?: ProductsDataByCollection;
};

export function IndexPage({
  heroBanner,
  productsByCollection,
}: IndexPageProps) {
  return (
    <Box>
      {heroBanner && <HeroBanner bannerData={heroBanner} />}
      {productsByCollection && (
        <ProductCollectionsTabs productsByCollection={productsByCollection} />
      )}
      <SignUpForm />
    </Box>
  );
}
