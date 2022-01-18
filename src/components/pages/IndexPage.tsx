import { HeroBannerType, PageHeroBannerData } from "@/types";
import { ProductsDataByCollection } from "@/types/products";
import { Box } from "@mui/material";
import { ReactElement } from "react";
import { ImageBannerSlides, SimpleHeroBanner } from "../widgets/HeroBanners";
import ProductCollectionsTabs from "../widgets/ProductCollectionsTabs";

export type IndexPageProps = {
  heroBannerData?: PageHeroBannerData;
  productsByCollection?: ProductsDataByCollection;
};

export function IndexPage({
  heroBannerData,
  productsByCollection,
}: IndexPageProps) {
  let heroBannerElement:
    | ReactElement<typeof SimpleHeroBanner>
    | ReactElement<typeof ImageBannerSlides>
    | null = null;

  if (heroBannerData?.type === HeroBannerType.ImageSlider) {
    heroBannerElement = <ImageBannerSlides slides={heroBannerData.data} />;
  } else if (heroBannerData?.type === HeroBannerType.Simple) {
    heroBannerElement = <SimpleHeroBanner bannerData={heroBannerData.data} />;
  }

  return (
    <Box>
      {heroBannerElement}
      {productsByCollection && (
        <ProductCollectionsTabs productsByCollection={productsByCollection} />
      )}
    </Box>
  );
}
