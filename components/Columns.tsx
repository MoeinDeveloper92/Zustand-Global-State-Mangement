import React from 'react';
import Column from './Column';
import { STATUS } from '@/@type/type';
import NewTodoDialog from './new-todo-dialog';

const Columns = () => {
  return (
    <div>
      <NewTodoDialog />
      <section className="mt-10 flex gap-16 lg:gap-12">
        <Column title={'Todo'} status={STATUS.TODO} />
        <Column title={'In Progress'} status={STATUS.IN_PROGRESS} />
        <Column title={'Done'} status={STATUS.DONE} />
      </section>
    </div>
  );
};

export default Columns;
