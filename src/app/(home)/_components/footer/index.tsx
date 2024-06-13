import React from 'react';
import { Workflow } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=' z-10 flex items-center  justify-center border-t border-slate-800 py-8 dark:border-gray-50'>
      <ul className='flex flex-col gap-2'>
        <li className='text-center'>
          <Link href='/' className='text-center inline-block'>
            <Workflow />
            <span className='sr-only'>Logo</span>
          </Link>
        </li>

        <li className='text-center'>
          <Link href='#'>
            <p className='mr-3 inline-block'>Terms of Service</p>
          </Link>
          <Link href='#'>
            <p className='inline-block'>Privacy Policy</p>
          </Link>
        </li>

        <li>
          <p className='inline-block '>Copyright © 2024 - All rights reserved</p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
