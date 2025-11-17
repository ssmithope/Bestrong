import React from 'react';
import { Merriweather, Lato } from 'next/font/google';
import './ui/globals.css';

import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${lato.variable} flex flex-col min-h-screen bg-background font-sans text-text-main antialiased`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}