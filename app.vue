<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Sabu Siyad',
  ogDescription: 'I love to code, build and break',
  ogImage: '/images/cover-image.png',
  ogUrl: 'https://ssiyad.com',
  titleTemplate: '%s | Sabu Siyad',
});
</script>
