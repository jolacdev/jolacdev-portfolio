import AnchorHeading from '../molecules/AnchorHeading';

type SectionProps = {
  hash: string;
  title: string;
};

const Section = ({ hash, title }: SectionProps) => (
  <AnchorHeading hash={hash} type="h2">
    {title}
  </AnchorHeading>
);

export default Section;
