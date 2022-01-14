import { SignUpFormInput } from "../auth";
import { User } from "../user";

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
