import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";

type Props = {
  open: boolean;
  title: string;
  onClose: () => void;
  onSubmit: (event: React.MouseEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
};

const DialogForm: React.FC<Props> = (props) => {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <form onSubmit={props.onSubmit}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>{props.children}</DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Отменить</Button>
          <Button type="submit">Добавить</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default DialogForm;
