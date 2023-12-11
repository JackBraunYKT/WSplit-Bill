import { TextField } from "@mui/material";
import React from "react";
import DialogForm from "../DialogForm";
import { GeneralReceiptContext } from "../../contexts/GeneralReceiptContext";
import { formatPrice } from "../../utils/formatPrice";

type Props = {
  open: boolean;
  setOpen: (state: boolean) => void;
};

const initialValue = {
  id: null,
  name: "",
  quantity: null,
  totalPrice: null,
};

const PositionAddDialog: React.FC<Props> = ({ open, setOpen }) => {
  const [values, setValues] = React.useState(initialValue);
  const { totalPrice, setTotalPrice, positions, setPositions } =
    React.useContext(GeneralReceiptContext);

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [name]: name === "name" ? value : Number(value),
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTotalPrice(totalPrice + values.totalPrice!);

    setPositions([
      ...positions,
      {
        id: Date.now(),
        name: values.name,
        totalPrice: values.totalPrice!,
        unitPrice: formatPrice(values.totalPrice! / values.quantity!),
        totalQuantity: values.quantity!,
        currentQuantity: values.quantity!,
      },
    ]);
    setValues(initialValue);
    setOpen(false);
  };

  return (
    <DialogForm
      open={open}
      title="Добавить позицию"
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <TextField
        autoFocus
        margin="dense"
        fullWidth
        variant="standard"
        required
        id="name"
        name="name"
        label="Наименования продукта"
        value={values.name || ""}
        onChange={handleChange}
      />
      <TextField
        type="number"
        InputProps={{ inputProps: { min: 1 } }}
        margin="dense"
        fullWidth
        variant="standard"
        required
        id="quantity"
        name="quantity"
        value={values.quantity || ""}
        label="Кол-во"
        onChange={handleChange}
      />
      <TextField
        type="number"
        InputProps={{ inputProps: { min: 1 } }}
        variant="standard"
        fullWidth
        required
        id="totalPrice"
        name="totalPrice"
        label="Цена (руб)"
        value={values.totalPrice || ""}
        onChange={handleChange}
      />
    </DialogForm>
  );
};

export default PositionAddDialog;
