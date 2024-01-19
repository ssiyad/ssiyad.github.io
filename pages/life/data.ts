export default reactive({
  columns: 20,
  rows: 20,
  census: new Array(400).fill(false),
  inProgress: false,
  isPaused: false,
});
