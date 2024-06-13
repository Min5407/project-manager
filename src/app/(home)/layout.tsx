import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />

      <main className='z-[1] flex flex-1 flex-col'>{children}</main>

      <Footer />
    </>
  );
}
