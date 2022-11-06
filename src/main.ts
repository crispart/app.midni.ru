import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import authProvider from './plugins/authProvider';
import '@/sass/app.scss';

createApp(App)
  .use(router)
  .use(authProvider)
  .mount('#app');
