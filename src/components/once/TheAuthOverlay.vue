<template>
  <Transition :name="TransitionName.FADE">
    <div
      v-if="isLoading || !isAuthenticated"
      class="overlay"
    >
      <span>*</span>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue';
import TransitionName from '@/constants/enum/TransitionName';

const {
  isLoading,
  isAuthenticated,
} = useAuth0();
</script>

<style lang="scss" scoped>
@use "@/sass/fragments/palette";
@import "@/sass/transition";

.overlay {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: palette.$app-primary;
}
</style>
