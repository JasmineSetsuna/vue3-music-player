<template>
  <div class="title">
    <div>{{ title }}</div>
    <IconPark :icon="Right" size="25" :stroke-width="2" />
  </div>
</template>

<script setup lang="ts">
import { Right } from "@icon-park/vue-next";
import IconPark from "@/components/common/IconPark.vue";

defineProps<{
  title: string;
}>();
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  align-items: center;
  margin-top: 0.5rem;
  .i-icon {
    height: 25px;
  }
}
</style>
