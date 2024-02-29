<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <article class="m-4">
        <div class="m-auto mt-4 max-w-prose">
          <h1
            class="m-0 mb-4 text-2xl font-medium text-gray-800 underline underline-offset-8"
          >
            {{ doc.title }}
          </h1>
        </div>
        <ContentRenderer class="prose-custom mx-auto" :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'basic',
});
</script>
