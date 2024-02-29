<template>
  <div class="mx-auto max-w-prose p-4">
    <Header />
    <div class="my-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue';
</script>
