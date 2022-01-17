import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useRouter } from "next/router";
import React from "react";
import { getMockSignUpFormController } from "testUtils/mocks/api/auth";
import { SignUp } from "./SignUp";

export default {
  title: "SignUp",
  component: SignUp,
} as ComponentMeta<typeof SignUp>;

export const SignUpForm: ComponentStory<typeof SignUp> = () => {
  const { locale } = useRouter();
  return <SignUp handler={getMockSignUpFormController(locale as any)} />;
};
