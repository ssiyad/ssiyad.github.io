<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useFavicon('/svg/logo.svg');

useSeoMeta({
  ogTitle: 'Sabu Siyad',
  ogUrl: 'https://ssiyad.com',
});
</script>
