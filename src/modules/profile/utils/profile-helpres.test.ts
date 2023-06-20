import { calculateNormalizedValue, calculateProgress, calculateSumValues } from "./profile-helpers";
import { TaskGroupInterface, TaskInterface } from "shared/api/task/task";

describe("calculateSumValues", () => {
  it("calculateSumValues() calculates the sum of values and sum of checked values correctly", () => {
    const tasks: TaskInterface[] = [
      { value: 50, checked: true, description: "" },
      { value: 100, checked: false, description: "" },
      { value: 75, checked: true, description: "" },
    ];

    const expectedSumValues = 225;
    const expectedSumCheckedValues = 125;

    const { sumValues, sumCheckedValues } = calculateSumValues(tasks);

    expect(sumValues).toBe(expectedSumValues);
    expect(sumCheckedValues).toBe(expectedSumCheckedValues);
  });
});

describe("calculateProgress", () => {
  it("calculateProgress() calculates progress bar value correctly", () => {
    const tasksList: TaskGroupInterface[] = [
      {
        name: "Group 1",
        tasks: [
          {
            description: "Task 1",
            value: 20,
            checked: true,
          },
          {
            description: "Task 2",
            value: 20,
            checked: false,
          },
        ],
      },
    ];

    const result = calculateProgress(tasksList);
    expect(result).toBe(50);
  });
});

describe("calculateNormalizedValue", () => {
  it("calculateNormalizedValue() calculates the normalized value correctly", () => {
    const sumValues = 200;
    const sumCheckedValues = 150;
    const expectedNormalizedValue = 75;

    const normalizedValue = calculateNormalizedValue(sumValues, sumCheckedValues);

    expect(normalizedValue).toBe(expectedNormalizedValue);
  });
});
