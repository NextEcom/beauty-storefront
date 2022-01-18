import { Box } from "@mui/material";
import { ComponentMeta } from "@storybook/react";
import { SmallSearchBox } from "./SmallSearchBox";

export default {
  title: "SmallSearchBox",
  component: SmallSearchBox,
} as ComponentMeta<typeof SmallSearchBox>;

export const Default = () => (
  <Box padding={2}>
    <SmallSearchBox />
  </Box>
);
