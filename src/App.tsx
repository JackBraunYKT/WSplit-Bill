// fonts:
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import ReceiptProvider from "./contexts/GeneralReceiptContext";
import ReceiptPartProvider from "./contexts/ReceiptPartContext";
import GeneralReceipt from "./components/GeneralReceipt/GeneralReceipt";
import ReceiptList from "./components/ReceiptPart/ReceiptList";

const theme = createTheme({
  palette: {
    background: {
      default: "#f3f4fa",
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ReceiptProvider>
        <ReceiptPartProvider>
          <Container sx={{ mt: "1.5rem" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <GeneralReceipt />
              </Grid>
              <Grid item xs={12} md={4}>
                <ReceiptList />
              </Grid>
            </Grid>
          </Container>
        </ReceiptPartProvider>
      </ReceiptProvider>
    </ThemeProvider>
  );
}

export default App;
