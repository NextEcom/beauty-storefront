import { IconButton } from "@mui/material";
import { styled } from "@mui/system";

export const HeaderIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.grey["100"],
  ":hover": {
    bgcolor: theme.palette.grey[200],
  },
}));
