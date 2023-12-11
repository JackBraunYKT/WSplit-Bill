// fonts:
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Container, Grid } from "@mui/material";
import GeneralReceipt from "./components/GeneralReceipt/GeneralReceipt";
import ReceiptList from "./components/ReceiptPart/ReceiptList";
import LinearProgressWithLabel from "./components/LinearProgress";
import CombineProvider from "./contexts";

function App() {
  return (
    <CombineProvider>
      <Container sx={{ mt: "1.5rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <GeneralReceipt />
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <LinearProgressWithLabel />
              </Grid>
              <Grid item xs={12} md={12}>
                <ReceiptList />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </CombineProvider>
  );
}

export default App;
