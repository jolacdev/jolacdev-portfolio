import { forwardRef, SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement>;

// NOTE: www.reddit.com/r/nextjs/comments/181453h/optimal_way_to_use_icons/
const Chevron = forwardRef<SVGSVGElement, IconProps>(
  ({ className = '', ...rest }, ref) => (
    <svg
      ref={ref}
      className={className}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M6 15l6 -6l6 6" />
    </svg>
  ),
);

Chevron.displayName = 'Chevron';
export default Chevron;
