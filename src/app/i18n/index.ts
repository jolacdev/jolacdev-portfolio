import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { UseTranslationOptions } from 'react-i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';

import { getOptions } from './settings';

const initI18next = async (lng: string, ns?: string) => {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(lng, ns));

  return i18nInstance;
};

// NOTE: Named as `createTranslation` to prevent `async` linting error caused by the default hooky name `useTranslation`.
// Refer to: https://github.com/i18next/next-app-dir-i18next-example/issues/24
export const createTranslation = async (
  language: string,
  options: Pick<UseTranslationOptions<string>, 'keyPrefix'> = {},
  namespace?: string,
) => {
  const i18nextInstance = await initI18next(language, namespace);
  return {
    i18n: i18nextInstance,
    t: i18nextInstance.getFixedT(
      language,
      Array.isArray(namespace) ? namespace[0] : namespace,
      options.keyPrefix,
    ),
  };
};
