import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import buttonStyles from "./button"; // Assurez-vous que le chemin est correct
import { Breakpoint } from "./breakpoints";
const theme = createTheme({
  Breakpoint,
  palette: {
    primary: {
      main: "#1E0A3C",
    },
    secondary: {
      main: "#3D64FF",
    },
    customWhite: {
      main: "#fff",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h2 : 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
    ...buttonStyles, // Assurez-vous que cela est correctement inclus
  },
});

export default theme;
