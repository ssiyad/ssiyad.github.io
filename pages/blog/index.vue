<template>
  <main>
    <ContentList v-slot="{ list }" path="/blog">
      <div class="prose-custom mx-auto my-4 space-y-4 prose-a:no-underline">
        <div v-for="item in list" :key="item._path">
          <a
            class="mb-2 block w-max border-b-2 pb-2 font-medium"
            :href="item._path"
          >
            <span class="mr-1">#</span>
            {{ item.title }}
          </a>
          <div>{{ item.description }}</div>
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
