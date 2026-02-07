import { createContext, useContext, type ReactNode } from 'react';
import { getDeviceLanguage, getTranslations, type Language, type Dictionary } from './index';

interface LanguageContextValue {
  language: Language;
  t: Dictionary;
}

const language = getDeviceLanguage();

const LanguageContext = createContext<LanguageContextValue>({
  language,
  t: getTranslations(language),
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = getDeviceLanguage();
  const t = getTranslations(lang);

  return (
    <LanguageContext.Provider value={{ language: lang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
