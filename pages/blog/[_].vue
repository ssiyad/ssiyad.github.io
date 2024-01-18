<template>
  <main>
    <ContentDoc #default="{ doc }">
      <article>
        <div class="m-auto mt-4 max-w-prose">
          <h1 class="m-0 text-2xl font-medium">
            {{ doc.title }}
          </h1>
          <hr class="mt-4" />
        </div>
        <ContentRenderer
          class="prose prose-slate m-auto my-4 prose-headings:w-max prose-headings:bg-amber-100 prose-headings:p-2 prose-headings:font-sans prose-headings:font-normal prose-headings:text-slate-800 prose-a:no-underline prose-pre:rounded-none"
          :value="doc"
        />
      </article>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blog',
});
</script>
