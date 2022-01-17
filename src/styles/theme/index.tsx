import { createTheme, ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#222127",
    },
    secondary: {
      main: "#33d1a7",
    },
    text: {
      primary: "#343440",
    },
  },
};
// Create a theme instance.
const theme = createTheme(themeOptions);

export default theme;
