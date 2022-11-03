<template>
  <h1>Сводка</h1>
  <p>{{ publicData }}</p>
  <p>{{ privateData }}</p>
</template>

<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue';
import { onMounted, ref } from 'vue';
import { set } from '@vueuse/core';

const { getAccessTokenSilently } = useAuth0();

const publicData = ref<string>('');
const privateData = ref<string>('');

const getPublic = async () => {
  const response = await fetch('https://api.midni.ru/api/public');
  const data = await response.json();
  set(publicData, data);
};

const getPrivate = async () => {
  const token = await getAccessTokenSilently();
  const response = await fetch('https://api.midni.ru/api/private', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.json();
  set(privateData, data);
};

onMounted(() => {
  getPublic();
  getPrivate();
});
</script>
