import { Result, SignUpFormController, SignUpFormInput, User } from "@/types";

const getMockSignUpFormController: (
  locale: "en" | "ru"
) => SignUpFormController = (locale) => {
  const verifyOTP = async (otp: string): Promise<Result<boolean, string>> => {
    if (otp === "123456") {
      return { status: "success", data: true };
    } else {
      return { status: "error", error: "Invalid OTP" };
    }
  };

  const signUp = async (
    inputs: SignUpFormInput
  ): Promise<
    Result<
      User,
      { fieldErrors: Partial<SignUpFormInput>; errorMessage: string }
    >
  > => {
    if (inputs.password.length < 8 || inputs.phoneNumber.length < 10) {
      const fieldErrors: Partial<SignUpFormInput> = {};
      if (inputs.password.length < 8) {
        fieldErrors.password =
          locale === "en" ? "Password is too short" : "Пароль слишком короткий";
      }
      if (inputs.phoneNumber.length < 10) {
        fieldErrors.phoneNumber =
          locale === "en"
            ? "Phone number is invalid"
            : "Номер телефона недействителен";
      }

      return {
        status: "error",
        error: {
          fieldErrors,
          errorMessage: locale === "en" ? "Invalid input" : "Неверный ввод",
        },
      };
    } else {
      return {
        status: "success",
        data: {
          id: "1234567890",
          firstName: "John",
          lastName: "Doe",
          phoneNumber: "1234567890",
          password: "1234567890",
        },
      };
    }
  };

  return {
    verifyOTP,
    signUp,
  };
};

export default getMockSignUpFormController;
