<template>
  <div>
    <Menu />
    <div
      class="grid"
      :style="{
        gridTemplateColumns: `repeat(${data.columns}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${data.rows}, minmax(0, 1fr))`,
      }"
    >
      <Cell
        v-for="(v, index) in data.census"
        :alive="v"
        :style="{
          width: width / data.columns + 'px',
          height: height / data.rows + 'px',
        }"
        @toggle="() => (data.census[index] = !data.census[index])"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import data from './data';
import { init } from './core';
import Cell from './Cell.vue';
import Menu from './Menu.vue';

const cellSize = 20;
const { height, width } = useWindowSize();
onMounted(() => {
  data.columns = Math.trunc(width.value / cellSize);
  data.rows = Math.trunc(height.value / cellSize);
  data.census = new Array(data.columns * data.rows)
    .fill(false)
    .map(() => Math.random() < 0.3);
  init();
});
</script>
