<template>
  <div class="menus-bgc">
    <ElScrollbar>
      <div class="menus" v-for="menuItem in menus">
        <div class="menu-title">{{ menuItem.name }}</div>
        <div
          class="menu-item"
          v-for="menu in menuItem.menus"
          :key="menu.key"
          :class="{ 'active': currentKey === menu.key }"
          @click="click(menu)"
        >
          <IconPark :icon="menu.icon" size="18" :theme="menu.theme" />
          <span class="menu-content">{{ menu.name }}</span>
        </div>
      </div>
    </ElScrollbar>
  </div>
</template>

<script setup lang="ts">
import { useMenu } from "@/components/layout/menu/useMenu";
import IconPark from "@/components/common/IconPark.vue";

const { menus, currentKey, click } = useMenu();
</script>

<style lang="scss" scoped>
.menus-bgc {
  display: flex;
  flex-direction: column;
  background: rgba($color: #f9fafb, $alpha: 0.7);
  height: 100vh;
}
.menus {
  margin-top: 2.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.menu-title {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: left;
}
.menu-item {
  cursor: pointer;
  --tw-space-y-reverse: 0;
  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.menu-item:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}
.active {
  cursor: default;
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #2dd4bf;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgb(45 212 191 / 0));
  --tw-gradient-to: #34d399;
  --tw-text-opacity: 1;
  color: rgb(248 250 252 / var(--tw-text-opacity));
}
.menu-content {
  margin-left: 0.25rem;
}
</style>
