import { ReactNode } from 'react';
import GoogleIcon from '@/components/icons/google_drive';
import { Button } from '@/components/ui/button';

type Props = {
  name: string;
  description: string;
  icon: ReactNode;
};
const Item = ({ description, icon, name }: Props) => {
  return (
    <div className='relative rounded-md border border-slate-600 p-4'>
      {icon}
      <h4 className='mt-6 text-2xl font-bold'>{name}</h4>
      <p className='line-clamp-2 min-h-12 text-muted-foreground'>{description}</p>

      <Button className='absolute right-8 top-6 font-semibold' size='sm' variant='default'>
        Connect
      </Button>
    </div>
  );
};

export default Item;
