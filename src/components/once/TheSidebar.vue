<template>
  <aside class="the-sidebar">
    <!-- селектор организаций -->
    <TheCompanySelector/>
    <!-- навигация -->
    <div class="navigation">
      <!-- верхний список -->
      <nav class="navigation-sector">
        <router-link
          v-for="route in topNavigationRoutes"
          :key="route.label"
          :to="route.path"
          class="navigation-item"
        >
          <AppIcon
            :path="route.icon"
            class="navigation-item__icon"
          />
          <span class="navigation-item__label">{{ route.label }}</span>
        </router-link>
      </nav>
      <!-- нижний список -->
      <nav class="navigation-sector">
        <router-link
          v-for="route in bottomNavigationRoutes"
          :key="route.label"
          :to="route.path"
          class="navigation-item"
        >
          <AppIcon
            :path="route.icon"
            class="navigation-item__icon"
          />
          <span class="navigation-item__label">{{ route.label }}</span>
        </router-link>
      </nav>
    </div>
    <!-- селектор аккаунтов -->
    <TheAccountSelector/>
  </aside>
</template>

<script lang="ts" setup>
import TheCompanySelector from '@/components/once/TheCompanySelector.vue';
import TheAccountSelector from '@/components/once/TheAccountSelector.vue';
import IconPath from '@/constants/enum/IconPath';
import RouteInterface from '@/interfaces/RouteInterface';
import AppIcon from '@/components/base/AppIcon.vue';

const topNavigationRoutes: Array<RouteInterface> = [
  {
    path: '/',
    label: 'Сводка',
    icon: IconPath.INSTAGRAM,
  },
  {
    path: '/product',
    label: 'Товары',
    icon: IconPath.INSTAGRAM,
  },
  {
    path: '/sell',
    label: 'Продажи',
    icon: IconPath.INSTAGRAM,
  },
  {
    path: '/sell',
    label: 'Поставки',
    icon: IconPath.INSTAGRAM,
  },
  {
    path: '/sell',
    label: 'Склад',
    icon: IconPath.INSTAGRAM,
  },
];

const bottomNavigationRoutes: Array<RouteInterface> = [
  {
    path: '/help',
    label: 'Помощь',
    icon: IconPath.INSTAGRAM,
  },
  {
    path: '/help',
    label: 'Настройки',
    icon: IconPath.INSTAGRAM,
  },
];
</script>

<style lang="scss" scoped>
@use "@/sass/fragments/palette";
@use "@/sass/fragments/font";

.the-sidebar {
  display: flex;
  grid-area: sidebar;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: palette.$surface;

  .navigation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin: 20px 0;

    .navigation-sector {
      .navigation-item {
        $navigation-item: &;
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 8px;
        border-radius: 4px;

        &:hover {
          background-color: #ecf0f4;

          .navigation-item__icon { stroke: palette.$on-surface-dark; }
        }

        &.router-link-exact-active {
          background-color: palette.$background;

          .navigation-item__icon { stroke: palette.$on-surface-dark; }

          .navigation-item__label { color: palette.$on-surface-dark; }
        }

        &__icon { stroke: palette.$on-surface-light; }

        &__label {
          font-weight: font.$weight-l;
          color: palette.$on-surface;
          margin-left: 12px;
        }
      }
    }
  }
}
</style>
