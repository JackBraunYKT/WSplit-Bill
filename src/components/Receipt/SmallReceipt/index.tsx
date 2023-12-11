import { List, Divider as MuiDivider, styled } from "@mui/material";
import React from "react";
import { IPosition } from "../../../models/IPosition";
import Position from "./Position";

interface Props {
  positions: IPosition[];
}

const Divider = styled(MuiDivider)`
  border-color: black;
`;

const SmallReceipt: React.FC<Props> = ({ positions }) => {
  return (
    <>
      <List dense={true} sx={{ overflow: "scroll" }}>
        {positions.map((position) => (
          <Position key={position.id} position={position} />
        ))}
      </List>
      <Divider />
    </>
  );
};

export default SmallReceipt;
