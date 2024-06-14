'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
};
export const SlideAnimationLayout = ({
  children,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className,
}: Props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  };
  const getSpeed = () => {
    if (!containerRef.current) return;

    const speeds = {
      fast: '20s',
      normal: '40s',
      slow: '80s',
    };

    containerRef.current.style.setProperty('--animation-duration', speeds[speed]);
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'relative z-20 mb-16 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn('flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4', {
          'animate-scroll': start,
          'hover:[animation-play-state:paused]': pauseOnHover,
        })}
      >
        {children}
      </ul>
    </div>
  );
};
