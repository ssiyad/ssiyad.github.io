<template>
  <div
    class="grid h-screen grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1"
  >
    <div class="relative">
      <img src="https://ssiyad.com/photo.png" class="size-full object-cover" />
      <div class="absolute bottom-8 left-8">
        <div class="text-2xl font-medium text-white">
          👋 Hello, I'm Sabu Siyad
        </div>
        <div class="text-lg text-gray-200">I love to code, build and break</div>
      </div>
    </div>
    <div class="grid grid-cols-2">
      <a
        v-for="link in links"
        :key="link.url"
        :href="link.url"
        target="_blank"
        class="flex size-full justify-center hover:bg-gray-100"
      >
        <span class="place-self-center">
          {{ link.name }}
        </span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ssiyad',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ssiyad',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/ssiyad',
  },
  {
    name: 'Spotify',
    url: 'https://ssiyad.com/music',
  },
];
</script>
