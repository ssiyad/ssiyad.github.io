<template>
  <div
    :class="{
      'bg-gray-900': alive,
      'bg-white': !alive,
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
