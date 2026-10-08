"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import i18n, { DEFAULT_LANGUAGE, LANGUAGES, STORAGE_KEY } from "../lib/i18n";

const LanguageContext = createContext(null);

function applyToDocument(lng) {
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANGUAGE);

  const changeLanguage = useCallback((lng) => {
    if (!LANGUAGES.includes(lng)) return;
    i18n.changeLanguage(lng);
    applyToDocument(lng);
    setLang(lng);
    try {
      localStorage.setItem(STORAGE_KEY, lng);
    } catch {}
  }, []);

  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (saved && saved !== DEFAULT_LANGUAGE) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      changeLanguage(saved);
    }
  }, [changeLanguage]);

  const t = useCallback((key, options) => i18n.t(key, { ...options, lng: lang }), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used inside LanguageProvider");
  return ctx;
}
