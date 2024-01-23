<template>
  <main>
    <ContentList path="/blog" v-slot="{ list }">
      <div class="m-auto my-4 max-w-prose space-y-2">
        <div
          v-for="article in list"
          :key="article._path"
          class="cursor-pointer bg-gray-100 p-4 hover:bg-gray-200"
        >
          <a :href="article._path">
            <div class="font-medium">
              {{ article.title }}
            </div>
            <div class="mt-2 text-slate-700">
              {{ article.description }}
            </div>
          </a>
        </div>
      </div>
    </ContentList>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog',
});
definePageMeta({
  layout: 'default',
});
</script>
