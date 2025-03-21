import { InitOptions } from 'i18next';

export const fallbackLng = 'en';
export const languages = [fallbackLng, 'es'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS,
): InitOptions {
  return {
    defaultNS, // Default namespace. If not passed to the translation function.
    fallbackLng,
    fallbackNS: defaultNS,
    lng, // Language (overrides language detection). If set to 'cimode' the output text will be the key.
    ns, // String or array of namespaces to load. Defaults to 'translation'.
    supportedLngs: languages, // Array of allowed languages
  };
}
