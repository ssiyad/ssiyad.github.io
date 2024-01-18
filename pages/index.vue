<template>
  <div
    class="grid h-screen grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1"
  >
    <div class="relative">
      <img
        src="@/public/images/cover-image.png"
        class="size-full object-cover"
      />
      <div class="absolute bottom-8 left-8">
        <div class="text-2xl font-medium text-white">
          👋 Hello, I'm Sabu Siyad
        </div>
        <div class="text-lg text-gray-200">I love to code, build and break</div>
      </div>
    </div>
    <div
      class="grid grid-cols-2"
      :style="{
        background:
          'linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)',
      }"
    >
      <a
        v-for="link in links"
        :key="link.url"
        :href="link.url"
        target="_blank"
        class="flex size-full justify-center hover:backdrop-brightness-95"
      >
        <span class="flex items-center gap-1 place-self-center">
          <Icon :name="link.icon" />
          <span>{{ link.name }}</span>
        </span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import links from '@/resources/links';

useHead({
  title: 'Home',
});
</script>
