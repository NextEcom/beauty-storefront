import { ThemeProvider } from "@emotion/react";
import {
  CssBaseline,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import * as nextImage from "next/image";
import React, { useState } from "react";
import TestAppProvider from "../testUtils/TestAppProvider";
import theme from "../src/styles/theme";
import { Translate } from "@mui/icons-material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
    const [locale, setLocale] = useState("en");
    const toggleLocale = () => {
      setLocale(locale === "en" ? "ru" : "en");
    };
    return (
      <TestAppProvider locale={locale as any}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
            <Translate />
            <ToggleButtonGroup value={locale} onChange={toggleLocale} exclusive>
              <ToggleButton value={"en"}>en</ToggleButton>
              <ToggleButton value={"ru"}>ru</ToggleButton>
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