<template>
  <div class="p-4">
    <h1 class="prose-custom mb-4">
      <a :href="route.path"> Repositories </a>
    </h1>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div
        v-for="project in projects"
        :key="project.id"
        class="border-brand-100 group dark:border-brand-900 rounded-md border p-4
          dark:text-white"
      >
        <div class="mb-1 flex items-center justify-between">
          <div class="font-medium">
            {{ project.name }}
          </div>
          <a
            :href="project.html_url"
            target="_blank"
            class="hidden group-hover:block"
          >
            <Icon name="lucide:external-link" />
          </a>
        </div>
        <div class="mb-1 text-sm">{{ project.description }}</div>
        <div
          class="mb-1 flex flex-wrap items-center text-sm text-neutral-700 dark:text-neutral-300"
        >
          {{ project.language }}
          <template v-for="topic in project.topics" :key="topic">
            <Icon name="lucide:dot" />
            {{ topic }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Sabu Siyad',
});

definePageMeta({
  layout: 'basic',
});

const route = useRoute();

const { data: projects } = await useAsyncData(route.path, async () => {
  return fetch(
    'https://api.github.com/search/repositories?q=user:ssiyad+fork:false&sort=stars',
  ).then((response) => response.json().then((data) => data.items));
});
</script>
