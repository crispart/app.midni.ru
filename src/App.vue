<template>
  <TheSidebar/>
  <main>
    <RouterView/>
  </main>
  <TheAuthOverlay/>
</template>

<script setup lang="ts">
import TheSidebar from '@/components/once/TheSidebar.vue';
import TheAuthOverlay from '@/components/once/TheAuthOverlay.vue';
</script>

<style lang="scss" scoped>
main {
  margin: 0 24px;
  width: calc(100% - 250px);
}
</style>
