import { Box, Container, styled } from "@mui/material";
import { ComponentProps } from "react";

export const Flexbox = styled(Box)`
  display: flex;
`;

export function AppContainer(props: ComponentProps<typeof Container>) {
  return <Container maxWidth={"lg"} {...props} />;
}

export * from "./Menu";
export * from "./NavLink";
export * from "./SnackbarAlert";
