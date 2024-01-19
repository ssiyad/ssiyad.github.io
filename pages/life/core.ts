import data from './data';

export function init() {
  setInterval(() => {
    if (data.inProgress || data.isPaused) return;
    data.inProgress = true;
    const censusCopy = data.census.slice();
    for (let idx = 0; idx < data.census.length; idx++) {
      censusCopy[idx] = _(idx);
    }
    data.census = censusCopy;
    data.inProgress = false;
  }, 500);
}

function exists(idx: number) {
  return idx >= 0 && idx < data.census.length;
}

function _(idx: number) {
  const neighbors = [
    idx - data.columns - 1,
    idx - data.columns,
    idx - data.columns + 1,
    idx - 1,
    idx + 1,
    idx + data.columns - 1,
    idx + data.columns,
    idx + data.columns + 1,
  ];
  const neighborsAlive = neighbors
    .filter((i) => exists(i))
    .filter((i) => data.census[i]).length;
  const underpopulated = neighborsAlive < 2;
  const overpopulated = neighborsAlive > 3;
  const optimal = neighborsAlive === 3;

  if (!data.census[idx]) {
    return optimal;
  }

  return !underpopulated && !overpopulated;
}
