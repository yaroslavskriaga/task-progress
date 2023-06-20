import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import React from "react";
import { TaskGroupInterface, TaskInterface } from "shared/api/task/task";
import { Nullable } from "shared/api/rest";
import { TaskSuccessIcon } from "../assets/task-success-icon";
import { TaskIcon } from "../assets/task-icon";
import { ArrowLineDownIcon } from "../assets/arrow-line-down-icon";

export const TaskAccordionComponent = ({ data }: { data: Nullable<TaskGroupInterface[]> }) => {
  const [expandedAccordions, setExpandedAccordions] = React.useState<number[]>([]);
  const [tasksList, setTasksList] = React.useState<Nullable<TaskGroupInterface[]>>(data);

  const isAccordionExpanded = (index: number): boolean => {
    return expandedAccordions.includes(index);
  };

  const toggleAccordion = (index: number): void => {
    if (isAccordionExpanded(index)) {
      setExpandedAccordions(expandedAccordions.filter((item: number) => item !== index));
    } else {
      setExpandedAccordions([...expandedAccordions, index]);
    }
  };

  const isAllTasksChecked = (task_group: TaskGroupInterface): boolean => {
    return task_group.tasks.every((task: TaskInterface) => task.checked);
  };

  const updateTaskCheckedState = (task_group_index: number, task_index: number): TaskGroupInterface[] => {
    return (
      tasksList?.reduce((updatedTasksList: TaskGroupInterface[], task_group: TaskGroupInterface, index: number) => {
        if (index === task_group_index) {
          const updatedTasks = task_group.tasks.map((task: TaskInterface, subIndex: number) => {
            if (subIndex === task_index) {
              return {
                ...task,
                checked: !task.checked,
              };
            }
            return task;
          });

          return [...updatedTasksList, { ...task_group, tasks: updatedTasks }];
        }
        return [...updatedTasksList, task_group];
      }, []) || []
    );
  };

  const handleCheckboxChange = (task_group_index: number, task_index: number): void => {
    const updatedTasksList = updateTaskCheckedState(task_group_index, task_index);
    setTasksList(updatedTasksList);
  };

  return (
    <>
      {tasksList?.map((task_group: TaskGroupInterface, task_group_index: number) => {
        return (
          <Accordion onChange={() => toggleAccordion(task_group_index)} key={task_group.name + task_group_index} elevation={0}>
            <AccordionSummary
              expandIcon={<ArrowLineDownIcon />}
              aria-controls={`panel${task_group_index + 1}a-content`}
              id={`panel${task_group_index + 1}a-header`}
            >
              <Box display="flex" alignItems="baseline">
                {isAllTasksChecked(task_group) ? <TaskSuccessIcon /> : <TaskIcon />}
                <Box ml={2}>
                  <Typography className={`accordion-title ${isAllTasksChecked(task_group) && "success"}`}>{task_group.name}</Typography>
                </Box>
              </Box>
              <Box display="flex">
                <Typography mr={1} className="accordion-expand-title">
                  {isAccordionExpanded(task_group_index) ? "Hide" : "Show"}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                {task_group.tasks?.map((task: TaskInterface, task_index: number) => {
                  return (
                    <FormControlLabel
                      onChange={() => handleCheckboxChange(task_group_index, task_index)}
                      key={task.value}
                      control={<Checkbox disableRipple defaultChecked={task.checked} />}
                      label={task.description}
                    />
                  );
                })}
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};
