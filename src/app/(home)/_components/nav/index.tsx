import React from 'react';
import Link from 'next/link';
import AsideList from './aside_list';
import { MovingBorderBtn } from './aside_list/moving_border';
import Logo from './logo';
import MainList from './main_list';

const Nav = () => {
  return (
    <header className='sticky left-0 top-0 z-10 flex w-full items-center justify-between px-6 py-4 backdrop-blur-0'>
      <Logo />
      <MainList />
      <AsideList />
    </header>
  );
};

export default Nav;
