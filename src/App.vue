<template>
  <!-- полноэкранный оверлей -->
  <TheSplashScreen/>
  <!-- макет приложения -->
  <div
    v-if="isAppInitialized"
    class="layout"
  >
    <TheSidebar/>
    <TheHeader/>
    <main class="layout__main">
      <RouterView/>
    </main>
  </div>
</template>

<script lang="ts" setup>
import TheSidebar from '@/components/once/TheSidebar.vue';
import useAppInitialization from '@/composables/appInitialization';
import TheSplashScreen from '@/components/once/TheSplashScreen.vue';
import TheHeader from '@/components/once/TheHeader.vue';

const { isAppInitialized } = useAppInitialization();
</script>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-columns: 240px auto;
  grid-template-rows: 60px auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  column-gap: 24px;
  height: 100%;

  &__main { grid-area: main; }
}
</style>
