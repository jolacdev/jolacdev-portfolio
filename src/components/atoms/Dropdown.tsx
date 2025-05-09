'use client';

import { SUPPORTED_LANGUAGES } from '@/app/i18n/settings';
import { useClickOutside } from '@/hooks/useClickOutside';
import { ChevronUp } from '@/icons/ChevronUp';
import cx from 'classnames';
import { useState } from 'react';

import Button from './Button';

type DropdownProps = {
  showChevron?: boolean;
};

const Dropdown = ({ showChevron = true }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  // TODO: Check aria attributes [https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/listbox/listbox-collapsible.html]
  return (
    <div ref={ref} className="relative inline-block">
      <Button
        aria-expanded={isOpen}
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* <Image alt="en" height={20} src={enIcon} unoptimized width={20} /> */}
        EN
        {showChevron && (
          <ChevronUp
            className={cx('size-5', {
              '-scale-y-100 transform': isOpen,
            })}
          />
        )}
      </Button>
      {/* TODO: Handle hover border */}
      {isOpen && (
        <ul className="dark:bg-charcoal-600 absolute left-[50%] mt-2 min-w-32 translate-x-[-50%] overflow-hidden rounded-md bg-white shadow-sm">
          {SUPPORTED_LANGUAGES.map((language, index) => (
            <li key={language}>
              <button
                className={`${
                  language === 'en'
                    ? 'text-coral-400'
                    : 'dark:hover:bg-charcoal-400 hover:bg-charcoal-100/10'
                } block w-full px-4 py-2 text-start text-sm`}
              >
                <span className="truncate">{language}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
