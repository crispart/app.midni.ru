import { useAuth0 } from '@auth0/auth0-vue';
import { computed } from 'vue';
import { get } from '@vueuse/core';

export default function useAppInitialization() {
  const {
    isLoading,
    isAuthenticated,
  } = useAuth0();

  const isAppInitialized = computed<boolean>(() => (!get(isLoading) && get(isAuthenticated)));

  return { isAppInitialized };
}
