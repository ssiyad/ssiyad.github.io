<template>
  <main>
    <ContentList v-slot="{ list }" path="/blog">
      <div class="prose-custom mx-auto">
        <div v-for="item in list" :key="item._path">
          <h2>
            <a :href="item._path">
              {{ item.title }}
            </a>
          </h2>
          <div class="line-clamp-3">{{ item.description }}</div>
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
  layout: 'basic',
});
</script>
