<template>
  <div>
    <Menu />
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
import { columns, rows, cells, census } from './data';
import { init } from './core';
import Cell from './Cell.vue';
import Menu from './Menu.vue';

const cellSize = 20;
const { height, width } = useWindowSize();
onMounted(() => {
  columns.value = Math.trunc(width.value / cellSize);
  rows.value = Math.trunc(height.value / cellSize);
  census.value = new Array(cells.value)
    .fill(false)
    .map(() => Math.random() < 0.3);
  init();
});
</script>
