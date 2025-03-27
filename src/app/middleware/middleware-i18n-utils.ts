import acceptLanguage from 'accept-language';
import { NextRequest } from 'next/server';

import {
  FALLBACK_LNG,
  I18N_COOKIE_NAME,
  SUPPORTED_LANGUAGES,
} from '../i18n/settings';

acceptLanguage.languages(SUPPORTED_LANGUAGES);

export const getLanguage = (request: NextRequest) => {
  // Preferred language from the cookies.
  const cookieValue = request.cookies.get(I18N_COOKIE_NAME)?.value;
  const cookieLng = cookieValue && acceptLanguage.get(cookieValue);
  if (cookieLng) {
    return cookieLng;
  }

  // Preferred language from the user's browser language.
  const browserAcceptLanguage = request.headers.get('Accept-Language');
  const browserLng =
    browserAcceptLanguage && acceptLanguage.get(browserAcceptLanguage);
  if (browserLng) {
    return browserLng;
  }

  return FALLBACK_LNG;
};

export const shouldRedirect = (request: NextRequest) => {
  // Check if request pathname starts with a supported language.
  const isPathLanguageSupported = SUPPORTED_LANGUAGES.some((lng) =>
    request.nextUrl.pathname.startsWith(`/${lng}`),
  );

  // Check if the request pathname is an internal path. For example, Next.js assets.
  const isInternalPath = request.nextUrl.pathname.startsWith('/_next');

  return !isPathLanguageSupported && !isInternalPath;
};

export const getRefererLanguage = (request: NextRequest) => {
  const referer = request.headers.get('referer');

  if (!referer) {
    return null;
  }

  const url = new URL(referer);
  const refererLanguage = SUPPORTED_LANGUAGES.find((lng) =>
    url.pathname.startsWith(`/${lng}`),
  );

  return refererLanguage || null;
};
