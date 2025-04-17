import { LinkVariant } from '@/icons/LinkVariant';
import Link from 'next/link';

import Heading, { HeadingProps } from '../atoms/Heading';

type AnchorHeadingProps = HeadingProps & {
  hash: string;
};

const AnchorHeading = ({ children, hash }: AnchorHeadingProps) => (
  <Heading className="group relative flex items-center" id={hash} type="h2">
    {children}
    <Link
      className="hover:text-coral-500 absolute -left-1 -translate-x-full cursor-pointer opacity-0 group-hover:opacity-100"
      href={`#${hash}`}
    >
      <LinkVariant className="size-6" />
    </Link>
  </Heading>
);

export default AnchorHeading;
