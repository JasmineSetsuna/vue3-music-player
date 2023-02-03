<template>
  <!-- play list items -->
  <div class="items-box" :class="{ active: active }">
    <el-image lazy :src="song.al?.picUrl + '?param=80y80'"> </el-image>
    <div class="item">
      <div class="item-name-artist">
        <div class="item-name">
          <div>{{ song.name }}</div>
          <IconPark
            v-if="song.mv > 0"
            size="16"
            :icon="Youtube"
            @click="router.push({ query: { id: song.mv } })"
          />
        </div>
        <div class="item-aritst">{{ song.ar.first().name }}</div>
      </div>
      <div class="item-time">
        <div>
          <small>{{ useFormatDuring(song.dt / 1000) }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Youtube } from "@icon-park/vue-next";
import { useRouter } from "vue-router";
import type { Song } from "@/interface/song";
import { useFormatDuring } from "@/utils/number";

const router = useRouter();
defineProps<{
  song: Song;
  active: boolean;
}>();
</script>

<style scoped lang="scss">
.items-box {
  display: flex;
  padding: 0.625rem;
  border-bottom-width: 1px;
  border-bottom-color: rgb(250 250 249);
  .el-image {
    flex-shrink: 0;
    width: 2.5rem;
    aspect-ratio: 1/1;
  }
  .item {
    display: flex;
    flex: 1 1 0%;
    width: 0.25rem;
    height: 2.5rem;
    font-size: 0.75rem;
    line-height: 1rem;
    margin-left: 0.5rem;
    .item-name-artist {
      display: flex;
      flex: 1 1 0%;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .item-name {
        display: flex;
        div {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        i-icon {
          cursor: pointer;
          --tw-text-opacity: 1;
          color: rgb(251 146 60 / var(--tw-text-opacity));
          margin-left: 0.5rem;
        }
      }
      .item-artist {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .item-time {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-shrink: 0;
      margin-left: 1.25rem;
      div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
.items-box:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 244 / var(--tw-bg-opacity));
}
</style>
