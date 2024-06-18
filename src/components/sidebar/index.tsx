import Link from 'next/link';
import MenuOptions from './menu_options';

const Sidebar = () => {
  return (
    <aside className='bg-neutral-800 px-2 py-6'>
      <h1 className='border-b border-b-purple-400 text-lg font-bold'>
        <Link href='/dashboard'>MeManager</Link>
      </h1>

      <nav className='mt-6'>
        <MenuOptions />
      </nav>
    </aside>
  );
};

export default Sidebar;
