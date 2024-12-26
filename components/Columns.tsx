import React from 'react';
import Column from './Column';
import { STATUS } from '@/@type/type';

const Columns = () => {
  return (
    <div className="mt-10 flex gap-16 lg:gap-12">
      <Column title={'Todo'} status={STATUS.TODO} />
      <Column title={'In Progress'} status={STATUS.IN_PROGRESS} />
      <Column title={'Done'} status={STATUS.DONE} />
    </div>
  );
};

export default Columns;
