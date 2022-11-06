import { createAuth0 } from '@auth0/auth0-vue';

const authProvider = createAuth0({
  domain: process.env.VUE_APP_AUTH0_DOMAIN,
  client_id: process.env.VUE_APP_AUTH0_CLIENT_ID,
  redirect_uri: window.location.origin,
  audience: process.env.VUE_APP_AUTH0_AUDIENCE,
});

export default authProvider;
