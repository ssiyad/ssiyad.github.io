<template>
  <div class="px-8 py-4">
    <div class="flex items-center justify-between">
      <a href="/" class="font-mono text-xl font-bold italic">&</a>
      <div class="flex items-center gap-1">
        <div
          class="flex items-center gap-1"
          v-for="(link, idx) in links"
          :key="link.url"
        >
          <Tooltip :text="link.name">
            <a :href="link.url">
              <Icon :name="link.icon" />
            </a>
          </Tooltip>
          <Icon name="lucide:dot" v-if="idx + 1 < links.length" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import links from '@/resources/links';
</script>
