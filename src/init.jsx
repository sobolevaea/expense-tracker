import i18next from 'i18next'
/* import { Provider } from 'react-redux' */
import { I18nextProvider } from 'react-i18next'

import App from './App.jsx'
/* import store from './store/index.js' */
/* import resources from './locales/index.js' */

const defaultLanguage = 'ru'

const initApp = () => {
  /* const state = store.getState(state => state) */

  const i18n = i18next.createInstance()

  i18n.init({
    lng: defaultLanguage,
    /*     resources, */
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  })

  return (
    /* <Provider store={store}> */
    <I18nextProvider i18n={i18n} defaultNS="translation">
      <App />
    </I18nextProvider>
    /*     </Provider> */
  )
}

export default initApp