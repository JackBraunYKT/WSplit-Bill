import React from "react";
import DialogForm from "../DialogForm";
import SplitPosition from "./SplitPosition";
import { GeneralReceiptContext } from "../../contexts/GeneralReceiptContext";
import { TextField } from "@mui/material";
import { ReceiptPartContext } from "../../contexts/ReceiptPartContext";
import { IPosition } from "../../models/IPosition";

type Props = {
  open: boolean;
  setOpen: (state: boolean) => void;
};

const SplitDialog: React.FC<Props> = ({ open, setOpen }) => {
  const { positions, setPositions } = React.useContext(GeneralReceiptContext);
  const { receipts, setReceipts } = React.useContext(ReceiptPartContext);

  const initialSplittedValues: { [key: number]: number | null } = {};

  positions.forEach((position) => {
    initialSplittedValues[position.id] = null;
  });

  const [name, setName] = React.useState<string>("");
  const [values, setValues] = React.useState(initialSplittedValues);

  const setValue = (name: string, newValue: number) => {
    setValues({
      ...values,
      [name]: Number(newValue),
    });
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = Date.now();

    const totalPrice = positions.reduce(
      (acc, position) => acc + (values[position.id] || 0) * position.unitPrice,
      0
    );

    const receiptPositions: IPosition[] = positions
      .filter((position) => values[position.id])
      .map((position) => ({
        id: position.id,
        name: position.name,
        totalQuantity: values[position.id]!,
        totalPrice: values[position.id]! * position.unitPrice,
        unitPrice: position.unitPrice,
      }));

    setReceipts([
      ...receipts,
      {
        id,
        name,
        positions: receiptPositions,
        totalPrice,
      },
    ]);

    setPositions(
      positions.map((position) => ({
        ...position,
        currentQuantity: position.currentQuantity - (values[position.id] || 0),
      }))
    );

    setName("");
    setValues(initialSplittedValues);
    setOpen(false);
  };

  return (
    <DialogForm
      open={open}
      title="Разделить чек"
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <TextField
        id="name"
        name="name"
        label="Имя чека"
        value={name}
        onChange={handleChangeName}
        variant="standard"
        margin="dense"
        fullWidth
        autoFocus
        required
      />
      {positions.map((position) => (
        <SplitPosition
          key={position.id}
          position={position}
          value={values[position.id]}
          setValue={setValue}
        />
      ))}
    </DialogForm>
  );
};

export default SplitDialog;
