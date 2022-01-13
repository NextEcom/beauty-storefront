import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useRouter } from "next/router";
import { getMockCategoriesData } from "testUtils/mocks/api";
import { CategoryMenu } from "./menu/CategoryMenu";

export default {
  title: "CategoryMenu",
  component: CategoryMenu,
} as ComponentMeta<typeof CategoryMenu>;

export const Default: ComponentStory<typeof CategoryMenu> = () => {
  const { locale } = useRouter();

  return <CategoryMenu items={getMockCategoriesData(locale as any)} />;
};
