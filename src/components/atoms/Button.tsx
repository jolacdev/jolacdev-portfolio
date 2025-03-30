import cx from 'classnames';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// Order
// 1. Layout & Positioning: container, flex, grid, absolute, relative
// 2. Box Model: p-4, m-4, w-1/2, h-64
// 3. Typography: text-center, text-lg, font-bold
// 4. Visual Styles: bg-blue-500, text-white, shadow-lg
// 5. State Variants: hover:bg-blue-700, focus:outline-none

const Button = ({ children, className, ...props }: ButtonProps) => {
  console.log('');
  return (
    <button
      className={cx(
        'bg-background-950 m-4 inline-flex h-9 items-center justify-center rounded-sm px-4',
        'border-background-800 border-1',
        'hover:bg-background-900 hover:cursor-pointer',
        'active:bg-background-700',
        'focus-visible:outline-primary focus-visible:outline-2',
        className,
      )}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
