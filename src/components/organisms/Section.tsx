import { ReactNode } from 'react';

import AnchorHeading from '../molecules/AnchorHeading';

type SectionProps = {
  children: ReactNode;
  hash: string;
  title: string;
};

const Section = ({ children, hash, title }: SectionProps) => (
  <section className="px-4">
    <AnchorHeading hash={hash} type="h2">
      {title}
    </AnchorHeading>
    {children}
  </section>
);

export default Section;
