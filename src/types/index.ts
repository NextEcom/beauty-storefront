import { SxProps, Theme } from "@mui/material";

export type HeroBannerData = {
  heading?: string;
  subHeading?: string;
  text?: string;
  link?: string;
  linkText?: string;
  containerStyle?: SxProps<Theme>;
  overlayStyle?: SxProps<Theme>;
  btnStyle?: SxProps<Theme>;
};


export type CategoryMenuItem = {
  title: string;
  href: string;
  icon?: string;
  subMenu?: CategoryMenuItem[];
};

export type SignUpFormInput = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
};

export interface User extends SignUpFormInput {
  id: string;
}

export type Result<T, E> =
  | { status: "success"; data: T }
  | { status: "error"; error: E };

export interface SignUpFormController {
  verifyOTP(otp: string): Promise<Result<boolean, string>>;
  signUp(
    inputs: SignUpFormInput
  ): Promise<
    Result<
      User,
      { fieldErrors: Partial<SignUpFormInput>; errorMessage: string }
    >
  >;
}
