import { SearchOutlined } from "@mui/icons-material";
import { Box, Button, TextField, useTheme } from "@mui/material";

export function SimpleSearchBox() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        margin: "auto",
        maxWidth: "600px",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: theme.shadows[2],
      }}
    >
      <TextField
        placeholder="Search"
        fullWidth
        InputProps={{
          sx: {
            height: 50,
            paddingRight: 0,
            color: "grey.700",
            background: "#fff",
            "& fieldset": {
              border: "none",
            },
          },
          endAdornment: (
            <Button
              color="primary"
              variant="contained"
              disableElevation
              sx={{
                px: "2rem",
                height: "100%",
                borderRadius: "0 8px 8px 0",
              }}
            >
              Search
            </Button>
          ),
          startAdornment: (
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