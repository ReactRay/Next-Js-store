import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navbar/NavBar';
import Container from '@/components/global/Container';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Storefront',
  description: 'A nifty store built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <NavBar />
        <Container className='py-20'>

          {children}

        </Container>


      </body>
    </html>
  );
}
