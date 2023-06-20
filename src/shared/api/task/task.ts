export interface TaskInterface {
  description: string;
  value: number;
  checked: boolean;
}

export interface TaskGroupInterface {
  name: string;
  tasks: TaskInterface[];
}
