import { english } from "@/locales/en";
import { indonesian } from "@/locales/id";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: english,
    id: indonesian
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;