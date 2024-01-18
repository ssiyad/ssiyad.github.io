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
import { columns, rows, cells, census, inProgress, isPaused } from './data';
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
});
setInterval(() => {
  if (inProgress.value || isPaused.value) return;
  inProgress.value = true;
  for (const [index, _] of census.value.entries()) {
    const isLeftInRow = (index - 1) % columns.value !== 0;
    const isLeftAlive = isLeftInRow && census.value[index - 1];
    const isRightInRow = (index + 1) % columns.value !== 0;
    const isRightAlive = isRightInRow && census.value[index + 1];
    const isTopExist = index - columns.value >= 0;
    const isTopAlive = isTopExist && census.value[index - columns.value];
    const isBottomExist = index + columns.value < cells.value;
    const isBottomAlive = isBottomExist && census.value[index + columns.value];
    const aliveNeighbors = [
      isLeftAlive,
      isRightAlive,
      isTopAlive,
      isBottomAlive,
    ].filter(Boolean).length;
    const overpopulation = aliveNeighbors > 3;
    const underpopulation = aliveNeighbors < 2;
    const canLive = !underpopulation && !overpopulation;
    census.value[index] = canLive;
  }
  inProgress.value = false;
}, 1000);
</script>
