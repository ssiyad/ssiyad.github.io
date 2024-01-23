<template>
  <div class="p-4">
    <Header />
    <div class="mt-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue';
</script>
