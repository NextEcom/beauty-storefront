import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SignUp } from "./SignUp";
import getMockSignUpFormController from "testUtils/mocks/api";
import { useRouter } from "next/router";

export default {
  title: "SignUpForm",
  component: SignUp,
} as ComponentMeta<typeof SignUp>;

export const SignUpForm: ComponentStory<typeof SignUp> = () => {
  const { locale } = useRouter();
  return <SignUp handler={getMockSignUpFormController(locale as any)} />;
};
