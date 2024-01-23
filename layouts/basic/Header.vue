<template>
  <div>
    <div class="flex items-center justify-between">
      <a href="/">
        <img src="/icon-light.svg" class="size-6" />
      </a>
      <div class="flex items-center gap-1">
        <div
          class="flex items-center gap-1"
          v-for="(link, idx) in links"
          :key="link.url"
        >
          <Tooltip :text="link.name">
            <a :href="link.url">
              <Icon :name="link.icon" class="text-xl" />
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
