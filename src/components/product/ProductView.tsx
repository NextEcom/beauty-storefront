import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";

export type ProductData = {
  id: string;
  name: string;
  description: string;
  price: number;
  currencyCode: string;
  currencySymbol: string;
  thumbnail: string;
};

export default function ProductView({ data }: { data: ProductData }) {
  const theme = useTheme();
  return (
    <Box
      minWidth="230px"
      width="275px"
      maxWidth="275px"
      padding={theme.spacing(2)}
      sx={{
        cursor: "pointer",
        ":hover": {
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Box position={"relative"} height={210} width={"100%"}>
        <Image
          src={data.thumbnail}
          alt={data.name}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </Box>
      <Stack gap={theme.spacing(1)}>
        <Typography variant="h6" textOverflow={"ellipsis"}>
          {data.name}
        </Typography>
        <Typography variant="subtitle1" textOverflow={"ellipsis"}>
          {data.currencySymbol}
          {data.price}
        </Typography>
      </Stack>
    </Box>
  );
}
