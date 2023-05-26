import './assets/base.css';

import './style.css';
import '@/assets/globals.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faUser,
  faIdCard,
  faFlagUsa,
  faMap,
  faArrowUp91,
  faLocationArrow,
  faLocationDot,
  faAt,
  faPhone,
  faMobile,
  faFax,
  faBarcode,
  faEnvelope,
  faPlus,
  faSearch,
  faTrash,
  faPen,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faUser,
  faIdCard,
  faFlagUsa,
  faMap,
  faArrowUp91,
  faLocationArrow,
  faLocationDot,
  faAt,
  faPhone,
  faMobile,
  faFax,
  faBarcode,
  faEnvelope,
  faPlus,
  faSearch,
  faTrash,
  faPlus,
  faPen
);

createApp(App)
  .use(createPinia())
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
