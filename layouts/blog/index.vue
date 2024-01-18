<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <div class="grow">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>
