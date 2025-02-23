<template>
  <iframe
    :src="url"
    class="h-96 w-full rounded-md"
    title="YouTube video player"
    referrerpolicy="strict-origin-when-cross-origin"
  />
</template>

<script setup lang="ts">
const { videoId, startAt } = defineProps({
  videoId: {
    type: String,
    required: true,
  },
  startAt: {
    type: Number,
    default: 0,
  },
});

const url = computed(() => {
  return `https://www.youtube.com/embed/${videoId}?start=${startAt}`;
});
</script>
