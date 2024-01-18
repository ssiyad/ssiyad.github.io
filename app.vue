<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Sabu Siyad',
});
useSeoMeta({
  title: 'Sabu Siyad',
  ogTitle: 'Sabu Siyad',
  ogDescription: 'I love to code, build and break',
  ogImage: '/images/cover-image.png',
  ogUrl: 'https://ssiyad.com',
});
</script>
