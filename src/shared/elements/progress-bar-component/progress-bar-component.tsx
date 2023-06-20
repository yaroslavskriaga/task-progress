import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { LoaderComponent } from "shared/elements/loader-component";
import { color_palette } from "shared/styles/palette";

export const ProgressBarComponent = ({ progress }: { progress: number }) => {
  return isNaN(progress) ? (
    <LoaderComponent my={2} linear />
  ) : (
    <ProgressBar
      labelClassName="progress-bar-label"
      maxCompleted={100}
      baseBgColor={color_palette.main.success_light}
      height="24px"
      bgColor={color_palette.main.success_semi_dark}
      completed={progress}
    />
  );
};
