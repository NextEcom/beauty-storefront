import { AvailableLocale } from "@/types";
import { ExpandMore } from "@mui/icons-material";
import { Button } from "@mui/material";
import { AppConfig } from "config/app";
import { useRouter } from "next/router";
import { Menu } from "../base";

export function LanguageSelector() {
  const { locale, push, pathname } = useRouter();

  return (
    <Menu>
      <Menu.Button>
        <Button
          sx={{
            fontSize: 12,
          }}
          size="small"
          color="inherit"
        >
          {AppConfig.LocalesFlags[locale as AvailableLocale]}{" "}
          {locale?.toUpperCase()}
          <ExpandMore fontSize="inherit" />
        </Button>
      </Menu.Button>
      <Menu.List>
        {AppConfig.AvailableLocales.map((locale) => (
          <Menu.Item
            key={locale}
            onClick={() =>
              push(pathname, pathname, {
                locale,
              })
            }
          >
            {AppConfig.LocalesFlags[locale]} {AppConfig.LocalesNames[locale]}
          </Menu.Item>
        ))}
      </Menu.List>
    </Menu>
  );
}
