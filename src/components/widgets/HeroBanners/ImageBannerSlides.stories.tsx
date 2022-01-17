import { AvailableLocale } from "@/types";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useRouter } from "next/router";
import { imageSlidesHeroBannerData } from "testUtils/mocks/api/heroBanners";
import { ImageBannerSlides } from ".";

export default {
  title: "Image Banner Slides",
  component: ImageBannerSlides,
} as ComponentMeta<typeof ImageBannerSlides>;

const Template: ComponentStory<typeof ImageBannerSlides> = (args) => {
  const { locale } = useRouter();
  const slides = imageSlidesHeroBannerData[locale as AvailableLocale];
  return <ImageBannerSlides {...args} slides={slides} />;
};

export const Default = Template.bind({});

Default.args = {
  slides: [
    {
      image:
        "https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      name: "Image 1",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      name: "Image 2",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614267861476-0d129972a0f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      name: "Image 3",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626783416763-67a92e5e7266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      name: "Image 4",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1628602040839-682c1c959aac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      name: "Image 5",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1492552181161-62217fc3076d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1794&q=80",
      name: "Image 6",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614588522761-c28918c00d05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
      name: "Image 7",
      link: "#",
    },
  ],
};
