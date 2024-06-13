import React from 'react';
import { Badge } from '@/components/ui/badge';
import { AnimationText } from './animation_text';
import BackgroundLayout from './background_layout';

const HeroSection = () => {
  const words = ['Personal', 'Fast', 'Modern'];

  return (
    <BackgroundLayout>
      <Badge
        variant='outline'
        className='my-12 flex h-11 items-center justify-center bg-white text-lg font-bold text-background'
      >
        Start Your Project Workflow
      </Badge>

      <div className='mx-auto text-center text-5xl font-normal leading-[56px] text-neutral-600 dark:text-neutral-400'>
        Customize
        <AnimationText words={words} /> <br />
        Project Workflow with Our Service
      </div>

      <p className='z-20 bg-gradient-to-b from-neutral-100 to-neutral-300 bg-clip-text py-8 text-center text-4xl font-bold tracking-wide text-transparent sm:text-7xl'>
        MeManager
      </p>
    </BackgroundLayout>
  );
};

export default HeroSection;
