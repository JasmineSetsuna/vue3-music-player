<template>
  <el-drawer
    v-model="showPlayList"
    direction="rtl"
    :with-header="false"
    size="320px"
    custom-class="play-list"
  >
    <div class="play-list-box">
      <div class="header">
        <div class="text-xl">播放列表</div>
        <div class="text-xs">
          <div>共{{ playListCount }}首歌曲</div>
          <div class="text-dc" @click="clearPlayList">
            <IconPark :icon="Delete"></IconPark>
            <span>清空</span>
          </div>
        </div>
      </div>
      <div class="content">
        <el-scrollbar>
          <PlayListSongItem
            v-for="song in playList"
            :key="song.id"
            :song="song"
            :active="song.id === id"
            @dblclick="play(song.id)"
          />
        </el-scrollbar>
      </div>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePlayerStore } from "@/stores/player";
import { Delete } from "@icon-park/vue-next";
import PlayListSongItem from "@/components/layout/playList/PlayListSongItem.vue";

const { showPlayList, playListCount, playList, id } = storeToRefs(
  usePlayerStore()
);
const { play, clearPlayList } = usePlayerStore();
</script>

<style lang="scss">
.play-list {
  .el-drawer__body {
    padding: 0;
  }
}
.play-list-box {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    padding: 0.625rem;
    flex-shrink: 0;
    .text-xl {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    .text-xs {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.75rem;
      line-height: 1rem;
      margin-top: 0.25rem;
      .text-dc {
        display: flex;
        align-items: center;
        cursor: pointer;
        .i-icon {
          padding-top: 0.3125rem;
        }
        span {
          margin-left: 0.125rem;
        }
      }
      .text-dc:hover {
        --tw-text-opacity: 1;
        color: rgb(52 211 153 / var(--tw-text-opacity));
      }
    }
  }
  .content {
    flex: 1 1 0%;
    overflow: hidden;
  }
}
</style>
