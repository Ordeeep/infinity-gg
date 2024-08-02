import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from '../assets/translation/languages/en.json'
import ptTranslation from '../assets/translation/languages/pt.json'

i18n.use(initReactI18next).init({
   resources: {
      en: { ...enTranslation },
      pt: { ...ptTranslation },
   },
   lng: 'en'
})