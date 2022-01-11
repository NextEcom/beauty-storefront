import { ReactNode } from "react";
import defaultLayoutLocales from "i18n/locales/DefaultLayout.json";
import enLocales from "i18n/locales/en.json";
import ruLocales from "i18n/locales/ru.json";
import I18nProvider from "i18n/I18nProvider";
import { RouterContext } from "next/dist/shared/lib/router-context";
import nextRouterMock from "next-router-mock";

export default function TestAppProvider({
  locale = "en",
  children,
}: {
  locale?: "en" | "ru";
  children: ReactNode;
}) {
  nextRouterMock.locale = locale;
  nextRouterMock.locales = ["en", "ru"];
  nextRouterMock.defaultLocale = "en";
  return (
    <RouterContext.Provider value={nextRouterMock}>
      <I18nProvider
        locale={locale}
        messages={{
          ...defaultLayoutLocales["en"],
          ...(locale == "en" ? enLocales : ruLocales),
        }}
      >
        {children}
      </I18nProvider>
    </RouterContext.Provider>
  );
}
