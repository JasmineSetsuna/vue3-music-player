<template>
  <div class="header-content">
    <div class="left">
      <IconPark
        :icon="Left"
        :size="iconSize"
        :stroke-width="2"
        class="icon-button"
        @click="router.back()"
      />
      <IconPark
        :icon="Right"
        :size="iconSize"
        :stroke-width="2"
        class="icon-button"
      />
      <div class="search">
        <el-popover popper-style="max-width:auto;padding:0;" width="250px">
          <template #reference>
            <ElInput
              placeholder="搜索音乐、MV、歌单"
              :prefix-icon="Search"
              v-model="searchKeyword"
              clearable
            ></ElInput>
          </template>
        </el-popover>
      </div>
    </div>
    <div class="right">
      <UserInfo></UserInfo>
      <IconPark :icon="Mail" :stroke-width="2" class="icon-button" />
      <IconPark
        :icon="Platte"
        :stroke-width="2"
        class="icon-button"
        @click="changeThemeMode"
      />
      <IconPark :icon="HamburgerButton" :stroke-width="2" class="icon-button" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  HamburgerButton,
  Left,
  Mail,
  Platte,
  Right,
  Search,
  Lock,
  Phone,
} from "@icon-park/vue-next";
import { ref } from "vue";
import { useRouter } from "vue-router";
import IconPark from "@/components/common/IconPark.vue";
import UserInfo from "./UserInfo.vue";

const router = useRouter();
const mode = ref(false);
const iconSize = 22;
const searchKeyword = ref("");

const changeThemeMode = () => {
  window.document.documentElement.setAttribute(
    "data-theme",
    mode.value ? "dark" : "light"
  );
  mode.value = !mode.value;
};



</script>

<style lang="scss" scoped>
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
  overflow: hidden;
}
.left {
  display: flex;
  align-items: center;
  padding-left: 1.25rem;
  .search {
    border-radius: 9999px;
    margin-top: -0.3125rem;
    margin-left: 0.5rem;
    --tw-bg-opacity: 1;
    background-color: rgb(241 245 249 / var(--tw-bg-opacity));
    font-size: 0.75rem;
    line-height: 1rem;
    height: 24px;
    .el-input {
      height: 1.5rem;
      border-radius: 9999px;
      font-size: 0.75rem;
    }
    .el-input_inner {
      border-radius: 9999px;
      --tw-bg-opacity: 1;
      background-color: rgb(241 245 249 / var(--tw-bg-opacity));
      font-size: 0.75rem;
      line-height: 1rem;
    }
    .el-input_inner:focus {
      outline: 0;
      box-shadow: 0 0 0 1px var(--el-input-focus-border-color) inset;
    }
  }
}
.right {
  display: flex;
  align-items: center;
  margin-right: 1.25rem;
}
.icon-button {
  cursor: pointer;
  padding: 0.5rem;
}
.icon-button:hover {
  --tw-text-opacity: 1;
  color: rgb(52 211 153 / var(--tw-text-opacity));
}
</style>
