<template>
  <div class="flex items-center gap-2">
    <a href="/">
      <Logo class="size-8 dark:invert" />
    </a>
    <template v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.text">
      <Icon name="lucide:slash" class="dark:invert" />
      <a
        :href="breadcrumb.path"
        class="font-medium dark:invert"
        :class="{
          'text-neutral-600': index < breadcrumbs.length - 1,
        }"
      >
        {{ breadcrumb.text }}
      </a>
    </template>
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
