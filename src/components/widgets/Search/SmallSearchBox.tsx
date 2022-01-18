import { SearchOutlined } from "@mui/icons-material";
import { Box, TextField, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import { useSearchWithSuggestions } from "./useSearchWithSuggestions";

export function SmallSearchBox() {
  const theme = useTheme();
  const t = useTranslations("Common");
  const { query, setQuery } = useSearchWithSuggestions();
  return (
    <Box
      sx={{
        margin: "auto",
        maxWidth: "250px",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: theme.shadows[1],
      }}
    >
      <TextField
        placeholder={t("searchForProducts")}
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          sx: {
            height: 40,
            paddingRight: 0,
            color: "grey.700",
            background: "#fff",
            "& fieldset": {
              border: "none",
            },
          },

          endAdornment: (
            <SearchOutlined
              sx={{
                color: "palette.grey[600]",
                marginRight: 0.8,
              }}
              fontSize="small"
            />
          ),
        }}
      />
    </Box>
  );
}
