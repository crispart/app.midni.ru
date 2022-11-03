import { createAuth0 } from '@auth0/auth0-vue';

const auth = createAuth0({
  domain: 'midni.eu.auth0.com',
  client_id: 'GU8b3MmSrnm5vXplF4QAKl4lPt3KGOd6',
  redirect_uri: window.location.origin,
  audience: 'https://api.midni.ru',
});

export default auth;
