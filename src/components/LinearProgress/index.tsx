import {
  Box,
  LinearProgress as MuiLinearProgress,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { GeneralReceiptContext } from "../../contexts/GeneralReceiptContext";
import CardWithTitle from "../CardWithTitle";
import { ReceiptPartContext } from "../../contexts/ReceiptPartContext";

const LinearProgress = styled(MuiLinearProgress)`
  height: 10px;
  border-radius: 5px;
`;

const LinearProgressWithLabel: React.FC = () => {
  const { sumPrice } = React.useContext(ReceiptPartContext);
  const { totalPrice } = React.useContext(GeneralReceiptContext);
  const [value, setValue] = React.useState<number>(0);

  React.useEffect(() => {
    const percent = (sumPrice / totalPrice) * 100;
    setValue(percent);
  }, [sumPrice]);

  return (
    <CardWithTitle title="Распределено">
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{ mt: 1, mb: 1 }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body1" textAlign="left">
          {sumPrice} ₽
        </Typography>
        <Typography variant="body1" textAlign="left">
          {totalPrice} ₽
        </Typography>
      </Box>
    </CardWithTitle>
  );
};

export default LinearProgressWithLabel;
