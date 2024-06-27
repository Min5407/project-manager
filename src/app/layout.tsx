import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme';
import { ClerkProvider } from '@clerk/nextjs';

const font = DM_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MeManager',
  description: 'Customize Your Personal Project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={font.className}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            <div className='flex min-h-screen flex-col font-sans antialiased'>{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
