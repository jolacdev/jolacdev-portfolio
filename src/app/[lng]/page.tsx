import Button from '@/components/atoms/Button';
import Dropdown from '@/components/atoms/Dropdown';
import Heading from '@/components/atoms/Heading';
import { LanguageSelector } from '@/components/LanguageSelector';
import Timeline from '@/components/molecules/Timeline';
import Section from '@/components/organisms/Section';

import { createTranslation } from '../i18n';

const Home = async ({ params }: { params: Promise<{ lng: string }> }) => {
  const { lng } = await params;
  const { t } = await createTranslation(lng, {
    keyPrefix: 'home',
  });
  const { t: tTemporal } = await createTranslation(lng, {
    keyPrefix: 'temporal',
  });

  return (
    <div className="mx-auto max-w-4xl">
      <header>
        <Heading type="h1">{t('greeting')}</Heading>
      </header>
      <main>
        {/* TODO: Remove */}
        <Section hash="work" title="Work">
          <Timeline />
        </Section>
        <Section hash="projects" title={t('sections.projects.title')}>
          <LanguageSelector lng={lng} />
          <Button variant="primary">Text</Button>
          <Button variant="secondary">Text</Button>
          <Button variant="outline">Text</Button>
          <Button disabled variant="outline">
            Text
          </Button>
          <Dropdown />
          <p className="mb-2">{t('intro')}</p>
          <p>{t('specialization')}</p>
          <p>{tTemporal('loremIpsum')}</p>
          <input className="accent-primary" type="checkbox" />
        </Section>
      </main>
    </div>
  );
};

export default Home;
