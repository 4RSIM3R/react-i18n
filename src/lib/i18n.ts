import { english } from "@/locales/en";
import { indonesian } from "@/locales/id";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import LocalStorageBackend from 'i18next-localstorage-backend';

const resources = {
    en: english,
    id: indonesian
};

i18n
    .use(LanguageDetector) // Detects language from local storage
    .use(LocalStorageBackend) // Save language to local storage
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React already safes from xss
        },
        backend: {
            // Options for the local storage backend
            prefix: 'i18next_res_', // Prefix for stored resources
            expirationTime: 7 * 24 * 60 * 60 * 1000, // 1 week expiration time
        },
        detection: {
            // Options for language detection
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    });

export default i18n;