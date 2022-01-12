import theme from "@/styles/theme";
import { HeroBannerData } from "@/types";
import { Box, Stack, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export type HeroBannerProps = {
  bannerData?: HeroBannerData;
};

export function HeroBanner({ bannerData: data }: HeroBannerProps) {
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
        position: "relative",
        height: "90vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        ...data.containerStyle,
      }}
    >
      <Box
        position={"absolute"}
        height={"100%"}
        width="100%"
        sx={{
          ...data.overlayStyle,
        }}
      />
      <Stack
        zIndex={1}
        gap={theme.spacing(4)}
        maxWidth={`560px`}
        alignItems={"center"}
      >
        <Typography variant="h4">{data?.subHeading}</Typography>
        <Typography variant="h2">{data?.heading}</Typography>
        <Typography variant="body1">{data?.text}</Typography>
        <Link href={data?.link || "#"} locale={locale} passHref>
          <Button
            disableElevation
            variant="contained"
            sx={{
              borderRadius: 0,
              ...data.btnStyle,
            }}
          >
            {data.linkText}
          </Button>
        </Link>
      </Stack>
    </Box>
  ) : null;
}
