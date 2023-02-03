<template>
  <div class="player-action">
    <span class="text-xs">
      {{ useFormatDuring(currentTime) }} / {{ useFormatDuring(duration) }}
    </span>
    <IconPark
      :icon="TextMessage"
      size="18"
      :stroke-width="3"
      class="hover-text"
      title="歌词"
    />
    <div class="player-list" @click="showPlayList = true">
      <IconPark
        :icon="MusicList"
        size="18"
        :stroke-width="3"
        class="hover-text"
        title="播放列表"
      />
      <span class="text-xs">{{ playListCount }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import { MusicList, TextMessage } from "@icon-park/vue-next";
import { usePlayerStore } from "@/stores/player";
import { useFormatDuring } from "@/utils/number";

const { currentTime, duration, showPlayList, playListCount } = storeToRefs(usePlayerStore());
</script>

<style scoped lang="scss">
.player-action {
  display: flex;
  justify-content: end;
  align-items: center;
  column-gap: 0.75rem;
  .hover-text {
    cursor: pointer;
    text-overflow: ellipsis;
  }
  .hover-text:hover {
    --tw-text-opacity: 1;
    color: rgb(52 211 153 / var(--tw-text-opacity));
  }
  .text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
    padding-bottom: 0.3rem;
  }
}
.player-list {
  display: flex;
  align-items: center;
  .hover-text {
    cursor: pointer;
    text-overflow: ellipsis;
  }
  .hover-text:hover {
    --tw-text-opacity: 1;
    color: rgb(52 211 153 / var(--tw-text-opacity));
  }
  .text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
    padding-bottom: 0.3rem;
  }
}
</style>