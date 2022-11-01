<template>
  <Transition :name="TransitionName.FADE">
    <div
      v-if="!isAppInitialized"
      class="splashscreen"
    >
      <AppIcon
        :name="IconName.DISCOVER_1"
        :size="SizeName.LARGE"
        class="splashscreen__spinner"
      />
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import TransitionName from '@/constants/enum/TransitionName';
import AppIcon from '@/components/base/AppIcon.vue';
import IconName from '@/constants/enum/IconName';
import useAppInitialization from '@/composables/appInitialization';
import SizeName from '@/constants/enum/SizeName';

const { isAppInitialized } = useAppInitialization();
</script>

<style lang="scss" scoped>
@use "@/sass/fragments/palette";
@import "@/sass/transition";

.splashscreen {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: palette.$primary;

  &__spinner {
    stroke: palette.$on-primary;
    animation: spin 1s none 0s infinite alternate;
  }
}
</style>
