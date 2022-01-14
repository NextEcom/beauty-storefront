import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import theme from "@/styles/theme";
import createEmotionCache from "@/styles/theme/createEmotionCache";
import { AvailableLocale } from "@/types";
import { CacheProvider, EmotionCache } from "@emotion/react";
import "@fontsource/roboto";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import I18nProvider from "i18n/I18nProvider";
import localesJson from "i18n/locales/common.json";
import { NextComponentType, NextPageContext } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps<P = any> extends AppProps<P> {
  emotionCache?: EmotionCache;
  Component: NextComponentType<NextPageContext, any, P> & {
    getLayout: (page: ReactNode) => ReactNode;
  };
}

function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { messages, now, ...restPageProps },
    router,
  } = props;

  const getLayout =
    Component.getLayout ||
    ((page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <I18nProvider
          messages={{
            ...localesJson[
              (router.locale || router.defaultLocale) as AvailableLocale
            ],
            ...messages,
          }}
          now={now}
        >
          {getLayout(<Component {...restPageProps} />)}
        </I18nProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
