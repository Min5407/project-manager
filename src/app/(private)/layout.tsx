import Sidebar from '@/components/sidebar';

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='z-[1] flex flex-1'>
      <Sidebar />
      <div className='flex w-full flex-col p-6'>{children}</div>
    </div>
  );
}
