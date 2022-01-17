import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { LayoutConstants } from "config/app";
import { AppContainer, Flexbox } from "../base";
import { CartIconButton } from "../base/CartIconButton";
import { SimpleSearchBox } from "./SimpleSearchBox";

export type AppHeaderProps = {};
export function AppHeader(props: AppHeaderProps) {
  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        height: LayoutConstants.AppHeaderHeight,
      }}
      color="inherit"
    >
      <AppContainer
        sx={{
          height: "100%",
        }}
      >
        <Toolbar
          sx={{
            height: "100%",
          }}
          disableGutters
        >
          <Flexbox
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={2}
            sx={{
              width: "100%",
            }}
          >
            <Box flex={1}>
              <Typography variant="h6" noWrap component="div">
                LOGO
              </Typography>
            </Box>
            <Box flex={3}>
              <SimpleSearchBox />
            </Box>
            <Flexbox justifyContent={"flex-end"} gap={1.5} flex={2}>
              <CartIconButton />
            </Flexbox>
          </Flexbox>
        </Toolbar>
      </AppContainer>
    </AppBar>
  );
}
