import { HTMLProps, ReactNode } from 'react';

export type HeadingProps = {
  children: ReactNode;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & HTMLProps<HTMLHeadingElement>;

const Heading = ({ children, className = '', type, ...rest }: HeadingProps) => {
  const Tag = type;

  const headingStyles = {
    h1: 'text-5xl font-extrabold mt-8 mb-8',
    h2: 'text-3xl font-bold mt-8 mb-6',
    h3: 'text-2xl font-semibold mt-6 mb-3',
    h4: 'text-xl font-semibold mt-6 mb-3',
    h5: 'text-lg font-medium mt-4 mb-2',
    h6: 'text-base font-medium mt-4 mb-2',
  };

  const classNames = headingStyles[type];

  return (
    <Tag className={`${classNames} font-mono ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Heading;
