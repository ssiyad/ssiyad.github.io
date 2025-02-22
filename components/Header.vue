<template>
  <header class="flex items-center justify-between p-4">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <Links />
  </header>
</template>

<script setup lang="ts">
defineProps({
  breadcrumbs: {
    type: Array as PropType<
      {
        text: string;
        path?: string;
      }[]
    >,
    default: () => [],
  },
});
</script>
