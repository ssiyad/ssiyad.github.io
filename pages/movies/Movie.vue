<template>
  <div class="relative">
    <img :src="image" :alt="title" class="size-full object-cover" />
    <div
      class="absolute bottom-0 w-full p-2 backdrop-blur backdrop-brightness-75"
    >
      <div class="flex gap-1">
        <span v-for="i in rating" :key="i">⭐</span>
      </div>
      <div class="flex gap-1 text-white">
        <span class="truncate">
          {{ title }}
        </span>
        <span> ({{ year }}) </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});
</script>
