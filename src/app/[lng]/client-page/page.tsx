'use client';

import { useTranslation } from '@/app/i18n/useTranslation';
import Heading from '@/components/atoms/Heading';
import { LanguageSelectorClient } from '@/components/LanguageSelectorClient';
import { useState } from 'react';

// TODO: Temporal component for testing. Remove.
const Page = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng); // TODO: Swap ns and options?
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Heading type="h1">Counter Page</Heading>
      <div className="flex">
        <button
          className="w-4 cursor-pointer rounded-xl bg-white text-black hover:bg-gray-200"
          onClick={() => setCounter(Math.max(0, counter - 1))}
        >
          -
        </button>
        <button
          className="w-4 cursor-pointer rounded-xl bg-white text-black hover:bg-gray-200"
          onClick={() => setCounter(Math.min(10, counter + 1))}
        >
          +
        </button>
        <p>{t('temporal.counter', { count: counter })}</p>
      </div>
      <LanguageSelectorClient lng={lng} />
    </>
  );
};

export default Page;
