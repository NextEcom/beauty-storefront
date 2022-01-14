import { ThemeProvider } from "@emotion/react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Translate } from "@mui/icons-material";
import {
  CssBaseline,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import * as nextImage from "next/image";
import React, { useState } from "react";
import { AppConfig } from "../config/app";
import theme from "../src/styles/theme";
import TestAppProvider from "../testUtils/TestAppProvider";

const Locales = AppConfig.Locale;

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

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    const [locale, setLocale] = useState(AppConfig.defaultLocale);
    const toggleLocale = () => {
      setLocale(locale === Locales.en ? Locales.ru : Locales.en);
    };
    return (
      <TestAppProvider locale={locale as any}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
            <Translate />
            <ToggleButtonGroup value={locale} onChange={toggleLocale}>
              <ToggleButton value={Locales.en}>en</ToggleButton>
              <ToggleButton value={Locales.ru}>ru</ToggleButton>
            </ToggleButtonGroup>
          </Stack>
          <Box marginTop={6}>
            <Story />
          </Box>
        </ThemeProvider>
      </TestAppProvider>
    );
  },
];
