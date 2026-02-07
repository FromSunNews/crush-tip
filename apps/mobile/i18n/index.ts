import { getLocales } from 'expo-localization';
import { vi, type Dictionary } from './vi';
import { en } from './en';

export type Language = 'vi' | 'en';

const dictionaries: Record<Language, Dictionary> = { vi, en };

export function getDeviceLanguage(): Language {
  const locale = getLocales()[0]?.languageCode;
  return locale === 'vi' ? 'vi' : 'en';
}

export function getTranslations(lang: Language): Dictionary {
  return dictionaries[lang];
}

export type { Dictionary };
