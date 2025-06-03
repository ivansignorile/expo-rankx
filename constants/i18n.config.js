import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";
import en from "./en.json";
import it from "./it.json";
import es from "./es.json";
import fr from "./fr.json";
import de from "./de.json";
import { load } from "@/utils/store";

const resources = {
  en: {
    translation: en,
    fullName: "English",
  },
  it: {
    translation: it,
    fullName: "Italiano",
  },
  es: {
    translation: es,
    fullName: "Español",
  },
  fr: {
    translation: fr,
    fullName: "Français",
  },
  de: {
    translation: de,
    fullName: "Deutsch",
  },
};

const init = async () => {
  const deviceLanguage = getLocales()[0].languageCode;
  const storedLocale = await load("locale");

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources,
    lng: storedLocale || deviceLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed
    },
  });
};

init();

export default i18n;
