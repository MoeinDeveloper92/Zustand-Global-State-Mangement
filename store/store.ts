import { Status } from '@/@types/type';
import { create } from 'zustand';
interface Task {
  title: string;
  state: Status;
}

const useStore = create((set, get) => ({
  tasks: [{ title: 'Test Task', state: 'PLANNED' }] as Task[],
}));

export default useStore;
