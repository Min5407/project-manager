import React from 'react';
import { MovingBorderBtn } from './moving_border';

const AsideList = () => {
  return (
    <aside>
      <MovingBorderBtn
        borderRadius='1.75rem'
        className='border-neutral-200 bg-white text-black dark:border-slate-800 dark:bg-background dark:text-white'
        containerClassName='w-36 h-14'
      >
        DASHBOARD
      </MovingBorderBtn>
    </aside>
  );
};

export default AsideList;
