import { STATUS, Task } from '@/@type/type';
import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
export type State = {
  tasks: Task[];
};
export type Actions = {
  addTask: (title: string, description?: string) => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, status: STATUS) => void;
};
export const useTaskStore = create<State & Actions>()((set) => ({
  tasks: [],
  addTask: (title: string, description?: string) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: uuid(), title, description, status: STATUS.TODO },
      ],
    })),
  removeTask: (id: string) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  updateTask: (id: string, status: STATUS) =>
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, status };
        } else {
          return task;
        }
      }),
    })),
}));
