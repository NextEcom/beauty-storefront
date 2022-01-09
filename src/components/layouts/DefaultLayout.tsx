import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Translate } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const { push, pathname } = useRouter();
  const t = useTranslations();

  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorElLang(null);
  };

  const setLanguage = (lang: string) => {
    return () => {
      handleCloseLanguageMenu();
      push(pathname, pathname, { locale: lang });
    };
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="div">
              LOGO
            </Typography>
            <Box flexGrow={1} />

            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                aria-label={t("change_language")}
                sx={{ mr: "25px" }}
                onClick={handleOpenLanguageMenu}
                color="inherit"
              >
                <Translate />
              </IconButton>
              <Menu
                anchorEl={anchorElLang}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElLang)}
                sx={{ mt: `45px` }}
              >
                <MenuItem onClick={setLanguage("en")}>English</MenuItem>
                <MenuItem onClick={setLanguage("ru")}>Russian</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </>
  );
};
export default DefaultLayout;
