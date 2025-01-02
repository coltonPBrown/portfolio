import { createTheme } from "@mui/material/styles";

// Extend MUI's theme interface
declare module "@mui/material/styles" {
  interface Palette {
    accent?: Palette["primary"];
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}

// Define the custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#6a0dad",
    },
    secondary: {
      main: "#D1C4E9",
    },
    accent: {
      main: "#e0aaff",
    },
  },
});

export default theme;
