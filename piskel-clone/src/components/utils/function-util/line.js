import setDitheringPixel from './setDitheringPixel';
import setPixel from './setPixel';

export default function (x0, y0, x1, y1, canv, imgData, color1, size, color2) {
  const dx = Math.abs(x1 - x0);
  const sx = x0 < x1 ? 1 : -1;
  const dy = Math.abs(y1 - y0);
  const sy = y0 < y1 ? 1 : -1;
  let err = (dx > dy ? dx : -dy) / 2;

  let x = x0;
  let y = y0;

  while (size) {
    if (x < 0 || x >= canv.width) break;
    if (color2) {
      setDitheringPixel(x, y, canv, imgData, color1, color2, size);
    } else {
      setPixel(x, y, canv, imgData, color1, size);
    }
    if (x === x1 && y === y1) break;

    const e2 = err;
    if (e2 > -dx) {
      err -= dy;
      x += sx;
    }
    if (e2 < dy) {
      err += dx;
      y += sy;
    }
  }
}
