import Button from "@/components/Button";
import type { GetStaticPropsContext, NextPage } from "next";
import pick from "lodash.pick";
import { useTranslations } from "next-intl";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "@/styles/theme";

const Index: NextPage = () => {
  const t = useTranslations("Index");
  return (
    <Box>
      <Stack
        padding={theme.spacing(8)}
        alignItems={"flex-start"}
        gap={theme.spacing(2)}
      >
        <Typography variant="h4">{t("welcome")}</Typography>
        <Button>{t("hi")}</Button>
      </Stack>
    </Box>
  );
};

// pages/index.js
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: pick(await import(`i18n/locales/${locale}.json`), "Index"),
      now: new Date().getTime(),
    },
  };
}

export default Index;
