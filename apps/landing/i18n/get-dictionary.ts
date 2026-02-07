import type { Locale } from './config';
import { vi, type Dictionary } from './dictionaries/vi';
import { en } from './dictionaries/en';

const dictionaries: Record<Locale, Dictionary> = { vi, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.vi;
}

export type { Dictionary };
