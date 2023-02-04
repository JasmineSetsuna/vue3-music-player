<template>
  <!-- 整体分为左右两个盒子,左盒子放菜单栏，右盒子头部、主要内容，底部三个播放-->
  <div class="main-box">
    <div class="left">
      <Menu></Menu>
    </div>
    <div class="right">
      <div class="header">
        <Header></Header>
      </div>
      <div class="main-content">
        <ElScrollbar>
          <div class="container">
            <RouterView />
          </div>
        </ElScrollbar>
      </div>
      <div class="footer">
        <Footer></Footer>
      </div>
    </div>
    <PlayList></PlayList>
  </div>
</template>

<script setup lang="ts">
import Menu from "./components/layout/menu/Menu.vue";
import Header from "./components/layout/header/Header.vue";
import Footer from "./components/layout/footer/Footer.vue";
import PlayList from "./components/layout/playList/PlayList.vue";
import { userPlayerInit } from "@/stores/player";

userPlayerInit();
</script>

<style scoped lang="scss">
.main-box {
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: stretch;
  overflow: hidden;
}

.left {
  width: 14rem;
  height: 100vh;
  flex-shrink: 0;
  background-color: #f9fafb;
}

.right {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  .header {
    height: 3.5rem;
  }
  .main-content {
    flex: 1 1 0%;
    overflow: hidden;
    .container {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .footer {
    height: 5rem;
  }
}
</style>
