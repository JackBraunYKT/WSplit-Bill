import {
  Box,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
  styled,
} from "@mui/material";
import React from "react";
import { IPosition } from "../../models/IPosition";
import "./style.css";
import SmallReceipt from "./SmallReceipt";
import BigReceipt from "./BigReceipt";

type Props = {
  name: string;
  positions: IPosition[];
  totalPrice: number;
};

const SummaryTypography = styled(Typography)`
  font-size: 16px;
  font-weight: 800;
`;

const Receipt: React.FC<Props> = ({ name, positions, totalPrice }) => {
  const theme = useTheme();
  const isSmallSize = useMediaQuery(theme.breakpoints.down("sm"));

  const renderCardBody = () =>
    isSmallSize ? (
      <SmallReceipt positions={positions} />
    ) : (
      <BigReceipt positions={positions} />
    );

  const renderCardFooter = () => (
    <Box mt={2} sx={{ display: "flex", justifyContent: "space-between" }}>
      <SummaryTypography>Итого</SummaryTypography>
      <SummaryTypography>{totalPrice} ₽</SummaryTypography>
    </Box>
  );

  return (
    <Card>
      <CardContent>
        <Typography variant="h2">{name}</Typography>
        {renderCardBody()}
        {renderCardFooter()}
      </CardContent>
    </Card>
  );
};

export default Receipt;
