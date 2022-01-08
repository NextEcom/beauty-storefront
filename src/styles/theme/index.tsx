import { createTheme } from "@mui/material/styles";
import { red, teal, cyan } from "@mui/material/colors";

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
