<template>
  <Swiper
    slides-per-group-auto
    slides-per-view="auto"
    :navigation="true"
    :grab-cursor="true"
  >
    <SwiperSlide v-for="item in banners" :key="item.bannerId">
      <img :src="item.pic" class="banner-image" @click="throttleClick(item)" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import { onMounted, toRefs } from "vue";
import type { Banner } from "@/interface/banner";
import { useCommonStore } from "@/stores/common";
import { usePlayerStore } from "@/stores/player";
import { throttle } from "@/stores/common";

const { banners } = toRefs(useCommonStore());
const { getBanners } = useCommonStore();
onMounted(async () => {
  await getBanners();
});

const { play } = usePlayerStore();

const onClick = (banner: Banner) => {  
  if (banner.targetType === 1) {
    play(banner.targetId);
  }
};

const throttleClick = throttle(onClick, 1000);
</script>

<style lang="scss" scoped>
.swiper {
  margin: 0;
  width: 100%;
  height: 100%;
  .swiper-slide {
    width: 100%;
    padding-right: 0.625rem;
  }
  .banner-image {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    cursor: pointer;
    -o-object-fit: cover;
    object-fit: cover;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  .banner-image:hover {
    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    opacity: 0.8;
  }
}

@media (min-width: 1024px) {
  .swiper .swiper-slide {
    width: 50%;
  }
}

@media (min-width: 1280px) {
  .swiper .swiper-slide {
    width: 33.333333%;
  }
}

@media (min-width: 1536px) {
  .swiper .swiper-slide {
    width: 25%;
  }
}
</style>
