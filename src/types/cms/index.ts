import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export enum HeroBannerType {
  "Simple" = "Simple",
  "ImageSlider" = "ImageSlider",
}

export type SimpleHeroBannerData = {
  id?: string;
  heading?: string;
  subHeading?: string;
  text?: string;
  link?: string;
  linkText?: string;
  containerStyle?: SxProps<Theme>;
  overlayStyle?: SxProps<Theme>;
  btnStyle?: SxProps<Theme>;
};

export type ImageSliderBannersData = {
  id?: string;
  heading?: string;
  subHeading?: string;
  text?: string;
  link?: string;
  linkText?: string;
  image: string;
};

export type SliderImageHeight = "full" | number;

export type PageHeroBannerData =
  | {
      type: HeroBannerType.Simple;
      data: SimpleHeroBannerData;
    }
  | {
      type: HeroBannerType.ImageSlider;
      data: ImageSliderBannersData[];
      imageHeight?: SliderImageHeight;
    };
