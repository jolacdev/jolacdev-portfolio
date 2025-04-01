'use client';

import { handleAccessibleKeyPress } from '@/utils/handleAccessibleKeyPress';
import cx from 'classnames';
import {
  type ButtonHTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
  useState,
} from 'react';

type ButtonProps = {
  children: ReactNode;
  variant: 'outline' | 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, variant, ...props }: ButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const variantStyles: Record<ButtonProps['variant'], string> = {
    outline: 'bg-transparent',
    primary:
      'bg-coral-500 border-coral-400 hover:not-disabled:bg-coral-400 focus:bg-coral-400 text-charcoal-700',
    secondary:
      'bg-charcoal-500 border-charcoal-400 hover:not-disabled:bg-charcoal-400 focus:bg-charcoal-400 text-white',
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLButtonElement>) => {
    const isKeyDown = e.type === 'keydown';
    handleAccessibleKeyPress(e, () => setIsActive(isKeyDown));
  };

  return (
    <button
      className={cx(
        'inline-flex h-9 items-center justify-center gap-x-2 rounded-sm border-1 px-4 align-middle transition-all duration-100',
        'hover:not-disabled:cursor-pointer',
        'active:not-disabled:scale-95',
        'disabled:opacity-50 disabled:hover:cursor-default',
        { 'not-disabled:scale-95': isActive },
        variantStyles[variant],
        className,
      )}
      onKeyDown={handleKeyPress}
      onKeyUp={handleKeyPress}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
