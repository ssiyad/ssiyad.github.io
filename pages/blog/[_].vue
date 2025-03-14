<template>
  <main>
    <article class="prose-custom mx-auto max-w-prose p-4">
      <h1>
        <a :href="route.path">
          {{ post?.title }}
        </a>
      </h1>
      <div v-if="post?.date" class="text-sm text-neutral-500">
        {{ format(post.date, 'do MMMM, uuuu') }}
      </div>
      <ContentRenderer v-if="post" class="mx-4 sm:mx-auto" :value="post" />
    </article>
  </main>
</template>

<script setup lang="ts">
import { format } from 'date-fns';

const route = useRoute();

const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first();
});

useHead({
  title: post?.value?.title,
});

useSeoMeta({
  title: post?.value?.title,
  description: post?.value?.description,
});

definePageMeta({
  layout: 'basic',
});
</script>
