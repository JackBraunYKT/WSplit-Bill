import React from "react";
import { IReceiptPart } from "../../models/IReceipt";
import { Dialog, IconButton, ListItem, ListItemText } from "@mui/material";
import { ArrowForwardRounded } from "@mui/icons-material";
import Receipt from "../Receipt";

type Props = {
  receipt: IReceiptPart;
};

const ReceiptItem: React.FC<Props> = ({ receipt }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton
          onClick={handleOpen}
          sx={{ borderRadius: "10px" }}
          edge="end"
        >
          <ArrowForwardRounded />
        </IconButton>
      }
      disablePadding
      sx={{ mt: 1 }}
    >
      <ListItemText
        primary={receipt.name}
        secondary={`${receipt.totalPrice} ₽`}
        primaryTypographyProps={{
          fontSize: "13px",
          fontWeight: 500,
        }}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ style: { backgroundColor: "transparent" } }}
        fullWidth
        maxWidth="sm"
      >
        <Receipt
          name={receipt.name}
          totalPrice={receipt.totalPrice}
          positions={receipt.positions}
        />
      </Dialog>
    </ListItem>
  );
};

export default ReceiptItem;
