import Button from '@/components/atoms/Button';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type NavigationBarProps = {};

// TODO: Animations: https://staticmania.com/blog/how-to-use-framer-motion-for-animations-in-next-js

const NavigationBar = () => {
  console.log('nav');

  return (
    <nav className="bg-charcoal-800/75 bottom-5, fixed left-[50%] flex translate-x-[-50%] rounded-lg backdrop-blur-xs select-none md:bottom-10">
      <Button className="m-4" variant="primary">
        Test
      </Button>{' '}
      <Button className="m-4" variant="primary">
        Test
      </Button>{' '}
      <Button className="m-4" variant="primary">
        Test
      </Button>
    </nav>
  );
};

export default NavigationBar;
