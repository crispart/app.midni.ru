<template>
  <aside class="sidebar">
    <nav class="sidebar__navigation">
      <router-link
        v-for="route in routes"
        :key="route.label"
        :to="route.path"
      >
        {{ route.label }}
      </router-link>
    </nav>
  </aside>
</template>

<script setup lang="ts">
const routes = [
  {
    path: '/',
    label: 'Сводка',
  },
  {
    path: '/product',
    label: 'Товары',
  },
  {
    path: '/deal',
    label: 'Сделки',
  },
];
</script>

<style scoped lang="scss">
@use "@/sass/fragments/palette";

.sidebar {
  display: flex;

  &__navigation {
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 0 24px;
    border-right: 2px solid palette.$app-primary-darken;
  }
}
</style>
