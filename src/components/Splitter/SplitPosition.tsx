import React from "react";
import { IGeneralPosition } from "../../models/IPosition";
import {
  Input as MuiInput,
  Box,
  Typography,
  Grid,
  Slider,
} from "@mui/material";
import { styled } from "@mui/material/styles";

type Props = {
  position: IGeneralPosition;
  value: number | null;
  setValue: (name: string, value: number) => void;
};

const Input = styled(MuiInput)`
  width: 42px;
`;

const SplitPosition: React.FC<Props> = ({ position, setValue, value }) => {
  const name = position.id.toString();

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(name, newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(name, event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value! < 0) {
      setValue(name, 0);
    } else if (value! > position.currentQuantity) {
      setValue(name, position.currentQuantity);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        {position.name}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            max={position.currentQuantity}
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: position.currentQuantity,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SplitPosition;
