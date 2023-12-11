import { List } from "@mui/material";
import React from "react";
import { ReceiptPartContext } from "../../contexts/ReceiptPartContext";
import ReceiptItem from "./ReceiptItem";
import CardWithTitle from "../CardWithTitle";

const ReceiptList: React.FC = () => {
  const { receipts } = React.useContext(ReceiptPartContext);

  return (
    <CardWithTitle title="Разделенные чеки">
      <List disablePadding>
        {receipts.map((receipt) => (
          <ReceiptItem key={receipt.id} receipt={receipt} />
        ))}
      </List>
    </CardWithTitle>
  );
};

export default ReceiptList;
