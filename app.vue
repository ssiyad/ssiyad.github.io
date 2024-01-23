<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useFavicon(() =>
  usePreferredDark().value ? '/icon-dark.svg' : '/icon-light.svg',
);
useSeoMeta({
  ogTitle: 'Sabu Siyad',
  ogUrl: 'https://ssiyad.com',
  titleTemplate: '%s | Sabu Siyad',
});
</script>
