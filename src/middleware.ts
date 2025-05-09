import { NextRequest, NextResponse } from 'next/server';

import { I18N_COOKIE_NAME } from './app/i18n/settings';
import {
  getLanguage,
  getRefererLanguage,
  shouldRedirect,
} from './app/middleware/middleware-i18n-utils';

// Refer to: https://nextjs.org/docs/pages/building-your-application/routing/middleware

// Apply middleware to all routes EXCEPT:
// - API routes (/api/*)
// - Next.js internal files (/static, /image)
// - Public assets (e.g., /favicon.ico, /sw.js, /site.webmanifest)
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
  ],
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
      response.cookies.set(I18N_COOKIE_NAME, refererLanguage);
    }

    return response;
  }

  return NextResponse.next();
}
