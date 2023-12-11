import React from "react";
import { IPosition } from "../../../models/IPosition";
import { ListItem, ListItemText } from "@mui/material";

type Props = {
  position: IPosition;
};

const Position: React.FC<Props> = ({ position }) => {
  return (
    <ListItem disableGutters>
      <ListItemText
        primary={`${position.name}${
          position.totalQuantity > 0 ? ` x${position.totalQuantity}` : ""
        }`}
      />
      <ListItemText
        primary={`${position.totalPrice} ₽`}
        secondary={`Цена за 1 шт.: ${position.unitPrice} ₽`}
        primaryTypographyProps={{ fontSize: "0.9em" }}
        secondaryTypographyProps={{ fontSize: "0.8em" }}
        sx={{ textAlign: "right" }}
      />
    </ListItem>
  );
};

export default Position;
