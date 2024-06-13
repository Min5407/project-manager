import React from 'react';
import Link from 'next/link';

const MainList = () => {
  return (
    <nav>
      <ul className='flex gap-2'>
        <li>
          <Link href='/'>Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainList;
