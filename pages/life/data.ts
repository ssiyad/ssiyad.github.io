import { ref } from 'vue';

export const columns = ref(20);
export const rows = ref(20);
export const cells = computed(() => columns.value * rows.value);
export const census = ref(new Array(cells.value).fill(false));
export const inProgress = ref(false);
export const isPaused = ref(false);
