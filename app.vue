<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useFavicon('/svg/logo.svg');
useSeoMeta({
  ogTitle: 'Sabu Siyad',
  ogUrl: 'https://ssiyad.com',
  titleTemplate: '%s | Sabu Siyad',
});
</script>
