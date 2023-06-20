import { Box, CircularProgress, LinearProgress } from "@mui/material";
import React from "react";

export const LoaderComponent = ({ my = 0, linear = false }: { my?: number; linear?: boolean }) => {
  return (
    <Box my={my} display={!linear ? "flex" : "block"} justifyContent={!linear ? "center" : "unset"}>
      {linear ? <LinearProgress color="success" /> : <CircularProgress color="success" />}
    </Box>
  );
};
