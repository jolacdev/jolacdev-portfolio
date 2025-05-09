'use client';

import { useClickOutside } from '@/hooks/useClickOutside';
import { ChevronUp } from '@/icons/ChevronUp';
import cx from 'classnames';
import { useState } from 'react';

import Button from './Button';

type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: Option[];
  showChevron?: boolean;
  onChange?: (option: Option) => void;
};

const Dropdown = ({
  onChange = undefined,
  options,
  showChevron = true,
}: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<Option>(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const handleClick = (option: Option) => {
    setSelectedValue(option);
    setIsOpen(false);
    onChange?.(option);
  };

  // TODO: Check aria attributes [https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/listbox/listbox-collapsible.html]
  return (
    <div ref={ref} className="relative inline-block">
      <Button
        {...(isOpen ? { 'aria-expanded': 'true' } : {})} // NOTE: aria-expanded is only set when listbox is open
        aria-haspopup="listbox"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue.label}
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
        <ul
          className="dark:bg-charcoal-600 absolute left-[50%] mt-2 min-w-32 translate-x-[-50%] overflow-hidden rounded-md bg-white shadow-sm"
          tabIndex={-1}
        >
          {options.map((option) => {
            const { label, value } = option;
            const isSelected = selectedValue.value === value;

            return (
              <li key={label + value} aria-selected={isSelected} role="option">
                <button
                  className={`${
                    isSelected
                      ? 'text-coral-400'
                      : 'dark:hover:bg-charcoal-400 hover:bg-charcoal-100/10 hover:cursor-pointer'
                  } block w-full px-4 py-2 text-start text-sm`}
                  disabled={isSelected}
                  onClick={() => handleClick(option)}
                >
                  <span className="truncate">{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
