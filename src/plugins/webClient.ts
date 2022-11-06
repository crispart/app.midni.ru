import { createFetch } from '@vueuse/core';
import authProvider from '@/plugins/authProvider';
import EnvironmentUtils from '@/utils/EnvironmentUtils';

const requestTimeout: number = EnvironmentUtils.isProduction() ? 1000 * 10 : 1000 * 60;

const webClient = createFetch({
  baseUrl: 'https://api.midni.ru/api',
  options: {
    async beforeFetch({ options, cancel }) {
      const accessToken = await authProvider.getAccessTokenSilently();

      if (!accessToken) {
        cancel();
      }

      // eslint-disable-next-line no-param-reassign
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      };

      return { options };
    },
    timeout: requestTimeout,
  },
  fetchOptions: { mode: 'cors' },
});

export default webClient;
