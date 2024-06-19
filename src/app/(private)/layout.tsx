import Sidebar from '@/components/sidebar';

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='z-[1] flex flex-1'>
      <Sidebar />
      <div className='w-full p-6'>{children}</div>
    </div>
  );
}
