import type { Metadata } from 'next';
import { Bungee, Poetsen_One } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.scss';
import Header from '../components/layout/Header';

const bungee = Bungee({
  variable: '--font-bungee',
  subsets: ['latin'],
  weight: '400',
});

const poetsenOne = Poetsen_One({
  variable: '--font-poetsen-one',
  subsets: ['latin'],
  weight: '400',
});

const pocketMonk = localFont({
  src: '../shared/fonts/PocketMonk.otf',
  variable: '--font-pocket-monk',
  display: 'swap',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Tokio Slots',
  description: 'Stylish Tokyo-themed slot games with cool rewards.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bungee.variable} ${pocketMonk.variable} ${poetsenOne.variable}`}>
        <Header />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
