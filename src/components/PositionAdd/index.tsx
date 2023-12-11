import { Add } from "@mui/icons-material";
import { Fab, Grid } from "@mui/material";
import React from "react";
import PositionAddDialog from "./PositionAddDialog";

const PositionAdd: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Grid item xs={6} md={6}>
      <Fab
        color="primary"
        sx={{ mt: "1rem", width: "100%" }}
        onClick={handleClickOpen}
        variant="extended"
      >
        <Add sx={{ mr: 1 }} />
        Добавить
      </Fab>
      <PositionAddDialog open={open} setOpen={setOpen} />
    </Grid>
  );
};

export default PositionAdd;
