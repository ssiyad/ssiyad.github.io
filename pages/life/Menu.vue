<template>
  <div
    class="absolute inset-8 flex size-max items-center gap-1 rounded bg-blue-100 p-4 shadow"
  >
    <a class="flex items-center gap-1" href="/">
      <Icon name="lucide:home" />
      <span>Home</span>
    </a>
    <Icon name="lucide:dot" />
    <a
      class="flex items-center gap-1"
      href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
      target="_blank"
    >
      <Icon name="lucide:info" />
      <span>Info</span>
    </a>
    <Icon name="lucide:dot" />
    <div
      class="flex cursor-pointer items-center gap-1"
      @click="() => (isPaused = !isPaused)"
    >
      <Icon name="lucide:play" v-if="isPaused" />
      <Icon name="lucide:pause" v-else />
      <span>
        {{ isPaused ? 'Resume' : 'Pause' }}
      </span>
    </div>
    <Icon name="lucide:dot" />
    <div
      class="flex cursor-pointer items-center gap-1"
      @click="() => census.forEach((_, i) => (census[i] = false))"
    >
      <Icon name="lucide:refresh-ccw" />
      <span>Reset</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { census, isPaused } from './data';
</script>
