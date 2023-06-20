import { TaskGroupInterface, TaskInterface } from "shared/api/task/task";
import { Nullable } from "shared/api/rest";

export function calculateProgress(tasksList: Nullable<TaskGroupInterface[]>): number {
  const normalizedValues: number[] = [];

  tasksList?.forEach((task_group: TaskGroupInterface) => {
    let sumValues = 0;
    let sumCheckedValues = 0;

    task_group.tasks.forEach((task: TaskInterface) => {
      sumValues += task.value;
      if (task.checked) {
        sumCheckedValues += task.value;
      }
    });

    const normalizedValue = (sumCheckedValues * 100) / sumValues;
    normalizedValues.push(Math.floor(normalizedValue));
  });

  const totalNormalizedValue = normalizedValues.reduce((sum: number, value: number) => sum + value, 0);
  return Math.floor(totalNormalizedValue / normalizedValues.length);
}
