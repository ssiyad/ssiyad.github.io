import { columns, census, inProgress, isPaused } from './data';

export function init() {
  setInterval(() => {
    if (inProgress.value || isPaused.value) return;
    inProgress.value = true;
    for (let i = 0; i < census.value.length; i++) {
      update(i);
    }
    inProgress.value = false;
  }, 500);
}

function update(idx: number) {
  census.value[idx] = _(idx);
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
