import { ComponentMeta } from "@storybook/react";
import { LoginAndSignUpDialog } from "./LoginAndSignUpDialog";

export default {
  title: "LoginAndSignUpDialog",
  component: LoginAndSignUpDialog,
} as ComponentMeta<typeof LoginAndSignUpDialog>;

export const LoginDialog = () => <LoginAndSignUpDialog open />;

export const SignUpDialog = () => (
  <LoginAndSignUpDialog open startAt="signup" />
);
