import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { LoaderComponent } from "shared/elements/loader-component";

export const ProgressBarComponent = ({ progress }: { progress: number }) => {
  return isNaN(progress) ? (
    <LoaderComponent my={2} linear />
  ) : (
    <ProgressBar labelClassName="progress-bar-label" maxCompleted={100} baseBgColor="#F2FBFA" height="24px" bgColor="#00B797" completed={progress} />
  );
};
