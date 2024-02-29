<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <ContentRenderer class="prose-custom mx-auto" :value="doc" />
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'basic',
});
</script>
