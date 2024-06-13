import React from 'react';
import { Workflow } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <header>
      <Link href='/'>
        <Workflow />
        <span className='sr-only'>Logo</span>
      </Link>
    </header>
  );
};

export default Navigation;
