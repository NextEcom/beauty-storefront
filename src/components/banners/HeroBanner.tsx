import theme from "@/styles/theme";
import { Box, Stack, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export type HeroBannerData = {
  heading: string;
  subHeading: string;
  text: string;
  link: string;
  linkText: string;
  backgroundImage: string;
};

export default function HeroBanner({
  bannerData: data,
}: {
  bannerData?: HeroBannerData;
}) {
  const { locale } = useRouter();
  return data ? (
    <Box
      data-testid="homepage-hero-banner"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      borderBottom={`1px solid ${theme.palette.divider}`}
      sx={{
        height: "90vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `${data?.backgroundImage}`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack gap={theme.spacing(4)} maxWidth={`560px`} alignItems={"center"}>
        <Typography variant="h4">{data?.subHeading}</Typography>
        <Typography variant="h2">{data?.heading}</Typography>
        <Typography variant="body1">{data?.text}</Typography>
        <Link href={data.link as string} locale={locale} passHref>
          <Button
            disableElevation
            variant="contained"
            sx={{
              borderRadius: 0,
            }}
          >
            {data.linkText}
          </Button>
        </Link>
      </Stack>
    </Box>
  ) : null;
}
