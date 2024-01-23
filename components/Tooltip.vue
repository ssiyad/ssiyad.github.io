<template>
  <div class="group relative flex flex-col items-center">
    <slot />
    <div
      class="absolute top-0 mt-8 hidden flex-col items-center group-hover:flex"
    >
      <div class="-mb-2 size-3 rotate-45 bg-black"></div>
      <span
        class="whitespace-no-wrap relative z-10 rounded bg-black p-2 text-xs leading-none text-white shadow-lg"
      >
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
