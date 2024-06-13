import React from 'react';
import { Workflow } from 'lucide-react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-2 text-lg font-bold text-purple-300'>
      <Workflow size={28} />
      <span className='tracking-wider'>MeManager</span>
      <span className='sr-only'>MeManager</span>
    </Link>
  );
};

export default Logo;
