import React from "react";
import { Box, Container } from "@mui/material";

export const BaseLayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#E5E5E5">
      <Container style={{ padding: "0 40px 0 40px" }} maxWidth="md" disableGutters>
        {children}
      </Container>
    </Box>
  );
};
