import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/styles/theme/createEmotionCache";
import theme from "@/styles/theme";
import I18nProvider from "i18n/I18nProvider";
import "@fontsource/roboto";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import { ReactNode } from "react";
import { NextComponentType, NextPageContext } from "next";
import defaultLayoutLocales from "i18n/locales/DefaultLayout.json";

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

  const toUseDefaultLayout = !Component.getLayout;

  const getLayout =
    Component.getLayout ||
    ((page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <I18nProvider
          messages={{
            ...(toUseDefaultLayout
              ? defaultLayoutLocales[
                  router.locale as keyof typeof defaultLayoutLocales
                ]
              : {}),
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
