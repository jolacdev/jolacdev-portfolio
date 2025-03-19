import { HTMLProps, ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & HTMLProps<HTMLHeadingElement>;

const Heading = ({ children, className = '', type, ...rest }: HeadingProps) => {
  const Tag = type;

  const headingStyles = {
    h1: 'text-4xl font-extrabold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium',
  };
  // Get the appropriate class for the specific heading type
  const classNames = headingStyles[type];

  return (
    <Tag className={`${classNames} font-mono ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Heading;
