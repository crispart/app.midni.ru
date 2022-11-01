import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import auth from './plugins/auth';
import '@/sass/app.scss';

createApp(App)
  .use(router)
  .use(auth)
  .mount('#app');
