'use client';
import { useEffect } from 'react';
import { STATUS } from '@/@type/type';
import React, { useMemo } from 'react';
import Task from './Task';
import { useTaskStore } from '@/store/store';

const Column = ({ title, status }: { title: string; status: STATUS }) => {
  const tasks = useTaskStore((state) => state.tasks);
  const updateStore = useTaskStore((state) => state.updateTask);
  const draggedTask = useTaskStore((state) => state.draggedTask);
  const dragTask = useTaskStore((state) => state.dragTask);
  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.status === status),
    [tasks, status]
  );

  useEffect(() => {
    useTaskStore.persist.rehydrate();
  }, []);
  const handleDrop = () => {
    if (!draggedTask) {
      return;
    } else {
      updateStore(draggedTask, status);
      dragTask(null);
    }
  };
  return (
    <section className="h-[600px] flex-1">
      <h2 className="ml-1 font-serif text-2xl font-semibold">{title}</h2>
      <div
        className="mt-3.5 h-full w-full flex-1 rounded-xl bg-gray-700/50 p-4"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
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
