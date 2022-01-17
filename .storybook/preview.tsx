import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import * as nextImage from "next/image";
import React from "react";
import theme from "../src/styles/theme";
import TestAppProvider from "../testUtils/TestAppProvider";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => {
    return (
      <img
        {...props}
        css={{
          width: "100%",
          objectFit: "cover",
        }}
      />
    );
  },
});

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", right: "🇺🇸", title: "English" },
        { value: "ru", right: "🇷🇺", title: "Русский" },
      ],
    },
  },
};

export const parameters = {
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <TestAppProvider locale={context.globals.locale as any}>
        <EmotionThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Story />
          </ThemeProvider>
        </EmotionThemeProvider>
      </TestAppProvider>
    );
  },
];
