<template>
  <main>
    <ContentDoc #default="{ doc }">
      <article>
        <div class="m-auto mt-4 max-w-prose">
          <h1 class="font-serif m-0 text-2xl font-medium">
            {{ doc.title }}
          </h1>
          <hr class="mt-4" />
        </div>
        <ContentRenderer
          class="prose prose-slate mx-auto my-4 prose-pre:bg-slate-100 prose-a:prose-headings:no-underline"
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
