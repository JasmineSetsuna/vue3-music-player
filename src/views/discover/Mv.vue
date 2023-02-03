<template>
  <Title title="推荐Mv"></Title>
  <div class="mv">
    <div
      v-for="item in personalizedMv"
      :key="item.id"
      @click="router.push({ name: 'mvDetail', query: { id: item.id } })"
    >
      <CoverPlay
        :pic-url="item.picUrl"
        video
        :name="item.name"
        :play-count="item.playCount"
        show-play-count
      />
      <div class="name">{{ item.name }}</div>
      <div class="artist">{{ item.artistName }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, toRefs } from "vue";
import Title from "@/components/common/Title.vue";
import { useRouter } from "vue-router";
import CoverPlay from "@/components/common/CoverPlay.vue";
import { useVideoStore } from "@/stores/video";

const { personalizedMv } = toRefs(useVideoStore());
const { getPersonalizedMv } = useVideoStore();
const router = useRouter();

onMounted(async () => {
  await getPersonalizedMv();
});
</script>

<style scoped lang="scss">
.mv {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  overflow: hidden;
  height: 100%;

  div {
    overflow: hidden;
  }
  .name {
    font-size: 0.75rem;
    line-height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 0.5rem;
  }
  .artist {
    font-size: 0.75rem;
    line-height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 0.375rem;
    --tw-text-opacity: 1;
    color: rgb(148 163 184 / var(--tw-text-opacity));
  }
}
@media (min-width: 1024px) {
  .mv {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
