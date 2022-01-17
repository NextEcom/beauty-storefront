import { ShoppingCart } from "@mui/icons-material";
import { Badge, BadgeProps, styled } from "@mui/material";
import { useTranslations } from "next-intl";
import { HeaderIconButton } from "./HeaderIconButton";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export type CartIconButtonProps = {
  onClick?: () => void;
  count?: number;
};
export function CartIconButton({ onClick, count = 0 }: CartIconButtonProps) {
  const t = useTranslations("Common");
  return (
    <HeaderIconButton aria-label={t("openCart")} onClick={onClick}>
      <ShoppingCart fontSize="inherit" />
      <StyledBadge
        aria-label={t("itemsInCart", { count })}
        showZero
        badgeContent={count}
        color="primary"
      />
    </HeaderIconButton>
  );
}
