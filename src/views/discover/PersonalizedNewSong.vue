<template>
  <Title title="推荐新音乐"></Title>
  <div class="content">
    <div
      v-for="(item, index) in personalizedNewSong"
      :key="index"
      class="items"
      @click="throttlePlay(item.id)"
    >
      <img v-lazyImg="item.picUrl" alt="" /> 
      <div class="text">
        <div class="name">{{ item.name }}</div>
        <div class="artist">{{ item.song.artists[0].name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from "@/components/common/Title.vue";
import { onMounted, toRefs } from "vue";
import { usePlayerStore } from "@/stores/player";
import { useMusicStore } from "@/stores/music";
import { throttle } from '../../stores/common';

const { play } = usePlayerStore();
const { personalizedNewSong } = toRefs(useMusicStore());
const { getPersonalizedNewSong } = useMusicStore();

onMounted(async () => {
  await getPersonalizedNewSong();
});

const throttlePlay = throttle(play, 1000);

</script>

<style scoped lang="scss">
.content {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 0.625rem;
  row-gap: 1.25rem;
  cursor: pointer;
  .items {
    display: flex;
    align-items: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    img {
      width: 3rem;
      height: 3rem;
      flex-shrink: 0;
      -o-object-fit: cover;
      object-fit: cover;
      border-radius: 0.25rem;
    }
    .text {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      width: 33.333333%;
      padding: 0;
      font-size: 0.75rem;
      line-height: 1rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      text-align: start;
      .name {
        font-size: 0.75rem;
        line-height: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        flex: 1 1 0%;
      }
      .artist {
        --tw-text-opacity: 1;
        color: rgb(148 163 184 / var(--tw-text-opacity));
        margin-top: 0.375rem;
      }
    }
  }
  .items:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(245 245 244 / var(--tw-bg-opacity));
  }
}

@media (min-width: 1536px) {
  .content {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
</style>
