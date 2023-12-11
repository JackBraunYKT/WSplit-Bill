import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const theme = createTheme({
  palette: {
    background: {
      // default: "#f3f4fa",
      default: "#357a38",
    },
  },
  typography: {
    h2: {
      fontSize: 18,
      fontWeight: 800,
    },
    h3: {
      fontSize: 25,
    },
    fontFamily: "Montserrat, sans-serif",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          color: "rgb(18, 31, 67)",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: "none",
          padding: "0.5rem 0px 0.5rem 1rem",
          ":first-child": {
            paddingLeft: "0",
          },
        },
      },
    },
  },
});

interface Props {
  children: React.ReactNode;
}

const CustomThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
