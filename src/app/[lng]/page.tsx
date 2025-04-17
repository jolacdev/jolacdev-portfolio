import Button from '@/components/atoms/Button';
import Dropdown from '@/components/atoms/Dropdown';
import Heading from '@/components/atoms/Heading';
import { LanguageSelector } from '@/components/LanguageSelector';
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
      <main>
        {/* TODO: Remove */}
        <Heading type="h1">{t('greeting')}</Heading>
        <Section hash="projects" title="Projects" />
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
      </main>
      <footer>
        <LanguageSelector lng={lng} />
      </footer>
    </div>
  );
};

export default Home;
