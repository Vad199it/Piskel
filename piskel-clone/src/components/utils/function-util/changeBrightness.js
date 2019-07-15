export default function (x, y, canv, imgData, size, inc) {
  if (x >= canv.width) return;

  const { data } = imgData;

  let n = (y * canv.width + x) * 4;
  for (let k = 0; k < 3; k += 1) {
    data[n + k] += inc;
  }

  for (let i = 1; i < size; i += 1) {
    if ((x - i) >= 0 && (x - i) < canv.width) {
      n = ((y - i) * canv.width + (x - i)) * 4;
      for (let k = 0; k < 3; k += 1) {
        data[n + k] += inc;
      }
    }


    for (let j = 1; j <= i; j += 1) {
      // eslint-disable-next-line no-continue
      if ((x - i + j) < 0 || (x - i + j) >= canv.width) continue;

      n = ((y - i) * canv.width + (x - i + j)) * 4;
      for (let k = 0; k < 3; k += 1) {
        data[n + k] += inc;
      }

      // eslint-disable-next-line no-continue
      if ((x - i) < 0 || (x - i) >= canv.width) continue;

      n = ((y - i + j) * canv.width + (x - i)) * 4;
      for (let k = 0; k < 3; k += 1) {
        data[n + k] += inc;
      }
    }
  }
}
