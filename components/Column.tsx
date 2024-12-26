import { STATUS, TaskDto } from '@/@type/type';
import React from 'react';
import Task from './Task';
const tasks: TaskDto[] = [
  {
    id: '123',
    title: 'Our first Task',
    description: 'Some description',
    status: STATUS.TODO,
  },
];
const Column = ({ title, status }: { title: string; status: STATUS }) => {
  const filteredTasks = tasks.filter((task) => task.status === status);
  return (
    <section className="h-[600px] flex-1">
      <h2 className="ml-1 font-serif text-2xl font-semibold">{title}</h2>
      <div className="mt-3.5 h-full w-full flex-1 rounded-xl bg-gray-700/50 p-4">
        <div className="flex flex-col gap-4">
          {filteredTasks.map((task, index) => (
            <Task key={index} task={task} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Column;
