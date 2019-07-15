export default function (canv) {
  if (!canv) return false;

  const ctx = canv.getContext('2d');
  const resetData = ctx.createImageData(canv.width, canv.height);
  ctx.putImageData(resetData, 0, 0);

  return true;
}
