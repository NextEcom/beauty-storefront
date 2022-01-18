import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { LayoutConstants } from "config/app";
import { AppContainer, Flexbox, NavLink } from "../base";
import { CartIconButton } from "../base/CartIconButton";
import { SmallSearchBox } from "./Search/SmallSearchBox";

export type AppHeaderProps = {};
export function AppHeader(props: AppHeaderProps) {
  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        height: LayoutConstants.AppHeaderHeight,
        bgcolor: "grey.50",
      }}
      color="inherit"
      {...props}
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
            gap={4}
            sx={{
              width: "100%",
            }}
          >
            <Box>
              <Typography variant="h6" noWrap component="div">
                LOGO
              </Typography>
            </Box>
            <Flexbox flex={1} gap={3}>
              {["Face", "Body", "Hair", "Kids"].map((item) => (
                <Box key={item}>
                  <NavLink href={`/${item.toLowerCase().replaceAll(" ", "-")}`}>
                    <Typography variant="subtitle1" noWrap>
                      {item}
                    </Typography>
                  </NavLink>
                </Box>
              ))}
            </Flexbox>
            <Box>
              <SmallSearchBox />
            </Box>
            <Flexbox justifyContent={"flex-end"} gap={1.5}>
              <CartIconButton />
            </Flexbox>
          </Flexbox>
        </Toolbar>
      </AppContainer>
    </AppBar>
  );
}
