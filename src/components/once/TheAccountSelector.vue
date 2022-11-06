<template>
  <div class="the-account-selector">
    <img
      :src="user.picture"
      alt="Account avatar"
      class="the-account-selector__avatar"
    >
    <span class="the-account-selector__name">{{ user.given_name }} {{ user.family_name }}</span>
    <span class="the-account-selector__label">{{ user.email }}</span>
    <AppIcon
      :path="IconPath.ARROW_BOTTOM"
      :size="SizeName.SMALL"
      class="the-account-selector__icon"
    />
  </div>
</template>

<script lang="ts" setup>
import AppIcon from '@/components/base/AppIcon.vue';
import IconPath from '@/constants/enum/IconPath';
import SizeName from '@/constants/enum/SizeName';
import { useAuth0 } from '@auth0/auth0-vue';

const { user } = useAuth0();
</script>

<style lang="scss" scoped>
@use "@/sass/fragments/font";
@use "@/sass/fragments/palette";

.the-account-selector {
  display: grid;
  grid-template-columns: 40px auto 16px;
  grid-template-areas:
    "avatar name icon"
    "avatar label icon";
  column-gap: 12px;

  &__avatar {
    grid-area: avatar;
    border-radius: 4px;
    width: 40px;
    height: 40px;
    object-fit: cover;
  }

  &__name {
    grid-area: name;
    align-self: center;
    font-weight: font.$weight-l;
    color: palette.$on-surface-dark;
  }

  &__label {
    grid-area: label;
    align-self: center;
    font-size: font.$size-s;
    font-weight: font.$weight-l;
    color: palette.$on-surface-light;
  }

  &__icon {
    grid-area: icon;
    align-self: center;
    stroke: palette.$on-surface-light;
  }
}
</style>
