<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <div class="grow p-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue';
</script>
