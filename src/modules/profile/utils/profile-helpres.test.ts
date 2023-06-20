import { calculateProgress } from "./profile-helpers";

describe("calculateProgress", () => {
  it("calculateProgress() calculates progress bar value correctly", () => {
    const tasksList = [
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
