<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <article class="m-4">
        <div class="m-auto mt-4 max-w-prose">
          <h1 class="mb-4 w-max border-b-2 border-gray-600 pb-2 font-medium">
            <span class="mr-1">#</span>
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
