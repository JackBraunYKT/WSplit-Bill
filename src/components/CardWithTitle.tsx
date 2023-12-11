import {
  Card,
  CardContent as MuiCardContent,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const CardContent = styled(MuiCardContent)`
  :last-child {
    padding-bottom: 16px;
  }
`;

const CardWithTitle: React.FC<Props> = ({ title, children }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h2">{title}</Typography>
        {children}
      </CardContent>
    </Card>
  );
};

export default CardWithTitle;
