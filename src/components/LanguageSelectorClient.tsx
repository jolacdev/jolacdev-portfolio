import { SUPPORTED_LANGUAGES } from '@/app/i18n/settings';
import { useTranslation } from '@/app/i18n/useTranslation';
import { ChevronUp } from '@/icons/ChevronUp';
import Image from 'next/image';
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';

import enIcon from './../icons/en.svg';

// TODO: Temporal component for testing. Adapt.
export const LanguageSelectorClient = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, 'switch');
  const languagesToChoose = SUPPORTED_LANGUAGES.filter(
    (language) => lng !== language,
  );
  return (
    <div className="flex">
      <Trans
        components={{ 1: <strong /> }}
        i18nKey="languageSwitcher"
        t={t}
        values={{ lng: lng?.toUpperCase() }}
      />
      <ChevronUp />
      <Image
        alt="uk flag"
        className="mr-8"
        height={20}
        src={enIcon}
        unoptimized
        width={20}
      />
      {languagesToChoose.map((language, index) => (
        <span key={language}>
          {index > 0 && ' or '}
          <Link href={`/${language}`}>{language.toUpperCase()}</Link>
        </span>
      ))}
    </div>
  );
};
