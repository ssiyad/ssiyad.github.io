<template>
  <main>
    <ContentDoc #default="{ doc }">
      <article>
        <div class="prose m-auto mt-4">
          <h1 class="m-0 font-medium">
            {{ doc.title }}
          </h1>
          <hr class="mt-4" />
        </div>
        <ContentRenderer
          class="prose prose-slate m-auto my-4 prose-headings:w-max prose-headings:bg-amber-100 prose-headings:p-2 prose-headings:font-sans prose-headings:font-normal prose-headings:text-slate-800 prose-code:font-mono prose-pre:rounded-none prose-pre:font-mono"
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
