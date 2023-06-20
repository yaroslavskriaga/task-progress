import React from "react";
import { BaseLayoutComponent } from "shared/layout/base-layout-component";
import { ProfilePage } from "./modules/profile/profile-page";
import { theme } from "shared/theme";
import { ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <BaseLayoutComponent>
          <ProfilePage />
        </BaseLayoutComponent>
      </SnackbarProvider>
    </ThemeProvider>
  );
};
