import { Fab, Grid } from "@mui/material";
import React from "react";
import SplitDialog from "./SplitDialog";
import { CallSplit } from "@mui/icons-material";

const Splitter: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Grid item xs={6} md={6}>
      <Fab
        variant="extended"
        onClick={handleClickOpen}
        color="primary"
        sx={{ mt: "1rem", width: "100%" }}
      >
        <CallSplit />
        Разделить
      </Fab>
      <SplitDialog open={open} setOpen={setOpen} />
    </Grid>
  );
};

export default Splitter;
