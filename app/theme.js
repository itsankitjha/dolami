// src/styles/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff4040",
    },
    secondary: {
      main: "#e63939",
    },
    background: {
      default: "#2c2c2c",
      paper: "#424242",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

export default theme;
