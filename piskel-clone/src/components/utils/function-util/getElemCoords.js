export default function (canv, elem) {
  const canvWidth = +getComputedStyle(canv).width.slice(0, -2);
  const canvasK = canvWidth / canv.width;
  const x = Math.round(elem.offsetX / canvasK);
  const y = Math.round(elem.offsetY / canvasK);

  return {
    x,
    y,
  };
}
