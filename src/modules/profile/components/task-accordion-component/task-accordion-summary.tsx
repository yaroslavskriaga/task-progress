import React from "react";
import { Box, Typography } from "@mui/material";
import { TaskSuccessIcon } from "../../assets/task-success-icon";
import { TaskIcon } from "../../assets/task-icon";
import { TaskGroupInterface, TaskInterface } from "shared/api/task/task";

interface TaskAccordionSummaryInterface {
  isAccordionExpanded: boolean;
  taskGroup: TaskGroupInterface;
}

export const TaskAccordionSummary = ({ taskGroup, isAccordionExpanded }: TaskAccordionSummaryInterface) => {
  const isAllTasksChecked = React.useMemo((): boolean => {
    return taskGroup?.tasks?.every((task: TaskInterface) => task.checked);
  }, [taskGroup?.tasks]);

  const getTasks = React.useMemo((): number => {
    return taskGroup?.tasks?.length;
  }, [taskGroup?.tasks]);

  const getCheckedTasks = React.useMemo((): number => {
    return taskGroup?.tasks?.filter((task: TaskInterface) => task.checked)?.length;
  }, [taskGroup?.tasks]);

  return (
    <>
      <Box display="flex" alignItems="baseline">
        {isAllTasksChecked ? <TaskSuccessIcon /> : <TaskIcon />}
        <Box ml={2}>
          <Typography className={`accordion-title ${isAllTasksChecked && "success"}`}>{taskGroup.name}</Typography>
        </Box>
        {getTasks !== getCheckedTasks && (
          <Box fontSize={11} ml={1}>
            ({getCheckedTasks} / {getTasks})
          </Box>
        )}
      </Box>
      <Box display="flex">
        <Typography mr={1} className={`accordion-expand-title ${isAllTasksChecked && "success"}`}>
          {isAccordionExpanded ? "Hide" : "Show"}
        </Typography>
      </Box>
    </>
  );
};
