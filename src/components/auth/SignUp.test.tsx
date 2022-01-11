import { render, screen } from "@testing-library/react";
import TestAppProvider from "testUtils/TestAppProvider";
import { SignUp } from "./SignUp";
import userEvent from "@testing-library/user-event";

describe("Signup Flow", () => {
  let firstNameInput: HTMLInputElement | null = null;
  let lastNameInput: HTMLInputElement | null = null;
  let phoneNumberInput: HTMLInputElement | null = null;
  let passwordInput: HTMLInputElement | null = null;
  let createAccBtn: HTMLButtonElement | null = null;
  let createAccountButton: HTMLButtonElement | null = null;

  beforeEach(() => {});
  it("should have all the form elements in en and ru locale", () => {
    const { rerender } = render(
      <TestAppProvider>
        <SignUp />
      </TestAppProvider>
    );

    firstNameInput = screen.getByLabelText<HTMLInputElement>(/First Name/i);
    lastNameInput = screen.getByLabelText<HTMLInputElement>(/Last Name/i);
    phoneNumberInput = screen.getByLabelText<HTMLInputElement>(/Phone Number/i);
    passwordInput = screen.getByLabelText<HTMLInputElement>(/Password/i);

    expect(firstNameInput).toBeRequired();
    expect(lastNameInput).toBeRequired();

    expect(phoneNumberInput).toBeRequired();
    expect(phoneNumberInput).toHaveAttribute("type", "tel");

    expect(passwordInput).toHaveAttribute("type", "password");
    expect(passwordInput).toBeRequired();

    rerender(
      <TestAppProvider locale="ru">
        <SignUp />
      </TestAppProvider>
    );

    screen.getByLabelText<HTMLInputElement>(/Имя/i);
    screen.getByLabelText<HTMLInputElement>(/Фамилия/i);
    screen.getByLabelText<HTMLInputElement>(/Номер телефона/i);
    screen.getByLabelText<HTMLInputElement>(/Пароль/i);
  });

  it("after filling inputs, it should ask for otp", async () => {
    render(
      <TestAppProvider>
        <SignUp
          onSignUp={async () => {
            //
          }}
          onVerifyOTP={async () => true}
        />
      </TestAppProvider>
    );

    firstNameInput = screen.getByLabelText<HTMLInputElement>(/First Name/i);
    lastNameInput = screen.getByLabelText<HTMLInputElement>(/Last Name/i);
    phoneNumberInput = screen.getByLabelText<HTMLInputElement>(/Phone Number/i);
    passwordInput = screen.getByLabelText<HTMLInputElement>(/Password/i);
    createAccBtn = screen.getByRole<HTMLButtonElement>("button", {
      name: /Create Account/i,
    });

    expect(createAccBtn).toBeDisabled();
    userEvent.type(firstNameInput, "John");
    userEvent.type(lastNameInput, "Doe");
    userEvent.type(phoneNumberInput, "1234567890");
    userEvent.type(passwordInput, "password");

    expect(createAccBtn).toBeEnabled();
    expect(screen.queryByLabelText("Enter OTP")).toBeNull();

    userEvent.click(createAccBtn);

    const otpInput = await screen.findByLabelText(/Enter OTP/i);
    const verifyOTPBtn = screen.getByRole("button", { name: /Verify OTP/i });
    expect(otpInput).toBeRequired();

    expect(verifyOTPBtn).toBeDisabled();
    userEvent.type(otpInput, "123456");
    expect(verifyOTPBtn).toBeEnabled();

    userEvent.click(verifyOTPBtn);

    expect(
      await screen.findByRole("button", { name: /Verify OTP/i })
    ).not.toBeVisible();
  });
});
