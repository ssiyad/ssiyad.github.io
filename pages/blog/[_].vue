<template>
  <Layout :breadcrumbs="breadcrumbs">
    <main class="prose-custom">
      <article>
        <h1>
          <a :href="route.path">
            {{ post?.title }}
          </a>
        </h1>
        <div v-if="post?.date" class="text-sm text-neutral-500 dark:invert">
          {{ format(post.date, 'do MMMM, uuuu') }}
        </div>
        <ContentRenderer
          v-if="post"
          class="prose-custom mx-4 sm:mx-auto"
          :value="post"
        />
      </article>
    </main>
  </Layout>
</template>

<script setup lang="ts">
import { format } from 'date-fns';

const route = useRoute();

const { data: post } = await useAsyncData(route.path, async () => {
  return queryCollection('blog').path(route.path).first();
});

const breadcrumbs = [
  {
    text: 'Blog',
    path: '/blog',
  },
  {
    text: post.value?.title || 'Post',
  },
];

useHead({
  title: post?.value?.title,
});

useSeoMeta({
  title: post?.value?.title,
  description: post?.value?.description,
});
</script>
