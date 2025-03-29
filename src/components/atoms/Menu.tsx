'use client';

import { SUPPORTED_LANGUAGES } from '@/app/i18n/settings';
import { useClickOutside } from '@/hooks/useClickOutside';
import { ChevronUp } from '@/icons/ChevronUp';
import cx from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import enIcon from './../../icons/en.svg';

type MenuProps = {
  showChevron?: boolean;
};

const Menu = ({ showChevron = true }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickOutside<HTMLDetailsElement>(() => setIsOpen(false));

  // TODO: Check aria attributes

  return (
    <details ref={ref} className="relative inline-block">
      <summary
        aria-expanded={isOpen}
        className="inline-flex items-center justify-center gap-x-2 rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium transition hover:cursor-pointer hover:bg-white/15"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image alt="en" height={20} src={enIcon} unoptimized width={20} />
        EN
        {showChevron && (
          <ChevronUp
            className={cx('size-5', {
              '-scale-y-100 transform': isOpen,
            })}
          />
        )}
      </summary>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 rounded-md bg-inherit">
          {SUPPORTED_LANGUAGES.map((language, index) => (
            <li key={language}>
              <button
                className={`${
                  language === 'en' ? '' : 'hover:cursor-pointer'
                } block w-full items-center rounded-md px-4 py-2 text-start text-sm hover:bg-gray-100`}
              >
                <span className="truncate">{language}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </details>
  );
};

export default Menu;
