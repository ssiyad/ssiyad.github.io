<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <main class="m-4">
        <ContentRenderer class="prose-custom mx-auto" :value="doc" />
      </main>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'basic',
});
</script>
