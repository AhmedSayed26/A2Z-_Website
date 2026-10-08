import i18next from "i18next";
import en from "../public/Locals/en";
import ar from "../public/Locals/ar";

export const LANGUAGES = ["en", "ar"];
export const DEFAULT_LANGUAGE = "en";
export const STORAGE_KEY = "a2z-lang";

const i18n = i18next.createInstance();

i18n.init({
  resources: { en: { translation: en }, ar: { translation: ar } },
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
  initAsync: false,
});

export default i18n;
