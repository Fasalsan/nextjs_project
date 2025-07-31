import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import en from './locales/en'; // import from .js file
// import km from './locales/km';

import en from './app/locales/en';
import km from './app/locales/km';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            km: { translation: km },
        },
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
