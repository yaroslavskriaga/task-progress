import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

export const ProgressBarComponent = () => {
  return <ProgressBar labelClassName="progress-bar-label" maxCompleted={100} baseBgColor="#F2FBFA" height="24px" bgColor="#00B797" completed={60} />;
};