import { AvailableLocale } from "@/types";
import { AppConfig } from "config/app";
import I18nProvider from "i18n/I18nProvider";
import localesJson from "i18n/locales.json";
import nextRouterMock from "next-router-mock";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { ReactNode } from "react";

export default function TestAppProvider({
  locale = AppConfig.defaultLocale,
  children,
}: {
  locale?: AvailableLocale;
  children: ReactNode;
}) {
  nextRouterMock.locale = locale;
  nextRouterMock.locales = AppConfig.AvailableLocales;
  nextRouterMock.defaultLocale = AppConfig.defaultLocale;
  return (
    <RouterContext.Provider value={nextRouterMock}>
      <I18nProvider locale={locale} messages={localesJson[locale]}>
        {children}
      </I18nProvider>
    </RouterContext.Provider>
  );
}
