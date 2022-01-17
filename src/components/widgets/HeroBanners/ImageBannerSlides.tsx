import { NavLink } from "@/components/base";
import { styled } from "@mui/material";
import { Box } from "@mui/system";
import { LayoutConstants } from "config/app";
import Image from "next/image";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Swiper,
  SwiperProps,
  SwiperSlide,
  SwiperSlideProps,
} from "swiper/react";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  ".swiper-button-prev, .swiper-button-next": {
    color: theme.palette.primary.dark,
  },
  ".swiper-pagination-bullet-active": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const BannerWrapper = styled(Box)`
    height: calc(100vh - ${
      LayoutConstants.AppHeaderHeight + LayoutConstants.TopbarHeight
    }px);});
`;

export type ImageBannerSlidesProps = {
  slides?: {
    image: string;
    name?: string;
    link?: string;
  }[];
  swiperProps?: SwiperProps;
  slideProps?: SwiperSlideProps;
};
export function ImageBannerSlides({
  slides = [],
  swiperProps,
  slideProps,
}: ImageBannerSlidesProps) {
  if (!slides.length) return null;

  return (
    <StyledSwiper
      autoplay
      pagination
      navigation
      spaceBetween={50}
      {...swiperProps}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} {...slideProps}>
          <BannerWrapper>
            <NavLink noLinkStyle href={slide.link || "#"}>
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src={slide.image}
                alt={slide.name}
              />
            </NavLink>
          </BannerWrapper>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
}
