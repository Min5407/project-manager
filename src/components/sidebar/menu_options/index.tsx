'use client';

import { cn } from '@/lib/utils';
import { CloudDownload, FileClock, LayoutDashboard, Receipt, Settings, Zap } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const options = [
  {
    name: 'workflow',
    href: '/workflow',
    icon: <Zap />,
  },
  {
    name: 'setting',
    href: '/setting',
    icon: <Settings />,
  },
  {
    name: 'connection',
    href: '/connection',
    icon: <LayoutDashboard />,
  },
  {
    name: 'billing',
    href: '/billing',
    icon: <Receipt />,
  },
  {
    name: 'template',
    href: '/template',
    icon: <CloudDownload />,
  },
  {
    name: 'log',
    href: '/log',
    icon: <FileClock />,
  },
];
const MenuOptions = () => {
  const pathname = usePathname();
  return (
    <ul className='flex flex-col items-start gap-7'>
      {options.map(({ name, href, icon }) => {
        const isActive = pathname?.includes(href);
        return (
          <li
            key={name}
            className={cn('hover:text-purple-300', {
              'text-purple-300': isActive,
            })}
          >
            <Link href={href} className='flex justify-start gap-2 text-left'>
              {icon} {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuOptions;
