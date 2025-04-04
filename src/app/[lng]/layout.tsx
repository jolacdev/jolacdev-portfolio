import { dir } from 'i18next';
import type { Metadata } from 'next';
import { Nova_Mono, Poppins } from 'next/font/google';
import { ReactNode } from 'react';

import { SUPPORTED_LANGUAGES } from '../i18n/settings';

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
  return SUPPORTED_LANGUAGES.map((lng) => ({ lng }));
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
      <body
        className={`antialiased ${poppins.variable} ${novaMono.variable} dark:bg-charcoal-600 text-charcoal-700 bg-white dark:text-white`}
      >
        {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
