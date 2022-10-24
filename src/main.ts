import { createApp } from 'vue';
import { createAuth0 } from '@auth0/auth0-vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import '@/sass/app.scss';

createApp(App)
  .use(router)
  .use(
    createAuth0({
      domain: 'midni.eu.auth0.com',
      client_id: 'GU8b3MmSrnm5vXplF4QAKl4lPt3KGOd6',
      redirect_uri: window.location.origin,
    }),
  )
  .mount('#app');
