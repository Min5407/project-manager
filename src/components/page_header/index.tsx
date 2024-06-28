import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};
const PageHeader = ({ description, className, title }: Props) => {
  return (
    <section className={cn('mb-10', className)}>
      <h2 className='mb-2 text-4xl font-semibold'>{title}</h2>
      {description && <p className='text-lg text-muted-foreground'>{description}</p>}
    </section>
  );
};

export default PageHeader;
