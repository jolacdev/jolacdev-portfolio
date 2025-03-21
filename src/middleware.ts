import acceptLanguage from 'accept-language';
import { NextRequest, NextResponse } from 'next/server';

import { cookieName, fallbackLng, languages } from './app/i18n/settings';

// Refer to: https://nextjs.org/docs/pages/building-your-application/routing/middleware

acceptLanguage.languages(languages);

// Apply middleware to all routes EXCEPT:
// - API routes (/api/*)
// - Next.js internal files (/static, /image)
// - Public assets (e.g., /favicon.ico, /sw.js, /site.webmanifest)
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
  ],
};

const getLanguage = (request: NextRequest) => {
  // Preferred language from the cookies.
  const cookieValue = request.cookies.get(cookieName)?.value;
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

  return fallbackLng;
};

const shouldRedirect = (request: NextRequest) => {
  // Check if request pathname starts with a supported language.
  const isPathLanguageSupported = languages.some((lng) =>
    request.nextUrl.pathname.startsWith(`/${lng}`),
  );

  // Check if the request pathname is an internal path. For example, Next.js assets.
  const isInternalPath = request.nextUrl.pathname.startsWith('/_next');

  return !isPathLanguageSupported && !isInternalPath;
};

const getRefererLanguage = (request: NextRequest) => {
  const referer = request.headers.get('referer');

  if (!referer) {
    return null;
  }

  const url = new URL(referer);
  const refererLanguage = languages.find((lng) =>
    url.pathname.startsWith(`/${lng}`),
  );

  return refererLanguage || null;
};

export function middleware(request: NextRequest) {
  const language = getLanguage(request);

  if (shouldRedirect(request)) {
    return NextResponse.redirect(
      new URL(`/${language}${request.nextUrl.pathname}`, request.url),
    );
  }

  if (request.headers.has('referer')) {
    const response = NextResponse.next();
    const refererLanguage = getRefererLanguage(request);

    if (refererLanguage) {
      response.cookies.set(cookieName, refererLanguage);
    }

    return response;
  }

  return NextResponse.next();
}
