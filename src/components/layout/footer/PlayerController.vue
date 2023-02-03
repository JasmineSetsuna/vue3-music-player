<template>
    <div class="player-controller">
      <IconPark
        :icon="
          loopType === 0 ? PlayOnce : loopType === 1 ? LoopOnce : ShuffleOne
        "
        size="20"
        :stroke-width="3"
        class="hover-text"
        @click="toggleLoop"
      />
      <IconPark
        :icon="GoStart"
        size="28"
        theme="filled"
        class="hover-text"
        @click="prev"
      />
      <IconPark
        :icon="isPause ? PauseOne : Play"
        size="45"
        theme="filled"
        class="hover-text"
        @click="togglePlay"
      />
      <IconPark :icon="GoEnd" size="28" class="hover-text" @click="next" />
      <!-- volume control -->
      <el-popover width="50px" placement="top">
        <template #reference>
          <IconPark
            :icon="VolumeSmall"
            size="20"
            :stroke-width="3"
            class="hover-text"
          />
        </template>
        <!-- <div class="player-volume">
          <div>
            <el-slider
              vertical
              height="100px"
              :show-tooltip="false"
              v-model="volume"
              :max="100"
              :min="0"
              size="small"
              :disabled="muted"
              @input="setVolume"
            />
          </div>
          <div class="text-sm">{{ volume }}</div>
          <div class="slience-button">
            <IconPark
              :icon="muted ? VolumeMute : VolumeSmall"
              size="16"
              theme="filled"
              class="hover-text"
              @click="toggleMuted"
            />
          </div>
        </div> -->
      </el-popover>
    </div>
</template>

<script setup lang="ts">
import {
  Play,
  PauseOne,
  LoopOnce,
  ShuffleOne,
  PlayOnce,
  GoEnd,
  GoStart,
  VolumeSmall,
  VolumeMute,
} from "@icon-park/vue-next";
import {toRefs} from 'vue';
import { usePlayerStore } from "@/stores/player";

const {
  loopType,
  toggleLoop,
  isPause,
  next,
  togglePlay,
  prev,
} = toRefs(usePlayerStore());
</script>

<style scoped lang="scss">
.player-controller {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.75rem;
  .i-icon {
    cursor: pointer;
    transition-property: background-color, border-color, color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  .i-icon:nth-child(3) {
    --tw-text-opacity: 1;
    color: rgb(52 211 153 / var(--tw-text-opacity));
  }
  .hover-text {
    text-overflow: ellipsis;
  }
  .hover-text:hover {
    --tw-text-opacity: 1;
    color: rgb(52 211 153 / var(--tw-text-opacity));
  }
  .player-volume {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.5rem;
    .text-sm {
      font-size: 0.875rem;
      line-height: 1.25rem;
      margin-top: 0.75rem;
    }
    .slience-button {
      margin-top: 0.5rem;
    }
    .el-popover.el-popper {
      min-width: auto;
    }
  }
}
</style>