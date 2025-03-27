import { createTranslation } from '@/app/i18n';
import { SUPPORTED_LANGUAGES } from '@/app/i18n/settings';
import Chevron from '@/icons/Chevron';
import Image from 'next/image';
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';

import enIcon from './../icons/en.svg';

export const LanguageSelector = async ({ lng }: { lng: string }) => {
  const { t } = await createTranslation(lng, {}, 'switch');
  const languagesToChoose = SUPPORTED_LANGUAGES.filter(
    (language) => lng !== language,
  );
  return (
    <div>
      <Trans
        components={{ 1: <strong /> }}
        i18nKey="languageSwitcher"
        t={t}
        values={{ lng: lng?.toUpperCase() }}
      />
      <Chevron />
      <Image alt="uk flag" height={20} src={enIcon} unoptimized width={20} />
      {languagesToChoose.map((language, index) => (
        <span key={language}>
          {index > 0 && ' or '}
          <Link href={`/${language}`}>{language.toUpperCase()}</Link>
        </span>
      ))}
    </div>
  );
};
