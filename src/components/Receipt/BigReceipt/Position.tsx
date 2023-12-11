import React from "react";
import { IPosition } from "../../../models/IPosition";
import { TableCell, TableRow } from "@mui/material";

type Props = {
  position: IPosition;
};

const Position: React.FC<Props> = ({ position }) => {
  return (
    <TableRow>
      <TableCell>{position.name}</TableCell>
      <TableCell align="right">{`${position.totalQuantity} шт.`}</TableCell>
      <TableCell align="right">{`${position.unitPrice} ₽`}</TableCell>
      <TableCell align="right">{`${position.totalPrice} ₽`}</TableCell>
    </TableRow>
  );
};

export default Position;
