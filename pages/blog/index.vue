<template>
  <main>
    <div class="prose-custom mx-auto max-w-prose p-4">
      <h1>
        <a :href="route.path"> Blog </a>
      </h1>
      <div v-for="post in posts" :key="post.id">
        <h2>
          <a :href="post.path">
            {{ post.title }}
          </a>
        </h2>
        <div class="line-clamp-3">{{ post.description }}</div>
        <div class="text-sm text-neutral-500">
          {{ formatDate(post.date, 'do MMMM, uuuu') }}
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { compareDesc as compareDescDate, format as formatDate } from 'date-fns';

useHead({
  title: 'Blog',
});

definePageMeta({
  layout: 'basic',
});

const route = useRoute();

const { data: posts } = await useAsyncData(route.path, async () => {
  return queryCollection('blog')
    .all()
    .then((posts) => {
      return posts
        .filter((post) => !post.draft)
        .sort((a, b) => compareDescDate(a.date, b.date));
    });
});
</script>
