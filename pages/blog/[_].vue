<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <article>
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
