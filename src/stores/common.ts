import { defineStore } from "pinia";
import { ref } from "vue";
import type { Banner } from "@/interface/banner";
import { useBanner } from "@/utils/api";

export const useCommonStore = defineStore("common", () => {
  const banners = ref<Banner[]>([]);

  const getBanners = async () => {
    if (banners.value.length) return;
    banners.value = await useBanner();
  };

  return {
    banners,
    getBanners,
  };
});

export function debounce(fn: Function, delay: number) {
  let timeId: number | null;
  return function(this:any,...args:any) {
    console.log(timeId);
    if (timeId) clearTimeout(timeId);
    timeId = window.setTimeout(() => {
      timeId = null;
      fn.apply(this, args);
    }, delay);
  };
}

export function throttle(fn: Function, delay: number) {
  let flag = true;
  const interval = delay || 500;
  return function (this: any, ...args: any) {
    if (flag) {
      fn.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, interval);
    }
  };
}