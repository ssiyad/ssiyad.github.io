<template>
  <div
    :class="{
      'bg-gray-900': alive,
      'dark:bg-gray-100': alive,
      'bg-white': !alive,
      'dark:bg-slate-900': !alive,
    }"
    @click="() => $emit('toggle')"
  />
</template>

<script setup lang="ts">
defineProps({
  alive: {
    type: Boolean,
    required: true,
  },
});

defineEmits<{
  (event: 'toggle'): void;
}>();
</script>
