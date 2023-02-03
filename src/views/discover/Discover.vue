<template>
  <div>
    <h1>推荐</h1>
    <Banner></Banner>
    <Personalized></Personalized>
    <PersonalizedNewSongVue></PersonalizedNewSongVue>
    <Mv></Mv>
  </div>
</template>

<script setup lang="ts">
import Banner from "@/components/common/Banner.vue";
import Personalized from "@/views/discover/Personalized.vue"
import PersonalizedNewSongVue from "./PersonalizedNewSong.vue";
import Mv from "./Mv.vue";
</script>

<style scoped lang="scss">
div:first-child {
  padding: 1.25rem;
  margin: 0;
  h1 {
    padding-bottom: 1rem;
    margin: 0;
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    text-align: start;
  }
}
</style>
