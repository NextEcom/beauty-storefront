import type { GetStaticPropsContext, NextPage } from "next";
import pick from "lodash.pick";
import { useTranslations } from "next-intl";
import { Box } from "@mui/system";
import { Stack, Typography, Button } from "@mui/material";
import Link from "next/link";
import { getHomepageHeroBanner } from "@/cms";
import theme from "@/styles/theme";
import { useRouter } from "next/router";

type Props = {
  heroBanner: {
    heading: string;
    subHeading: string;
    text: string;
    link: string;
    linkText: string;
    backgroundImage: string;
  };
};

const Index: NextPage<Props> = ({ heroBanner }) => {
  const t = useTranslations("Index");
  const { locale } = useRouter();
  return (
    <Box>
      {heroBanner && (
        <Box
          data-testid="homepage-hero-banner"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          sx={{
            height: "90vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `${heroBanner.backgroundImage}`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <Stack gap={theme.spacing(4)} width={`50%`} alignItems={"center"}>
            <Typography variant="h4">{heroBanner.subHeading}</Typography>
            <Typography variant="h3">{heroBanner.heading}</Typography>
            <Typography variant="body1">{heroBanner.text}</Typography>
            <Link href={heroBanner.link} locale={locale} passHref>
              <Button
                disableElevation
                variant="contained"
                sx={{
                  borderRadius: 0,
                }}
              >
                {heroBanner.linkText}
              </Button>
            </Link>
          </Stack>
        </Box>
      )}
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
      heroBanner: await getHomepageHeroBanner(locale),
    },
  };
}

export default Index;
