import React from "react";
import { Box } from "@mui/material";

export const WithTitleComponent = ({ children, pl = "24px" }: { children: React.ReactNode; pl?: string }) => {
  return <Box pl={pl}>{children}</Box>;
};
