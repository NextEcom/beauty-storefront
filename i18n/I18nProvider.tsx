import { NextIntlProvider } from "next-intl";
import { ComponentProps } from "react";

export default function I18nProvider(
  props: ComponentProps<typeof NextIntlProvider>
) {
  return (
    <NextIntlProvider
      formats={{
        dateTime: {
          short: {
            day: "numeric",
            month: "short",
            year: "numeric",
          },
        },
      }}
      timeZone="Asia/Kolkata"
      {...props}
    />
  );
}
