<template>
  <div class="bg-blue-50 p-4">
    <div class="m-auto max-w-prose">
      <div class="grid grid-cols-4 space-y-1">
        <a
          v-for="link in links"
          :key="link.url"
          :href="link.url"
          target="_blank"
        >
          <span class="flex items-center gap-1">
            <Icon :name="link.icon" />
            <span>{{ link.name }}</span>
          </span>
        </a>
      </div>
      <span class="mt-4 flex items-center gap-1">
        <Icon name="uil:copyright" />
        <span class="font-medium">Sabu Siyad</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import links from '@/resources/links';
</script>
