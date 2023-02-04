<template>
  <div class="player-song">
    <img :src="song.al?.picUrl || playersonginit" alt="" />
    <div class="text-xs">
      <div class="text-header">
        <div class="free-trial" v-if="songUrl.freeTrialInfo?.end > 0">试听</div>
        <span>{{ song.name||"开源云音乐" }}</span>
        <span>-{{ song.ar?.first().name||"Jasmine" }}</span>
      </div>
      <div class="text-main">
        <IconPark :icon="Like" size="18" :stroke-width="3" />
        <IconPark :icon="DownTwo" size="18" :stroke-width="3" />
        <IconPark :icon="MoreTwo" size="18" :stroke-width="3" />
        <el-badge :value="1000" :max="999" class="badge">
          <IconPark
            :icon="Comment"
            size="18"
            :stroke-width="3"
            class="text-slate-400 hover-text"
          />
        </el-badge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { playersonginit } from "@/assets/img";
import { usePlayerStore } from "@/stores/player";
import { toRefs } from "vue";
import { Like, DownTwo, MoreTwo, Comment } from "@icon-park/vue-next";

const { song, songUrl } = toRefs(usePlayerStore());

</script>

<style lang="scss" scoped>
.player-song {
  margin-bottom: 0.625rem;
  img {
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 0.25rem;
  }
  .text-xs {
    display: flex;
    margin-left: 0.5rem;
    flex-direction: column;
    justify-content: space-between;

    .text-header {
      display: flex;
      width: 13rem;
      cursor: pointer;
      text-overflow: ellipsis;
      padding-bottom: 0.625rem;
      .free-trial {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
        font-size: 0.75rem;
        line-height: 1rem;
        padding-left: 0.125rem;
        padding-right: 0.25rem;
        --tw-bg-opacity: 1;
        background-color: rgb(239 68 68 / var(--tw-bg-opacity));
        border-radius: 0.25rem;
        --tw-scale-x: 0.75;
        --tw-scale-y: 0.75;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
    }
    .text-header span {
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
}
</style>
