import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { LayoutConstants } from "config/app";
import { AppContainer, Flexbox } from "../base";
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
            sx={{
              width: "100%",
            }}
          >
            <Box>
              <Typography variant="h6" noWrap component="div">
                LOGO
              </Typography>
            </Box>
            <Box>
              <SimpleSearchBox />
            </Box>
            <Box />
          </Flexbox>
        </Toolbar>
      </AppContainer>
    </AppBar>
  );
}
