<template>
  <div class="page">
    <h1>Помощь</h1>
    <div class="icon-set">
      <div
        v-for="icon in iconSet"
        :key="icon"
        class="icon"
      >
        <AppIcon :path="icon[1]"/>
        <span class="icon__label">{{ icon[0] }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppIcon from '@/components/base/AppIcon.vue';
import IconPath from '@/constants/enum/IconPath';

const iconSet = Object.entries(IconPath) as Array<[string, IconPath]>;
</script>

<style lang="scss" scoped>
@use "@/sass/fragments/palette";

.page {
  .icon-set {
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 12px;

      &__label {
        margin-top: 6px;
        user-select: text;
      }
    }
  }
}
</style>
