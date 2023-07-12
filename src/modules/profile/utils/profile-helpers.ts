import { TaskGroupInterface, TaskInterface } from "shared/api/task/task";
import { Nullable } from "shared/api/rest";

export function calculateNormalizedValue(sumValues: number, sumCheckedValues: number): number {
  return (sumCheckedValues * 100) / sumValues;
}

export function calculateSumValues(tasks: TaskInterface[]): { sumValues: number; sumCheckedValues: number } {
  let sumValues = 0;
  let sumCheckedValues = 0;

  tasks.forEach((task: TaskInterface) => {
    sumValues += task.value;
    if (task.checked) {
      sumCheckedValues += task.value;
    }
  });

  return { sumValues, sumCheckedValues };
}

export function calculateProgress(tasksList: Nullable<TaskGroupInterface[]>): number {
  const normalizedValues: number[] = [];

  tasksList?.forEach((taskGroup: TaskGroupInterface) => {
    const { sumValues, sumCheckedValues } = calculateSumValues(taskGroup.tasks);
    const normalizedValue = calculateNormalizedValue(sumValues, sumCheckedValues);
    normalizedValues.push(Math.floor(normalizedValue));
  });

  const totalNormalizedValue = normalizedValues.reduce((sum: number, value: number) => sum + value, 0);
  return Math.floor(totalNormalizedValue / normalizedValues.length);
}
