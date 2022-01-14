import { AvailableLocale } from "@/types";
import { Translate } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AppConfig } from "config/app";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import * as React from "react";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
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

  const setLocale = (locale: AvailableLocale) => {
    return () => {
      handleCloseLanguageMenu();
      push(pathname, pathname, { locale });
    };
  };

  return (
    <>
      <AppBar position="sticky" elevation={1} color="inherit">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="div">
              LOGO
            </Typography>
            <Box flexGrow={1} />

            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                aria-label={t("Common.change_language")}
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
                {AppConfig.AvailableLocales.map((locale) => (
                  <MenuItem key={locale} onClick={setLocale(locale)}>
                    {AppConfig.LocalesNames[locale]}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </>
  );
};
