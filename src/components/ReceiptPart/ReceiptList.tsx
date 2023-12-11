import {
  Card,
  CardContent as MuiCardContent,
  List,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { ReceiptPartContext } from "../../contexts/ReceiptPartContext";
import ReceiptItem from "./ReceiptItem";

const CardContent = styled(MuiCardContent)`
  :last-child {
    padding-bottom: 16px;
  }
`;

const ReceiptList: React.FC = () => {
  const { receipts } = React.useContext(ReceiptPartContext);

  return (
    <Card component={Paper}>
      <CardContent>
        <Typography variant="h2">Разделенные чеки</Typography>
        <List disablePadding>
          {receipts.map((receipt) => (
            <ReceiptItem key={receipt.id} receipt={receipt} />
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ReceiptList;
