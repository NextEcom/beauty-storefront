import { render, screen } from "@testing-library/react";
import TestAppProvider from "testUtils/TestAppProvider";
import { SignUp } from "./SignUp";

describe("Signup Flow", () => {
  let firstNameInput: HTMLInputElement | null = null;
  let lastNameInput: HTMLInputElement | null = null;
  let phoneNumberInput: HTMLInputElement | null = null;
  let passwordInput: HTMLInputElement | null = null;

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
});
