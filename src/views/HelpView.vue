<template>
  <div class="page">
    <h1>Помощь</h1>
    <div class="icon-set">
      <div
        v-for="icon in iconSet"
        :key="icon"
        class="icon"
      >
        <AppIcon :path="icon"/>
        <span>{{ icon }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppIcon from '@/components/base/AppIcon.vue';
import IconPath from '@/constants/enum/IconPath';

const iconSet = Object.keys(IconPath) as Array<IconPath>;
</script>
