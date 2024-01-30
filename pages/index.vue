<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <main class="m-4">
        <ContentRenderer
          class="prose prose-slate mx-auto prose-headings:text-4xl prose-a:prose-headings:font-semibold prose-a:prose-headings:no-underline prose-hr:mx-auto prose-hr:w-1/3"
          :value="doc"
        />
      </main>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'basic',
});
</script>
