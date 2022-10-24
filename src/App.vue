<template>
  <TheSidebar/>
  <main>
    <router-view/>
  </main>
</template>

<script setup lang="ts">
import TheSidebar from '@/components/once/TheSidebar.vue';
</script>

<style lang="scss" scoped>
main {
  margin: 0 24px;
  width: calc(100% - 250px);
}
</style>
