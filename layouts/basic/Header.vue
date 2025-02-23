<template>
  <header class="flex items-center justify-between p-4">
    <a href="/">
      <Logo class="size-8" />
    </a>
    <div class="flex flex-wrap items-center gap-1">
      <div
        v-for="(link, idx) in links"
        :key="link.url"
        class="flex items-center gap-1"
      >
        <a
          class="text-sm text-neutral-700 underline-offset-4 hover:underline dark:invert"
          :href="link.url"
          :target="link.external ? '_blank' : '_self'"
        >
          {{ link.name }}
        </a>
        <Icon
          v-if="idx + 1 < links.length"
          name="lucide:dot"
          class="dark:invert"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import links from '@/resources/links';
</script>
