<template>
  <div
    class="cover-play-image"
    :class="{ 'aspect-square': !video, 'aspect-video': video }"
  >
    <!-- <el-image :src="picUrl" :alt="name"></el-image> -->
    <img v-lazyImg="picUrl" alt="name" />
    <div class="mask">
      <IconPark :icon="PlayOne" theme="filled" class="play-icon" :size="50" />
    </div>
    <div class="play-count" v-if="showPlayCount">
      <IconPark :icon="video ? Play : Headset" class="mr-1" :size="12" />
      <text>{{ useNumberFormat(playCount || 0) }} </text>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlayOne, Play, Headset } from "@icon-park/vue-next";
import IconPark from "@/components/common/IconPark.vue";
import { useNumberFormat } from "@/utils/number";

defineProps<{
  picUrl: string;
  playCount?: number;
  name?: string;
  showPlayCount?: boolean;
  onPlay?: () => void;
  video?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cover-play-image {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 0.5rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  img {
    position: relative;
    display: inline-block;
    overflow: hidden;
    width: 100%;
    --tw-bg-opacity: 1;
    background-color: rgb(249 250 251 / var(--tw-bg-opacity));
    -o-object-fit: cover;
    object-fit: cover;
  }
  .mask {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    overflow: hidden;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity));
    --tw-bg-opacity: 0;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
    .i-icon {
      transition-property: opacity;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      opacity: 0;
      --tw-text-opacity: 1;
      color: rgb(255 255 255 / var(--tw-text-opacity));
    }
  }
  .play-count {
    position: absolute;
    bottom: 0.25rem;
    right: 0.25rem;
    display: flex;
    --tw-scale-x: 0.9;
    --tw-scale-y: 0.9;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    align-items: center;
    border-radius: 9999px;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity));
    --tw-bg-opacity: 0.8;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
    font-size: 0.75rem;
    line-height: 1rem;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    .i-icon {
      margin-right: 0.25rem;
    }
    text {
      padding-bottom: 0.125rem;
    }
  }
  &:hover {
    .mask {
      --tw-bg-opacity: 0.5;
    }
    .play-icon {
      opacity: 1;
    }
    .play-count {
      opacity: 0;
    }
  }
}

.el-image {
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
  -o-object-fit: cover;
  object-fit: cover;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
</style>
