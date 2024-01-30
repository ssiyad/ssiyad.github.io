<template>
  <div v-if="target">
    <div class="prose p-2">
      <div>Redirecting to {{ target }}</div>
      <a :href="target">Click here if you are not redirected</a>
    </div>
  </div>
  <div v-else>
    <Error :error="{ statusCode: 404, message: 'Not found' }" />
  </div>
</template>

<script setup lang="ts">
import redirects from '@/resources/redirects';
import Error from '@/error.vue';

const path = useRoute().fullPath;
const target = redirects[path];
if (target) setTimeout(() => (window.location.href = target), 3000);

useHead({
  title: target ? 'Redirecting' : 'Not found',
});
</script>
