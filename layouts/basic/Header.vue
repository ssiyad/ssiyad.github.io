<template>
  <div class="mx-auto border-b pb-4">
    <div
      v-if="$route.path !== '/'"
      class="mx-auto mb-4 w-max lg:fixed lg:left-6 lg:top-6"
    >
      <a href="/">
        <Logo />
      </a>
    </div>
    <div class="flex flex-wrap items-center gap-1">
      <div
        v-for="(link, idx) in links"
        :key="link.url"
        class="flex items-center gap-1"
      >
        <a
          :href="link.url"
          class="text-sm text-neutral-700 underline-offset-4 hover:underline dark:invert"
        >
          {{ link.name }}
        </a>
        <Icon v-if="idx + 1 < links.length" name="lucide:dot" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import links from '@/resources/links';
</script>
