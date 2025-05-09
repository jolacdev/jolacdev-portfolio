'use client';

import SlideUpFadeWrapper from '@/components/animations/SlideUpFadeWrapper';
import Button from '@/components/atoms/Button';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';

// TODO - Temporal
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type NavigationBarProps = {};

const NavigationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {/* TODO - Temporal */}
      <Button
        className="fixed top-[1rem] right-[1rem] w-20"
        variant="primary"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? 'Hide' : 'Show'}
      </Button>
      {/* TODO - Temporal */}
      <AnimatePresence>
        {isVisible && (
          <SlideUpFadeWrapper
            className="bg-charcoal-800/75 fixed bottom-5 left-[50%] flex translate-x-[-50%] rounded-lg backdrop-blur-xs select-none md:bottom-10"
            tag="nav"
          >
            {/* TODO - Temporal */}
            <Button className="mx-2 my-4" variant="primary">
              Test
            </Button>
            <Button className="mx-2 my-4" variant="secondary">
              Test
            </Button>
            <Button className="mx-2 my-4" variant="primary">
              Test
            </Button>
            {/* TODO - Temporal */}
          </SlideUpFadeWrapper>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationBar;
