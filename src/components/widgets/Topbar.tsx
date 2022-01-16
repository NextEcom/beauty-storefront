import { CallOutlined, ExpandMore, MailOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { AppConfig, LayoutConstants } from "config/app";
import { useRouter } from "next/router";
import { AppContainer, Flexbox } from "../base";
import { Menu } from "../base/Menu";
import { NavLink } from "../base/NavLink";

export type TopbarProps = {
  data?: {
    supportPhone?: string;
    supportEmail?: string;
    helpPageText?: string;
    helpPageHref?: string;
  };
};
export function Topbar({
  data = {
    supportEmail: "codewaseem@gmail.com",
    supportPhone: "+91 7676424299",
    helpPageText: "Need Help?",
    helpPageHref: "/help",
  },
}: TopbarProps) {
  const { locale, push, pathname } = useRouter();
  const SupportIcons = {
    supportPhone: CallOutlined,
    supportEmail: MailOutlined,
  };
  return (
    <Box
      sx={{
        height: `${LayoutConstants.TopbarHeight}px`,
        fontSize: 12,
        bgcolor: "primary.main",
        color: "primary.contrastText",
      }}
    >
      <AppContainer
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Flexbox alignItems="center" gap={3}>
          {(
            ["supportPhone", "supportEmail"] as ["supportPhone", "supportEmail"]
          ).map((key) => {
            const Icon = SupportIcons[key];
            return (
              <Flexbox gap={1} key={key} alignItems="center">
                <Icon fontSize="small" />
                <Box component="span">{data[key]}</Box>
              </Flexbox>
            );
          })}
        </Flexbox>

        <Flexbox alignItems="center" gap={4}>
          <Box>
            <NavLink
              fontSize={12}
              locale={locale}
              href={data.helpPageHref || "/"}
              color="inherit"
            >
              {data.helpPageText}
            </NavLink>
          </Box>
          <Menu>
            <Menu.Button>
              <Button
                sx={{
                  fontSize: 12,
                }}
                size="small"
                color="inherit"
              >
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
                  {AppConfig.LocalesNames[locale]}
                </Menu.Item>
              ))}
            </Menu.List>
          </Menu>
        </Flexbox>
      </AppContainer>
    </Box>
  );
}
