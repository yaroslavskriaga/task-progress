import { SpaceComponentY } from "shared/layout/space-component";
import React from "react";
import { TitleComponent } from "shared/elements/title-component";
import { BoxComponent } from "shared/layout/box-component/box-component";
import { TaskAccordionComponent } from "./components/task-accordion-component";
import { ProgressBarComponent } from "shared/elements/progress-bar-component/progress-bar-component";
import useAPI from "shared/api/useAPI";
import { API_TASK_LIST } from "shared/api/config";
import { TaskGroupInterface } from "shared/api/task/task";
import { LoaderComponent } from "shared/elements/loader-component";
import { WithTitleComponent } from "shared/layout/with-title-component";
import { HTTPMethodEnum } from "shared/api/rest";

export const ProfilePage = () => {
  const { data: tasks, isLoading: isLoadingTasks } = useAPI<TaskGroupInterface[]>(API_TASK_LIST, HTTPMethodEnum.GET);

  return (
    <BoxComponent>
      <WithTitleComponent>
        <TitleComponent title="Lodgify Grouped Tasks" topped />
        <SpaceComponentY spacing={2} />
        <ProgressBarComponent />
      </WithTitleComponent>
      <SpaceComponentY />
      {isLoadingTasks ? <LoaderComponent my={5} /> : <TaskAccordionComponent data={tasks} />}
    </BoxComponent>
  );
};
