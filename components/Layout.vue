<template>
  <div>
    <Header :breadcrumbs="breadcrumbs" />
    <div class="mx-auto max-w-prose p-4">
      <slot />
    </div>
  </div>
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
