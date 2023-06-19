import { SpaceComponentY } from "shared/layout/space-component";
import React from "react";
import { TitleComponent } from "shared/elements/title-component";
import { BoxComponent } from "shared/layout/box-component/box-component";
import { AccordionComponent } from "shared/elements/accordion-component";
import { ProgressBarComponent } from "shared/elements/progress-bar-component/progress-bar-component";
import { Box } from "@mui/material";
import { TaskIcon } from "./assets/task-icon";
import { TaskSuccessIcon } from "./assets/task-success-icon";
import { ArrowLineDownIcon } from "./assets/arrow-line-down-icon";

export const ProfilePage = () => {
  return (
    <BoxComponent>
      <Box pl="24px">
        <TitleComponent title="Lodgify Grouped Tasks" topped />
        <SpaceComponentY spacing={2} />
        <ProgressBarComponent />
      </Box>
      <SpaceComponentY />
      <AccordionComponent SummarySuccessIcon={<TaskSuccessIcon />} SummaryIcon={<TaskIcon />} ExpandIcon={<ArrowLineDownIcon />} />
    </BoxComponent>
  );
};
