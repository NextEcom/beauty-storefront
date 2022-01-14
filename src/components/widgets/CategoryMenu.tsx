import { NavLink } from "@/components/base/NavLink";
import { CategoryMenuItem } from "@/types";
import { ChevronRight } from "@mui/icons-material";
import { Card, Grid, MenuItem, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import Box from "@mui/system/Box";
import Link from "next/link";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const StyledImg = styled("img")`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export type CategoryMenuProps = {
  items?: CategoryMenuItem[];
  hoverEffect?: boolean;
};

export function SubMenuDialog({
  isOpen,
  item,
}: {
  isOpen: boolean;
  item: CategoryMenuItem;
}) {
  const theme = useTheme();
  return (
    <Box
      data-testid={`submenu-of-${item.href}`}
      position={"absolute"}
      display={isOpen ? "block" : "none"}
      sx={{
        minWidth: "780px",
        left: "100%",
        top: "0",
        bottom: 0,
      }}
    >
      <Card
        elevation={2}
        sx={{
          ml: "1rem",
          minWidth: "200px",
        }}
      >
        <Box display={"flex"} px={2.5} py={1.75} alignItems="unset">
          <Box flex="1 1 0">
            <Grid container spacing={2}>
              {item.subMenu?.map((item, ind) => (
                <Grid item md={4} key={ind}>
                  <Typography
                    variant="h6"
                    sx={{
                      marginBottom: "8px",
                    }}
                  >
                    <NavLink href={item.href}>{item.title}</NavLink>
                  </Typography>

                  {item.subMenu?.map((sub) => (
                    <Typography variant="body1" key={sub.href}>
                      <NavLink href={sub.href} color={theme.palette.grey[500]}>
                        {sub.title}
                      </NavLink>
                    </Typography>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export function MainMenuItem({ item }: { item: CategoryMenuItem }) {
  const hasSubMenu = Boolean(item.subMenu?.length);
  const [isHovered, setIsHovered] = useState(false);
  const deboucedSetIsHovered = useDebouncedCallback(
    (bool: boolean) => setIsHovered(bool),
    200
  );

  return (
    <Box
      data-testid={`item-container-${item.href}`}
      aria-haspopup={hasSubMenu ? "true" : "false"}
      key={item.href}
      onMouseEnter={() => deboucedSetIsHovered(true)}
      onMouseLeave={() => deboucedSetIsHovered(false)}
    >
      <Link passHref href={item.href}>
        <MenuItem
          key={item.title}
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: "0px 1rem",
            height: 40,
            whiteSpace: "pre",
            transition: "all 250ms ease-in-out",
          }}
        >
          {item.icon && (
            <Box
              width={"24px"}
              height={"24px"}
              marginRight={"16px"}
              display={"inline-block"}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <StyledImg src={item.icon} alt="" />
            </Box>
          )}
          <Typography
            sx={{
              flex: "1 1 0",
            }}
          >
            {item.title}
          </Typography>
          {hasSubMenu && (
            <ChevronRight fontSize="small" aria-label="Expand Category 3" />
          )}
        </MenuItem>
      </Link>
      {item.subMenu && <SubMenuDialog item={item} isOpen={isHovered} />}
    </Box>
  );
}

export function CategoryMenu({ items }: CategoryMenuProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: "300px",
        position: "relative",
        borderRadius: "8px",
        overflow: "unset",
        transition: "all 250ms ease-in-out",
      }}
      data-testid="categories-menu"
    >
      <Card>
        {items &&
          items.map((item) => <MainMenuItem item={item} key={item.href} />)}
      </Card>
    </Box>
  );
}
