import React from "react";
import { BaseLayoutComponent } from "shared/layout/base-layout-component";
import { ProfilePage } from "./modules/profile/profile-page";
import { theme } from "shared/theme";
import { ThemeProvider } from "@mui/material";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BaseLayoutComponent>
        <ProfilePage />
      </BaseLayoutComponent>
    </ThemeProvider>
  );
};
