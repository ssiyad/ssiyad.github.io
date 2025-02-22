<template>
  <Layout :breadcrumbs="breadcrumbs">
    <main>
      <div class="prose-custom mx-4 sm:mx-auto">
        <div v-for="post in posts" :key="post.id">
          <h2>
            <a :href="post.path">
              {{ post.title }}
            </a>
          </h2>
          <div class="line-clamp-3">{{ post.description }}</div>
          <div class="text-sm text-neutral-500 dark:invert">
            {{ formatDate(post.date, 'do MMMM, uuuu') }}
          </div>
        </div>
      </div>
    </main>
  </Layout>
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
const breadcrumbs = [
  {
    text: 'Blog',
    path: '/blog',
  },
];

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
