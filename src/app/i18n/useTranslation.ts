'use client';

import { getCookie, setCookie } from 'cookies-next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { useEffect } from 'react';
import {
  initReactI18next,
  useTranslation as useI18NextTranslation,
  UseTranslationOptions,
} from 'react-i18next';

import { getOptions, I18N_COOKIE_NAME, SUPPORTED_LANGUAGES } from './settings';

const isServer = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    preload: isServer ? SUPPORTED_LANGUAGES : [],
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
  });

export function useTranslation(
  lng: string,
  ns?: string,
  options?: UseTranslationOptions<undefined>,
) {
  const i18nextCookie = getCookie(I18N_COOKIE_NAME);

  const { i18n, ...rest } = useI18NextTranslation(ns, options);

  useEffect(() => {
    if (!isServer && lng && i18n.resolvedLanguage !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  useEffect(() => {
    if (!isServer && lng && i18nextCookie !== lng) {
      setCookie(I18N_COOKIE_NAME, lng, { path: '/' });
    }
  }, [lng, i18nextCookie]);

  if (isServer && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  }

  return { i18n, ...rest };
}
