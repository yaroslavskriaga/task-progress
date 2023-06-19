import { Typography } from "@mui/material";
import React from "react";

interface TitleComponentInterface {
  title: string;
  topped?: boolean;
}

export const TitleComponent = ({ title, topped = false }: TitleComponentInterface) => {
  return (
    <Typography mt={topped ? 3 : 0} variant="h3" component="h3">
      {title}
    </Typography>
  );
};
