import { i18n } from 'i18next';
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import * as resources from '../locales';

export const fallbackLng = 'en';
export const languages = [fallbackLng, 'id'];
export const defaultNS = 'common';
export const cookieName = 'lang';

export async function useTranslation(
  lng: string,
  ns?: string,
): Promise<{
  t: i18n['t'];
  i18n: i18n;
}> {
  const i18nInstance = createInstance();

  await i18nInstance.use(initReactI18next).init({
    lng,
    supportedLngs: languages,
    resources,
    fallbackLng,
    ns,
    // debug: true,
    // defaultNS,
    // fallbackNS: defaultNS,
  });

  return {
    t: i18nInstance.t,
    i18n: i18nInstance,
  };
}
