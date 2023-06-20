import { Box, CircularProgress } from "@mui/material";
import React from "react";

export const LoaderComponent = ({ my = 0 }: { my?: number }) => {
  return (
    <Box my={my} display="flex" justifyContent="center">
      <CircularProgress color="success" />
    </Box>
  );
};
