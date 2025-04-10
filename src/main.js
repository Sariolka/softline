import './assets/styles.scss';

import { createApp } from 'vue';
import VueObserveVisibility from 'vue3-observe-visibility'
import App from './App.vue';

createApp(App).use(VueObserveVisibility).mount('#app');
