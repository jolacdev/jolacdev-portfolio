import { InitOptions } from 'i18next';

const DEFAULT_NAMESPACE = 'translation';
export const FALLBACK_LNG = 'en';
export const SUPPORTED_LANGUAGES = [FALLBACK_LNG, 'es'];
export const I18N_COOKIE_NAME = 'i18next';

export function getOptions(
  lng = FALLBACK_LNG,
  ns: string | string[] = DEFAULT_NAMESPACE,
): InitOptions {
  return {
    defaultNS: DEFAULT_NAMESPACE, // Default namespace. If not passed to the translation function.
    fallbackLng: FALLBACK_LNG,
    fallbackNS: DEFAULT_NAMESPACE,
    lng, // Language (overrides language detection). If set to 'cimode' the output text will be the key.
    ns, // String or array of namespaces to load. Defaults to 'translation'.
    supportedLngs: SUPPORTED_LANGUAGES, // Array of allowed languages
  };
}
