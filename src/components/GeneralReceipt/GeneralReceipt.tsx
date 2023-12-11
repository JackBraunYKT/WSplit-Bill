import React from "react";
import { Grid } from "@mui/material";
import { GeneralReceiptContext } from "../../contexts/GeneralReceiptContext";
import Receipt from "../Receipt";
import PositionAdd from "../PositionAdd";
import Splitter from "../Splitter";

const GeneralReceipt: React.FC = () => {
  const { positions, totalPrice } = React.useContext(GeneralReceiptContext);

  return (
    <>
      <Receipt name="Общий чек" positions={positions} totalPrice={totalPrice} />
      <Grid container spacing={2}>
        <PositionAdd />
        <Splitter />
      </Grid>
    </>
  );
};

export default GeneralReceipt;
