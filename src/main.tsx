import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '../app/globals.css';

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import portugueseTranslation from "./translations/pt.json";
import englishTranslation from "./translations/en.json";

i18next
  .use(LanguageDetector)
  .init({
    interpolation: { escapeValue: false },
    resources: {
      pt: {
        common: portugueseTranslation
      },
      en: {
        common: englishTranslation
      },
    },
  });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
)
