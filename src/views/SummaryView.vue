<template>
  <h1>Сводка</h1>
  <p>{{ publicIsFetching }} {{ publicError }} {{ publicData }}</p>
  <p>{{ privateIsFetching }} {{ privateError }} {{ privateData }}</p>
  <p>{{ dataSet }}</p>
  <p>{{ dataSetThen }}</p>
</template>

<script lang="ts" setup>
import MessageController from '@/api/controller/MessageController';
import { onMounted, ref } from 'vue';
import { get, set } from '@vueuse/core';

// деструктуризация

const { isFetching: publicIsFetching, error: publicError, data: publicData } = MessageController.getPublicMessage();

const { isFetching: privateIsFetching, error: privateError, data: privateData } = MessageController.getPrivateMessage();

// async / await

const dataSet = ref<string>('');

const getPrivate = async () => {
  const response = await MessageController.getPrivateMessage();
  set(dataSet, get(response.data));
};

// promise then

const dataSetThen = ref<string>('');

MessageController.getPrivateMessage()
  .then((response) => (set(dataSetThen, get(response.data))));

onMounted(() => {
  getPrivate();
});
</script>
