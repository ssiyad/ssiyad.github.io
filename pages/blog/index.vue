<template>
  <main>
    <ContentList v-slot="{ list }" path="/blog">
      <div class="prose-custom mx-4 sm:mx-auto">
        <div v-for="post in list.sort(sortByDate)" :key="post._id">
          <h2>
            <a :href="post._path">
              {{ post.title }}
            </a>
          </h2>
          <div class="line-clamp-3">{{ post.description }}</div>
          <div class="w-max text-neutral-500">
            Posted on {{ format(post.date, 'do MMMM, uuuu') }}
          </div>
        </div>
      </div>
    </ContentList>
  </main>
</template>

<script setup lang="ts">
import { format } from 'date-fns';

useHead({
  title: 'Blog',
});

definePageMeta({
  layout: 'basic',
});

function sortByDate(a, b) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}
</script>
