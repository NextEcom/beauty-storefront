import {
  AvailableLocale,
  HeroBannerType,
  ImageSliderBannersData,
  PageHeroBannerData,
} from "@/types";

export const simpleHeroBannerData = {
  ru: {
    heading: `Натуральная косметика ручной работы`,
    subHeading: `Коллекция 2022 года`,
    text: `Найдите идеальный стиль для себя`,
    link: "/shop",
    linkText: "Магазин сейчас!",
    containerStyle: {
      color: "white",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')",
    },
    overlayStyle: {
      backgroundColor: "rgba(0,0,0,0.7)",
    },
  },
  en: {
    heading: `Handmade Natural Cosmetics`,
    subHeading: `2022 Collection`,
    text: `Find The Perfect style for you`,
    link: "/shop",
    linkText: "Shop Now!",
    containerStyle: {
      color: "white",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')",
    },
    overlayStyle: {
      backgroundColor: "rgba(0,0,0,0.7)",
    },
  },
};

export const imageSlidesHeroBannerData: {
  [K in AvailableLocale]: ImageSliderBannersData[];
} = {
  en: [
    {
      image:
        "https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614267861476-0d129972a0f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626783416763-67a92e5e7266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1628602040839-682c1c959aac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1492552181161-62217fc3076d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1794&q=80",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614588522761-c28918c00d05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
      link: "#",
    },
  ],
  ru: [
    {
      image:
        "https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614267861476-0d129972a0f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626783416763-67a92e5e7266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1628602040839-682c1c959aac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1492552181161-62217fc3076d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1794&q=80",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614588522761-c28918c00d05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
      link: "#",
    },
  ],
};

export const getMockHeroBannerData = (
  locale: AvailableLocale,
  type: HeroBannerType
): PageHeroBannerData | undefined => {
  if (type == HeroBannerType.ImageSlider)
    return {
      type: HeroBannerType.ImageSlider,
      data: imageSlidesHeroBannerData[locale],
    };
  else if (type == HeroBannerType.Simple) {
    return { type: HeroBannerType.Simple, data: simpleHeroBannerData[locale] };
  }
};
