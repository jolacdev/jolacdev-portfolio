import { LinkVariant } from '@/icons/LinkVariant';
import Link from 'next/link';

import Heading from '../atoms/Heading';

type SectionProps = {
  hash: string;
  title: string;
};

const Section = ({ hash, title }: SectionProps) => (
  <Heading className="group relative flex items-center" id={hash} type="h2">
    {title}
    <Link
      className="hover:text-coral-500 absolute -translate-x-full cursor-pointer pr-1 opacity-0 group-hover:opacity-100"
      href={`#${hash}`}
    >
      <LinkVariant className="size-6" />
    </Link>
  </Heading>
);

export default Section;
