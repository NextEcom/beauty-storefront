import { AppConfig } from "config/app";

export type AvailableLocale = keyof typeof AppConfig.Locale;

export enum AppEvent {
  LocaleChanged = "localeChanged",
  UserLoggedIn = "userLoggedIn",
  UserLoggedOut = "userLoggedOut",
  UserRegistered = "userRegistered",
  UserVerified = "userVerified",
  PageTransition = "pageTransition",
}

export enum AppRoute {
  Home = "/",
  Login = "/login",
  Register = "/register",
}

export enum AppDialog {
  Login = "login",
  Register = "register",
  Verify = "verify",
}
