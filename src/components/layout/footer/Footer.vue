<template>
  <div class="player-slider">
    <el-slider
      :show-tooltip="false"
      :min="0"
      v-model="currentTime"
      :max="duration"
    ></el-slider>
  </div>
  <div class="player">
    <!-- show img、detail... about the song -->
    <PlayerSong></PlayerSong>
    <!-- contrl the song -->
    <PlayerController></PlayerController>
    <!-- show lyrics and the time of the song -->

    <PlayerAction></PlayerAction>
  </div>
</template>
<script setup lang="ts">
import PlayerSong from "@/components/layout/footer/PlayerSong.vue";
import PlayerController from "@/components/layout/footer/PlayerController.vue";
import PlayerAction from "./PlayerAction.vue";
import { usePlayerStore } from "@/stores/player";
import { toRefs } from "vue";

const { currentTime, duration } = toRefs(usePlayerStore());
</script>

<style lang="scss">
.player-slider {
  .el-slider {
    height: 10px;
    --el-slider-main-bg-color: #34d399;

    .el-slider__runway,
    .el-slider__bar {
      height: 2px;
      border-radius: 0;
    }
    .el-slider__bar {
      background-color: #34d399;
    }
    .el-slider__button-wrapper {
      width: 10px;
      height: 10px;
      top: -10.5px;
      opacity: 0;
      transition-property: opacity;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    &:hover {
      .el-slider__button-wrapper {
        opacity: 1;
      }
    }

    .el-slider__button {
      width: 8px;
      height: 8px;
    }
  }
}

.player {
  display: flex;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  align-items: center;
  height: 100%;
  .player-song,
  .player-controller,
  .player-action {
    flex: 1;
    display: flex;
  }
}

.player-song {
  .text-main {
    display: flex;
    column-gap: 0.75rem;
    --tw-text-opacity: 1;
    color: rgb(148 163 184 / var(--tw-text-opacity));
    .badge {
      .el-badge__content {
        left: 0.25rem;
        top: -0.5rem;
        right: auto;
        --tw-scale-x: 0.75;
        --tw-scale-y: 0.75;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
        background-color: rgb(245 245 244 / var(--tw-bg-opacity));
        --tw-bg-opacity: 0.8;
        --tw-text-opacity: 1;
        color: rgb(100 116 139 / var(--tw-text-opacity));
      }
    }
  }
}
</style>
