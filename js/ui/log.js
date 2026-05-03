export function latestLogLines(state, count = 8) {
  return (state.log ?? []).slice(0, count);
}
