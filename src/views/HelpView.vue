<template>
  <div class="page">
    <h1>Помощь</h1>
    <div class="icon-set">
      <div
        v-for="icon in iconSet"
        :key="icon"
        class="icon"
      >
        <AppIcon :name="icon"/>
        <span>{{ icon }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppIcon from '@/components/base/AppIcon.vue';
import IconName from '@/constants/enum/IconName';

const iconSet = Object.keys(IconName) as Array<keyof typeof IconName>;
</script>
