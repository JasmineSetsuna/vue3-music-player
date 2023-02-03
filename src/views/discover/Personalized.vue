<template>
  <div>
    <Title title="你的专属歌单"></Title>
    <div class="content">
      <div
        v-for="(item, index) in personalized.sampleSize(10)"
        :key="index"
        :class="{ 'item-1': index === 0 }"
        @click="router.push({ name: 'playlist', query: { id: item.id } })"
      >
        <CoverPlay
          :name="item.name"
          :pic-url="item.picUrl"
          :play-count="item.playCount"
          show-play-count
        />
        <div class="text">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import CoverPlay from "@/components/common/CoverPlay.vue";
import Title from '@/components/common/Title.vue';
import { onMounted, toRefs } from "vue";
import { useMusicStore } from "@/stores/music";

const router = useRouter();
const { personalized } = toRefs(useMusicStore());
const { getPersonalized } = useMusicStore();

onMounted(async () => {
  getPersonalized();
});
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  .text {
    --tw-text-opacity: 1;
    color: rgb(51 65 85 / var(--tw-text-opacity));
    font-size: 0.75rem;
    line-height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 0.5rem;
  }
}

@media (min-width: 1024px) {
  .content {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
@media (min-width: 1536px) {
  .content {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
}
</style>
