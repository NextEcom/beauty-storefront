import { cyan, red, teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: teal[400],
    },
    secondary: {
      main: cyan[400],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
