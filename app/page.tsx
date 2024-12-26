import Columns from '@/components/Columns';
import React from 'react';

const page = () => {
  return (
    <section className="flex h-screen bg-gradient-to-br from-gray-700 to-gray-900 text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Columns />
      </div>
    </section>
  );
};

export default page;
