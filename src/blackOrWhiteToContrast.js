export function blackOrWhiteToContrast(color) {
  const r = parseInt(color[1] + color[2], 16);
  const g = parseInt(color[3] + color[4], 16);
  const b = parseInt(color[5] + color[6], 16);
  const avg = (r + g + b) / 3;
  if ((avg / 255) < 0.5)
    return "#ffffff";
  return "#000000";
}
