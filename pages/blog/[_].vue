<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <article>
        <div class="text-sm text-neutral-500 dark:invert">
          {{ format(doc.date, 'do MMMM, uuuu') }}
        </div>
        <ContentRenderer class="prose-custom mx-4 sm:mx-auto" :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
import { format } from 'date-fns';

definePageMeta({
  layout: 'basic',
});
</script>
