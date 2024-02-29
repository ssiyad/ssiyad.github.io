<template>
  <main>
    <ContentList v-slot="{ list }" path="/blog">
      <ul class="prose-custom mx-auto my-4 list-outside list-disc space-y-4">
        <li v-for="item in list" :key="item._path">
          <a class="font-medium underline" :href="item._path">
            {{ item.title }}
          </a>
          <div>{{ item.description }}</div>
        </li>
      </ul>
    </ContentList>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog',
});
definePageMeta({
  layout: 'basic',
});
</script>
