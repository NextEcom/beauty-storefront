import { ReactNode } from "react";
import defaultLayoutLocales from "i18n/locales/DefaultLayout.json";
import enLocales from "i18n/locales/en.json";
import I18nProvider from "i18n/I18nProvider";
import { RouterContext } from "next/dist/shared/lib/router-context";
import nextRouterMock from "next-router-mock";

export default function TestAppProvider({ children }: { children: ReactNode }) {
  return (
    <RouterContext.Provider value={nextRouterMock}>
      <I18nProvider
        locale="en"
        messages={{
          ...defaultLayoutLocales["en"],
          ...enLocales,
        }}
      >
        {children}
      </I18nProvider>
    </RouterContext.Provider>
  );
}
