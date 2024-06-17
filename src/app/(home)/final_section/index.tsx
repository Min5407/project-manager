import { Button } from '@/components/ui/button';
import { Flower, Workflow } from 'lucide-react';
import Link from 'next/link';

const FinalSection = () => {
  return (
    <section className='my-16'>
      <h2 className='text-center text-4xl font-bold tracking-tight text-white'>
        Let's Dive In <Flower className='mb-6 ml-2 inline-block' size={24} />
      </h2>
      <p className='m my-2 text-center text-lg text-gray-200'>
        Don't waste your time and Try our service. <br />
        Automating your tasks will enhance your work productivity.
      </p>

      <div className='my-6 text-center'>
        <Button asChild size='lg' className='bg-purple-500 text-lg text-white'>
          <Link href='/dashboard'>
            <Workflow className='mr-2 inline-block' /> Get Started
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default FinalSection;
