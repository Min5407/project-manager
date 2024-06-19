import React, { ReactNode } from 'react';

type Props = {
  title: ReactNode;
  description?: ReactNode;
};
const PageHeader = ({ description, title }: Props) => {
  return (
    <section className='mb-10'>
      <h2 className='mb-2 text-4xl font-semibold'>{title}</h2>
      {description && <p className='text-lg text-muted-foreground'>{description}</p>}
    </section>
  );
};

export default PageHeader;
