import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { TaskGroupInterface, TaskInterface } from "shared/api/task/task";
import { Nullable } from "shared/api/rest";
import { ArrowLineDownIcon } from "../../assets/arrow-line-down-icon";
import { calculateProgress } from "../../utils/profile-helpers";
import { TaskAccordionSummary } from "./task-accordion-summary";

interface TaskAccordionComponentInterface {
  tasks: Nullable<TaskGroupInterface[]>;
  setProgress: Dispatch<SetStateAction<number>>;
}

export const TaskAccordionComponent = React.memo(({ tasks, setProgress }: TaskAccordionComponentInterface) => {
  const [expandedAccordions, setExpandedAccordions] = React.useState<number[]>([]);
  const [tasksList, setTasksList] = React.useState<Nullable<TaskGroupInterface[]>>(tasks);

  const getIsAccordionExpanded = React.useMemo(
    () =>
      (index: number): boolean => {
        return expandedAccordions.includes(index);
      },
    [expandedAccordions]
  );

  const handleToggleAccordion = React.useCallback(
    (index: number): void => {
      if (getIsAccordionExpanded(index)) {
        setExpandedAccordions((prevAccordions: number[]) => prevAccordions.filter((item: number) => item !== index));
      } else {
        setExpandedAccordions((prevAccordions: number[]) => [...prevAccordions, index]);
      }
    },
    [getIsAccordionExpanded]
  );

  const getUpdatedTasks = React.useMemo(
    () =>
      (taskGroup: TaskGroupInterface, taskIndex: number): TaskInterface[] => {
        return taskGroup.tasks.map((task: TaskInterface, subIndex: number) => {
          if (subIndex === taskIndex) {
            return {
              ...task,
              checked: !task.checked,
            };
          }
          return task;
        });
      },
    []
  );

  const handleUpdateTaskCheckedState = React.useCallback(
    (taskGroupIndex: number, taskIndex: number): TaskGroupInterface[] => {
      return (
        tasksList?.reduce((updatedTasksList: TaskGroupInterface[], taskGroup: TaskGroupInterface, index: number) => {
          if (index === taskGroupIndex) {
            return [...updatedTasksList, { ...taskGroup, tasks: getUpdatedTasks(taskGroup, taskIndex) }];
          }
          return [...updatedTasksList, taskGroup];
        }, []) || []
      );
    },
    [getUpdatedTasks, tasksList]
  );

  const handleCheckboxChange = React.useCallback(
    (taskGroupIndex: number, taskIndex: number): void => {
      const updatedTasksList = handleUpdateTaskCheckedState(taskGroupIndex, taskIndex);
      setTasksList(updatedTasksList);
    },
    [handleUpdateTaskCheckedState]
  );

  React.useEffect(() => {
    setProgress(calculateProgress(tasksList));
  }, [tasksList, setProgress]);

  return (
    <>
      {tasksList?.map((taskGroup: TaskGroupInterface, taskGroupIndex: number) => {
        return (
          <Accordion
            className={taskGroupIndex === 0 ? "first-accordion" : ""}
            onChange={() => handleToggleAccordion(taskGroupIndex)}
            key={taskGroup.name + taskGroupIndex}
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ArrowLineDownIcon />}
              aria-controls={`panel${taskGroupIndex + 1}a-content`}
              id={`panel${taskGroupIndex + 1}a-header`}
            >
              <TaskAccordionSummary taskGroup={taskGroup} isAccordionExpanded={getIsAccordionExpanded(taskGroupIndex)} />
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                {taskGroup.tasks?.map((task: TaskInterface, taskIndex: number) => {
                  return (
                    <FormControlLabel
                      onChange={() => handleCheckboxChange(taskGroupIndex, taskIndex)}
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
});

TaskAccordionComponent.displayName = "TaskAccordionComponent";
