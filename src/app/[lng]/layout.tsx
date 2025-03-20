import { dir } from 'i18next';
import type { Metadata } from 'next';
import { Nova_Mono, Poppins } from 'next/font/google';
import { ReactNode } from 'react';

import { languages } from '../i18n/settings';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: '400',
});

const novaMono = Nova_Mono({
  subsets: ['latin'],
  variable: '--font-nova-mono',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Jose Lacueva',
  description:
    'Frontend developer building performant web apps focused on React and Next.js.',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const RootLayout = async ({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ lng: string }>;
}>) => {
  const { lng } = await params;
  return (
    <html dir={dir(lng)} lang={lng}>
      {/* NOTE: Tailwind utility class `antialiased` for smoothing font rendering. */}
      <body className={`${poppins.variable} ${novaMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
