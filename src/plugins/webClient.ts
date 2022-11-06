import { createFetch } from '@vueuse/core';
import authProvider from '@/plugins/authProvider';

const webClient = createFetch({
  baseUrl: process.env.VUE_APP_RESOURCE_SERVER_URL,
  options: {
    timeout: process.env.VUE_APP_HTTP_REQUEST_TIMEOUT,
    async beforeFetch({ options }) {
      const accessToken = await authProvider.getAccessTokenSilently();
      // eslint-disable-next-line no-param-reassign
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      };
      return { options };
    },
  },
  fetchOptions: { mode: 'cors' },
});

export default webClient;
