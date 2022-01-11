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
