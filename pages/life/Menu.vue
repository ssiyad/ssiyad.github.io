<template>
  <div
    class="absolute inset-8 flex size-max items-center gap-1 rounded bg-blue-100 p-4 shadow dark:bg-indigo-900 dark:text-white"
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
      @click="() => (data.isPaused = !data.isPaused)"
    >
      <Icon name="lucide:play" v-if="data.isPaused" />
      <Icon name="lucide:pause" v-else />
      <span>
        {{ data.isPaused ? 'Resume' : 'Pause' }}
      </span>
    </div>
    <Icon name="lucide:dot" />
    <div
      class="flex cursor-pointer items-center gap-1"
      @click="() => data.census.forEach((_, i) => (data.census[i] = false))"
    >
      <Icon name="lucide:refresh-ccw" />
      <span>Reset</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import data from './data';
</script>
