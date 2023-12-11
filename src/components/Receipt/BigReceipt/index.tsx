import {
  Table,
  TableBody,
  TableCell as MuiTableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import React from "react";
import { IPosition } from "../../../models/IPosition";
import Position from "./Position";

interface Props {
  positions: IPosition[];
}

const TableCell = styled(MuiTableCell)`
  font-weight: 800;
`;

const BigReceipt: React.FC<Props> = ({ positions }) => {
  const renderTableHead = () => (
    <TableHead>
      <TableRow sx={{ borderBottom: "1px solid rgb(211, 230, 243)" }}>
        <TableCell>Наименование</TableCell>
        <TableCell align="right">Кол-во (шт.)</TableCell>
        <TableCell align="right">Цена за 1 шт. (₽)</TableCell>
        <TableCell align="right">Сумма (₽)</TableCell>
      </TableRow>
    </TableHead>
  );

  const renderTableBody = () => (
    <TableBody>
      {positions.map((position) => (
        <Position key={position.id} position={position} />
      ))}
    </TableBody>
  );

  return (
    <Table>
      {renderTableHead()}
      {renderTableBody()}
    </Table>
  );
};

export default BigReceipt;
