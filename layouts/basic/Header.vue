<template>
  <div class="p-4">
    <div class="flex items-center justify-between">
      <a href="/">
        <Logo />
      </a>
      <div class="flex items-center gap-1">
        <div
          v-for="(link, idx) in links"
          :key="link.url"
          class="flex items-center gap-1"
        >
          <Tooltip :text="link.name">
            <a :href="link.url">
              <Icon :name="link.icon" class="text-xl" />
            </a>
          </Tooltip>
          <Icon v-if="idx + 1 < links.length" name="lucide:dot" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import links from '@/resources/links';
</script>
