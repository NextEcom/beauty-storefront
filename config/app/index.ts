enum Locale {
  en = "en",
  ru = "ru",
}

export const AppConfig = {
  AvailableLocales: Object.values(Locale),
  Locale,
  LocalesNames: {
    [Locale.en]: "English",
    [Locale.ru]: "Русский",
  },
  defaultLocale: Locale.en,
};
