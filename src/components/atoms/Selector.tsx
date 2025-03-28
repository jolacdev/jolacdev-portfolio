'use client';

import { SUPPORTED_LANGUAGES } from '@/app/i18n/settings';
import cx from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import enIcon from './../../icons/en.svg';

type SelectorProps = {
  onClick: () => void;
};

const Selector = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleWindowClick = (event: any) => {
      const target = event.target.closest('button');
      if (target && target.id === 'LANGUAGE_SELECTOR_ID') {
        return;
      }
      setIsOpen(false);
    };
    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <div className="relative inline-block">
      <button
        aria-expanded={isOpen}
        className="inline-flex items-center justify-center gap-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
        id="LANGUAGE_SELECTOR_ID"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image alt="en" height={20} src={enIcon} unoptimized width={20} />
        EN
        <svg
          aria-hidden="true"
          className={cx('size-5 transition', {
            '-scale-y-100 transform': isOpen,
          })}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
            fillRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          aria-labelledby={'LANGUAGE_SELECTOR_ID'}
          aria-orientation="vertical"
          className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black"
          role="menu"
        >
          {SUPPORTED_LANGUAGES.map((language, index) => (
            <button
              key={language}
              className={`${
                language === 'en'
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-700 hover:cursor-pointer'
              } block w-full items-center rounded-md px-4 py-2 text-start text-sm hover:bg-gray-100`}
              role="menuitem"
              // onClick={() => handleLanguageChange(language)}
            >
              {/* <FlagIcon countryCode={language.key} /> */}
              <span className="truncate">{language}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Selector;
