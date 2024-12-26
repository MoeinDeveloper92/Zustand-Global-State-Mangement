export interface TaskDto {
  id: string;
  title: string;
  description: string;
  status: STATUS; // Updated to allow all enum values
}

export enum STATUS {
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
  TODO = 'TODO',
}

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: STATUS;
};
