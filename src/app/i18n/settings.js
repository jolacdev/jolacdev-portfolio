export const fallbackLng = 'en';
export const languages = [fallbackLng, 'es'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    defaultNS,
    fallbackLng,
    fallbackNS: defaultNS,
    lng,
    ns,
    // debug: true,
    supportedLngs: languages,
  };
}
