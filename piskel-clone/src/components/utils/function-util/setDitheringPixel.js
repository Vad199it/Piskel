export default function (x, y, canv, imgData, firstColor, secondColor, size) {
  if (x >= canv.width) return;

  const { data } = imgData;
  let color1;
  let color2;
  if (x % 2 === y % 2) {
    color1 = firstColor;
    color2 = secondColor;
  } else {
    color1 = secondColor;
    color2 = firstColor;
  }

  let rgb1 = color1;
  rgb1 = rgb1.replace(/[^\d,]/g, '').split(',');

  let rgb2 = color2;
  rgb2 = rgb2.replace(/[^\d,]/g, '').split(',');

  let n = (y * canv.width + x) * 4;
  for (let k = 0; k < 4; k += 1) {
    data[n + k] = +rgb1[k];
  }

  let rgb;

  for (let i = 1; i < size; i += 1) {
    if ((x - i) >= 0 && (x - i) < canv.width) {
      n = ((y - i) * canv.width + (x - i)) * 4; // pivot

      for (let k = 0; k < 4; k += 1) {
        data[n + k] = +rgb1[k];
      }
    }


    for (let j = 1; j <= i; j += 1) {
      // eslint-disable-next-line no-continue
      if ((x - i + j) < 0 || (x - i + j) >= canv.width) continue;

      n = ((y - i) * canv.width + (x - i + j)) * 4;
      rgb = (j % 2 === 0) ? rgb1 : rgb2;
      for (let k = 0; k < 4; k += 1) {
        data[n + k] = +rgb[k];
      }

      // eslint-disable-next-line no-continue
      if ((x - i) < 0 || (x - i) >= canv.width) continue;

      n = ((y - i + j) * canv.width + (x - i)) * 4;
      rgb = (j % 2 === 0) ? rgb1 : rgb2;
      for (let k = 0; k < 4; k += 1) {
        data[n + k] = +rgb[k];
      }
    }
  }
}
