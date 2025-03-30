import Button from '@/components/atoms/Button';
import Dropdown from '@/components/atoms/Dropdown';
import Heading from '@/components/atoms/Heading';
import { LanguageSelector } from '@/components/LanguageSelector';

import { createTranslation } from '../i18n';

const Home = async ({ params }: { params: Promise<{ lng: string }> }) => {
  const { lng } = await params;
  const { t } = await createTranslation(lng, {
    keyPrefix: 'home',
  });

  return (
    <div className="mx-auto max-w-5xl">
      <main>
        {/* TODO: Remove */}
        <Heading type="h1">{t('greeting')}</Heading>
        <Button>Text</Button>
        <Button className="bg-red-800">Text</Button>
        <Button className="bg-white text-black">Text</Button>
        <Button disabled></Button>
        <Dropdown />
        <p className="mb-2">{t('intro')}</p>
        <p>{t('specialization')}</p>
        <input className="accent-primary" type="checkbox" />
      </main>
      <footer>
        <LanguageSelector lng={lng} />
      </footer>
    </div>
  );
};

export default Home;
