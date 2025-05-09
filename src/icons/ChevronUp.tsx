import { SVGProps } from 'react';

export const ChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height="1em"
    viewBox="0 0 24 24"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"
      fill="currentColor"
    ></path>
  </svg>
);
