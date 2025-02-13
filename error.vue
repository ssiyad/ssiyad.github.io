<template>
  <div class="size-screen flex items-center justify-center">
    <div class="prose-custom">
      <div class="font-medium">{{ error.statusCode }} {{ error.message }}</div>
      <div v-if="error.stack" v-html="error.stack" />
      <a href="/">Go back home</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps({
  error: {
    type: Object as () => NuxtError,
    required: true,
  },
});
</script>
