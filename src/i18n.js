import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "./utils/lang/en.json"
import it from "./utils/lang/it.json"

const resources = {
  en: { translation: en },
  it: { translation: it }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage

    interpolation: {
      escapeValue: false
    }
});

export default i18n;
