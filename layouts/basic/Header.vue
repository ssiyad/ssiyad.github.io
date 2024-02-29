<template>
  <div class="mx-auto w-max border-b pb-4">
    <div class="mx-auto mb-4 w-max">
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
          class="text-sm text-gray-700 underline-offset-4 hover:underline"
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
