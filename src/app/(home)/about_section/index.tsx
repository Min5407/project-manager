import React from 'react';
import { AnimationGrid } from './animation_grid';

const AboutSection = () => {
  return (
    <section className='mt-16'>
      <h2 className='mb-6 text-center text-4xl font-bold tracking-tight text-white'>
        About Our Product
      </h2>
      <AnimationGrid cards={cards} />
    </section>
  );
};

export default AboutSection;

const SkeletonOne = () => {
  return (
    <div>
      <p className='text-4xl font-bold text-white'>Slack</p>
      <p className='text-base font-normal text-white' />
      <p className='my-4 max-w-lg text-base font-normal text-neutral-200'>
        Automate Your Workflow with Slack. Get notified when you&apos;re on the go.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className='text-4xl font-bold text-white'>Google Drive</p>
      <p className='text-base font-normal text-white' />
      <p className='my-4 max-w-lg text-base font-normal text-neutral-200'>
        Automate Your Workflow with Google Drive. View all your files in one place.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className='text-4xl font-bold text-white'>Discord</p>
      <p className='text-base font-normal text-white' />
      <p className='my-4 max-w-lg text-base font-normal text-neutral-200'>
        Automate Your Workflow with Discord. Get notified when you&apos;re on the go.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className='text-4xl font-bold text-white'>Time Saving</p>
      <p className='text-base font-normal text-white' />
      <p className='my-4 max-w-lg text-base font-normal text-neutral-200'>
        Create a Workflow to save your time. Productivity is the key to success.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: 'md:col-span-2',
    thumbnail:
      'https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: 'col-span-1',
    thumbnail:
      'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=3927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: 'col-span-1',
    thumbnail:
      'https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: 'md:col-span-2',
    thumbnail:
      'https://images.unsplash.com/photo-1524678714210-9917a6c619c2?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
