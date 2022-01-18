import { AppEvent, AppEventManager } from "@/controllers/app";
import { AvailableLocale } from "@/types";
import { Box, Button, ButtonProps, styled, Typography } from "@mui/material";
import { LayoutConstants } from "config/app";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { AppContainer, Flexbox } from "../base";
import { NavLink } from "../base/NavLink";
import { LanguageSelector } from "./LanguageSelector";

const appEventManager = AppEventManager.getInstance();

export type TobarItem = {
  type: "link" | "text";
  icon?: string;
  text?: string;
  href?: string;
};

export type TopbarProps = {
  leftItems?: TobarItem[];
  rightItems?: TobarItem[];
  centerItem?: TobarItem;
};

const TopbarIconImg = styled("img")`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const defaultTopbarItems: { [key in AvailableLocale]: TopbarProps } = {
  en: {
    leftItems: [
      {
        type: "link",
        text: "🏠 Home",
        href: "/",
      },
      {
        type: "link",
        text: "🛍 Store",
        href: "/store",
      },
      {
        type: "link",
        text: "🤙 Help?",
        href: "/help",
      },
    ],
    rightItems: [],
    centerItem: {
      type: "text",
      text: "🎉50% off on all items, use code: 50OFF! Hurry Up!🎉",
    },
  },
  ru: {
    leftItems: [
      {
        type: "link",
        text: "🏠 Главная",
        href: "/",
      },
      {
        type: "link",
        text: "🛍 Магазин",
        href: "/store",
      },
      {
        type: "link",
        text: "🤙 Помощь?",
        href: "/help",
      },
    ],
    rightItems: [],
    centerItem: {
      type: "text",
      text: "🎉Скидка 50% на все товары, введите код: 50OFF! торопиться!🎉",
    },
  },
};

const TextButton = (props: ButtonProps) => (
  <Button
    size="small"
    variant="text"
    color="inherit"
    sx={{ fontSize: 12, fontWeight: "400", textTransform: "none" }}
    {...props}
  />
);

function TopbarItem({ item }: { item?: TobarItem }) {
  const icon = item?.icon ? <TopbarIconImg src={item.icon} alt="" /> : null;

  if (!item) return null;

  return (
    <Flexbox key={item.text} alignItems="center" fontSize={"12"}>
      {item.type === "link" && (
        <NavLink
          href={item.href || "#"}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            fontSize: "12px",
            color: "primary.contrastText",
          }}
        >
          {icon}
          <span>{item.text}</span>
        </NavLink>
      )}
      {item.type === "text" && (
        <>
          {icon}
          <Typography fontSize="inherit" lineHeight={`16px`} component={"span"}>
            {item.text}
          </Typography>
        </>
      )}
    </Flexbox>
  );
}

export function Topbar(props: TopbarProps) {
  const { locale } = useRouter();
  const t = useTranslations("Common");
  const defaultItems = defaultTopbarItems[locale as AvailableLocale];
  const leftItems = props.leftItems || defaultItems.leftItems;
  const rightItems = props.rightItems || defaultItems.rightItems;
  const centerItem = props.centerItem || defaultItems.centerItem;

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
          {leftItems?.map((item) => {
            return <TopbarItem key={item.text} item={item} />;
          })}
        </Flexbox>

        <Flexbox alignItems="center" gap={3}>
          {centerItem && <TopbarItem item={centerItem} />}
        </Flexbox>

        <Flexbox alignItems="center" gap={1.5}>
          {rightItems?.map((item) => {
            return <TopbarItem key={item.text} item={item} />;
          })}
          <TextButton
            onClick={() =>
              appEventManager.dispatch({
                type: AppEvent.OpenSignupModal,
              })
            }
          >
            {t("signUp")}
          </TextButton>
          <TextButton
            onClick={() => {
              appEventManager.dispatch({
                type: AppEvent.OpenLoginModal,
              });
            }}
          >
            {t("signIn")}
          </TextButton>
          <LanguageSelector />
        </Flexbox>
      </AppContainer>
    </Box>
  );
}
