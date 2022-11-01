<template>
  <svg
    class="icon"
    viewBox="0 0 24 24"
    :height="sizeNumber"
    :width="sizeNumber"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-html="IconPath[name]"
  >
  </svg>
</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from 'vue';
import IconPath from '@/constants/enum/IconPath';
import SizeName from '@/constants/enum/SizeName';

const props = withDefaults(
  defineProps<{
    name: keyof typeof IconPath;
    size?: keyof typeof SizeName;
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

.icon { stroke: palette.$on-surface; }
</style>
