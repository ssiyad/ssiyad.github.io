<template>
  <main>
    <ContentDoc #default="{ doc }">
      <main>
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
