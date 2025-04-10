'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

const variants = {
  initial: { opacity: 0, y: 200 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 0.3,
    },
  },
};

type SlideUpFadeWrapperProps = {
  children: ReactNode;
  className?: string;
  tag?: 'div' | 'nav';
};

const SlideUpFadeWrapper = ({
  children,
  className = '',
  tag = 'div',
}: SlideUpFadeWrapperProps) => {
  const Tag = motion[tag];

  return (
    <Tag
      animate="animate"
      className={className}
      exit="exit"
      initial="initial"
      variants={variants}
    >
      {children}
    </Tag>
  );
};

export default SlideUpFadeWrapper;
