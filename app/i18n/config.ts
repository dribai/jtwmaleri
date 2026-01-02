import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import svCommon from "../locales/sv/common.json";
import enCommon from "../locales/en/common.json";
import esCommon from "../locales/es/common.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            sv: { common: svCommon },
            en: { common: enCommon },
            es: { common: esCommon },
        },
        fallbackLng: "sv",
        ns: ["common"],
        defaultNS: "common",
        supportedLngs: ["sv", "en", "es"],
        interpolation: { escapeValue: false },
        detection: {
            order: ["path", "cookie", "localStorage", "navigator"],
            lookupFromPathIndex: 0,
            caches: ["cookie"],
        },
    });

export default i18n;