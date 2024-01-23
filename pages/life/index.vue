<template>
  <div>
    <Menu v-model:is-paused="isPaused" :census="census" />
    <div
      class="grid"
      :style="{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }"
    >
      <Cell
        v-for="(v, index) in census"
        :alive="v"
        :style="{
          width: width / columns + 'px',
          height: height / rows + 'px',
        }"
        @toggle="() => (census[index] = !census[index])"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Cell from './Cell.vue';
import Menu from './Menu.vue';

useHead({
  title: "Conway's Game of Life",
});
useSeoMeta({
  title: "Conway's Game of Life",
  description: "Conway's Game of Life",
});

const cellSize = 20;
const columns = ref(20);
const rows = ref(20);
const census = ref(new Array(columns.value * rows.value).fill(false));
const inProgress = ref(false);
const isPaused = ref(false);
const { height, width } = useWindowSize();

onMounted(() => {
  columns.value = Math.trunc(width.value / cellSize);
  rows.value = Math.trunc(height.value / cellSize);
  census.value = new Array(columns.value * rows.value)
    .fill(false)
    .map(() => Math.random() < 0.3);
  init();
});

function init() {
  setInterval(() => {
    if (inProgress.value || isPaused.value) return;
    inProgress.value = true;
    const censusCopy = census.value.slice();
    for (let idx = 0; idx < census.value.length; idx++) {
      censusCopy[idx] = _(idx);
    }
    census.value = censusCopy;
    inProgress.value = false;
  }, 500);
}

function exists(idx: number) {
  return idx >= 0 && idx < census.value.length;
}

function _(idx: number) {
  const neighbors = [
    idx - columns.value - 1,
    idx - columns.value,
    idx - columns.value + 1,
    idx - 1,
    idx + 1,
    idx + columns.value - 1,
    idx + columns.value,
    idx + columns.value + 1,
  ];
  const neighborsAlive = neighbors
    .filter((i) => exists(i))
    .filter((i) => census.value[i]).length;
  const underpopulated = neighborsAlive < 2;
  const overpopulated = neighborsAlive > 3;
  const optimal = neighborsAlive === 3;

  if (!census.value[idx]) {
    return optimal;
  }

  return !underpopulated && !overpopulated;
}
</script>
