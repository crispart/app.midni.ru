<template>
  <svg
    :height="sizeNumber"
    :width="sizeNumber"
    class="icon"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    v-html="path"
  >
  </svg>
</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from 'vue';
import IconPath from '@/constants/enum/IconPath';
import SizeName from '@/constants/enum/SizeName';

const props = withDefaults(
  defineProps<{
    path: IconPath;
    size?: SizeName;
  }>(),
  { size: SizeName.MEDIUM },
);

const sizeNumber = computed<number>(() => {
  if (props.size === SizeName.SMALL) return 16;
  if (props.size === SizeName.LARGE) return 32;
  return 24;
});
</script>

<style lang="scss" scoped>
@use "@/sass/fragments/palette";

.icon {
  stroke: palette.$on-surface;
  transition: stroke 250ms ease;
}
</style>
