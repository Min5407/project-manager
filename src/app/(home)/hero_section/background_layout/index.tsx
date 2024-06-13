type Props = {
  children: React.ReactNode;
};

const BackgroundLayout = ({ children }: Props) => {
  return (
    <section className='flex h-screen w-full flex-col'>
      <div className='dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex h-4/5 w-full flex-col items-center justify-center bg-white dark:bg-black'>
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black' />
        {children}
      </div>
    </section>
  );
};

export default BackgroundLayout;
