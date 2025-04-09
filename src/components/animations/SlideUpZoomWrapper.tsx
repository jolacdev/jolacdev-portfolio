'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

const variants = {
  exit: { scale: 0, y: 0 },
  initial: { scale: 0, y: 100 },
  animate: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

type SlideUpZoomWrapperProps = {
  children: ReactNode;
  className?: string;
  tag?: 'div' | 'nav';
};

const SlideUpZoomWrapper = ({
  children,
  className = '',
  tag = 'div',
}: SlideUpZoomWrapperProps) => {
  const Tag = motion[tag];

  return (
    <Tag
      key="box"
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

export default SlideUpZoomWrapper;
