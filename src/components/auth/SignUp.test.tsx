import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import TestAppProvider from "testUtils/TestAppProvider";
import { SignUp } from "./SignUp";
import userEvent from "@testing-library/user-event";
import en from "i18n/locales/en.json";
import ru from "i18n/locales/ru.json";
import getMockSignUpFormController from "testUtils/mocks/api";

describe("Signup Flow", () => {
  let firstNameInput: HTMLInputElement | null = null;
  let lastNameInput: HTMLInputElement | null = null;
  let phoneNumberInput: HTMLInputElement | null = null;
  let passwordInput: HTMLInputElement | null = null;
  let createAccBtn: HTMLButtonElement | null = null;

  beforeEach(() => {});
  it("should have all the form elements in en and ru locale", () => {
    (["en", "ru"] as ["en", "ru"]).forEach((locale) => {
      const signUpLocale = locale === "en" ? en["SignUp"] : ru["SignUp"];
      render(
        <TestAppProvider locale={locale}>
          <SignUp />
        </TestAppProvider>
      );

      firstNameInput = screen.getByLabelText<HTMLInputElement>(
        RegExp(signUpLocale.firstName, "i")
      );
      lastNameInput = screen.getByLabelText<HTMLInputElement>(
        RegExp(signUpLocale.lastName, "i")
      );
      phoneNumberInput = screen.getByLabelText<HTMLInputElement>(
        RegExp(signUpLocale.phoneNumber, "i")
      );
      passwordInput = screen.getByLabelText<HTMLInputElement>(
        RegExp(signUpLocale.password, "i")
      );

      expect(firstNameInput).toBeRequired();
      expect(lastNameInput).toBeRequired();

      expect(phoneNumberInput).toBeRequired();
      expect(phoneNumberInput).toHaveAttribute("type", "tel");

      expect(passwordInput).toHaveAttribute("type", "password");
      expect(passwordInput).toBeRequired();
    });
  });

  it("valid input flow: en & ru", async () => {
    for (const locale of ["en", "ru"]) {
      render(
        <TestAppProvider locale={locale as any}>
          <SignUp handler={getMockSignUpFormController(locale as any)} />
        </TestAppProvider>
      );
      const signUpLocale = locale === "en" ? en["SignUp"] : ru["SignUp"];

      firstNameInput = screen.getByLabelText<HTMLInputElement>(
        RegExp(signUpLocale.firstName, "i")
      );
      lastNameInput = screen.getByLabelText<HTMLInputElement>(
        RegExp(signUpLocale.lastName, "i")
      );
      phoneNumberInput = screen.getByLabelText<HTMLInputElement>(
        RegExp(signUpLocale.phoneNumber, "i")
      );
      passwordInput = screen.getByLabelText<HTMLInputElement>(
        RegExp(signUpLocale.password, "i")
      );
      createAccBtn = screen.getByRole<HTMLButtonElement>("button", {
        name: RegExp(signUpLocale.createAccount, "i"),
      });

      expect(createAccBtn).toBeDisabled();
      userEvent.type(firstNameInput, "John");
      userEvent.type(lastNameInput, "Doe");
      userEvent.type(phoneNumberInput, "1234567890");
      userEvent.type(passwordInput, "password");

      expect(createAccBtn).toBeEnabled();
      expect(screen.queryByLabelText(RegExp(signUpLocale.enterOTP))).toBeNull();

      userEvent.click(createAccBtn);

      const otpInput = await screen.findByLabelText(
        RegExp(signUpLocale.enterOTP, "i")
      );
      const verifyOTPBtn = screen.getByRole("button", {
        name: RegExp(signUpLocale.verifyOTP),
      });
      expect(otpInput).toBeRequired();

      expect(verifyOTPBtn).toBeDisabled();
      userEvent.type(otpInput, "123456");
      expect(verifyOTPBtn).toBeEnabled();

      userEvent.click(verifyOTPBtn);

      expect(
        await screen.findByRole("button", {
          name: RegExp(signUpLocale.verifyOTP),
        })
      ).not.toBeVisible();

      const alert = await screen.findByRole("alert");
      within(alert).getByText(RegExp(signUpLocale.phoneVerified));
    }
  });

  it("invalid input flow: en & ru", async () => {
    for (const locale of ["en", "ru"]) {
      const handler = getMockSignUpFormController(locale as "en" | "ru");

      render(
        <TestAppProvider locale={locale as any}>
          <SignUp handler={handler} />
        </TestAppProvider>
      );
      const signUpLocale = locale === "en" ? en["SignUp"] : ru["SignUp"];

      firstNameInput = screen.getByLabelText<HTMLInputElement>(
        RegExp(signUpLocale.firstName, "i")
      );
      lastNameInput = screen.getByLabelText<HTMLInputElement>(
        RegExp(signUpLocale.lastName, "i")
      );
      phoneNumberInput = screen.getByLabelText<HTMLInputElement>(
        RegExp(signUpLocale.phoneNumber, "i")
      );
      passwordInput = screen.getByLabelText<HTMLInputElement>(
        RegExp(signUpLocale.password, "i")
      );
      createAccBtn = screen.getByRole<HTMLButtonElement>("button", {
        name: RegExp(signUpLocale.createAccount, "i"),
      });

      userEvent.type(firstNameInput, "John");
      userEvent.type(lastNameInput, "Doe");
      // invalid inputs below
      userEvent.type(phoneNumberInput, "1234567");
      userEvent.type(passwordInput, "passw");

      userEvent.click(createAccBtn);

      const errorMessage = locale === "en" ? "Invalid input" : "Неверный ввод";
      const phoneErrorMessage =
        locale === "en"
          ? "Phone number is invalid"
          : "Номер телефона недействителен";
      const passwordErrorMessage =
        locale === "en" ? "Password is too short" : "Пароль слишком короткий";

      const alert = await screen.findByRole("alert");

      within(alert).getByText(RegExp(errorMessage));

      await screen.findByText(RegExp(phoneErrorMessage, "i"));
      await screen.findByText(RegExp(passwordErrorMessage, "i"));
    }
  });

  it("option to change number: en & ru", async () => {
    for (const locale of ["en", "ru"]) {
      render(
        <TestAppProvider locale={locale as any}>
          <SignUp handler={getMockSignUpFormController(locale as any)} />
        </TestAppProvider>
      );

      const signUpLocale = locale === "en" ? en["SignUp"] : ru["SignUp"];

      firstNameInput = screen.getByLabelText<HTMLInputElement>(
        RegExp(signUpLocale.firstName, "i")
      );
      lastNameInput = screen.getByLabelText<HTMLInputElement>(
        RegExp(signUpLocale.lastName, "i")
      );
      phoneNumberInput = screen.getByLabelText<HTMLInputElement>(
        RegExp(signUpLocale.phoneNumber, "i")
      );
      passwordInput = screen.getByLabelText<HTMLInputElement>(
        RegExp(signUpLocale.password, "i")
      );

      userEvent.type(firstNameInput, "John");
      userEvent.type(lastNameInput, "Doe");
      userEvent.type(phoneNumberInput, "1234567890");
      userEvent.type(passwordInput, "password");

      createAccBtn = screen.getByRole<HTMLButtonElement>("button", {
        name: RegExp(signUpLocale.createAccount, "i"),
      });
      userEvent.click(createAccBtn);

      const changeNumberBtn = await screen.findByRole("button", {
        name: RegExp(signUpLocale.changeNumber, "i"),
      });
      userEvent.click(changeNumberBtn);

      await waitForElementToBeRemoved(() =>
        screen.queryByRole("button", {
          name: RegExp(signUpLocale.changeNumber, "i"),
        })
      );
    }
  });
});
