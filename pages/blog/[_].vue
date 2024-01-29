<template>
  <main>
    <ContentDoc #default="{ doc }">
      <article class="m-4">
        <div class="m-auto mt-4 max-w-prose">
          <h1 class="m-0 font-serif text-2xl font-medium">
            {{ doc.title }}
          </h1>
          <hr class="mt-4" />
        </div>
        <ContentRenderer
          class="prose prose-slate mx-auto my-4 prose-a:prose-headings:no-underline prose-pre:bg-slate-100"
          :value="doc"
        />
      </article>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'basic',
});
</script>
