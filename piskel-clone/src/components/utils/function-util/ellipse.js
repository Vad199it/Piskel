import line from './line';

export default function (x0, y0, x1, y1, canv, imgData, color, size, shift) {
  const step = 2 * Math.PI / 20;
  const xC = (x1 + x0) / 2;
  const yC = (y1 + y0) / 2;
  const r = Math.abs(x1 - xC);

  let kX;
  let kY;

  const deltaX = Math.abs(x1 - xC);
  const deltaY = Math.abs(y1 - yC);
  if (shift) {
    kX = 1;
    kY = 1;
  } else if (deltaX > deltaY) {
    kX = 1;
    kY = (deltaX === 0) ? 1 : deltaY / deltaX;
  } else {
    kX = (deltaY === 0) ? 1 : deltaX / deltaY;
    kY = 1;
  }

  let tempX = Math.round(xC + kX * r);
  let tempY = Math.round(yC);

  for (let alpha = step; alpha <= 2 * Math.PI; alpha += step) {
    const x = Math.round(xC + kX * r * Math.cos(alpha));
    const y = Math.round(yC - kY * r * Math.sin(alpha));

    line(tempX, tempY, x, y, canv, imgData, color, size);

    tempX = x;
    tempY = y;
  }
}
