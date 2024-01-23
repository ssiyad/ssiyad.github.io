<template>
  <div>
    <Header />
    <div class="grow">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue';
</script>
