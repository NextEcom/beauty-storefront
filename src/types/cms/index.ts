import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export type HeroBannerData = {
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
